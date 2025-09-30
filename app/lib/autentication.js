
'use server'
import { z, ZodError, treeifyError } from 'zod';

import pool from "../db/autenticacao";
import bcrypt from 'bcrypt'; 
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

// Função para enviar os dados para o formulário
export default async function autentication(prevState, formData ){

    // Aqui é para pegar do frontend qual formulario é, signIn ou signUp
    const type = formData.get('type');

    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        senha_hash: formData.get('senha_hash'),
        plano: 'free',
        status: 'ativo',
    }

   const schema = type === 'signIn'
    ? z.object({
        email: z.email({ message: 'Coloque um email válido' }),
        senha_hash: z.string().min(6, { message: 'Senha deve ter no minímo 6 caracteres' }),
      })
    : z.object({
        nome: z.string().min(2, { message: 'Nome muito curto' }),
        email: z.email({ message: 'Coloque um email válido' }),
        senha_hash: z.string().min(6, { message: 'Senha deve ter no minímo 6 caracteres' }),
      })

    const validated = schema.safeParse(data)
    console.log(data)

      if(!validated.success){
        return {
            error: treeifyError(validated.error),
            message: 'Falha ao criar perfil, há campos inválidos ou que não foram preenchidos',
        }
      }
 
    const { nome, email, senha_hash, plano, status  } = validated.data
    
    if( type === 'signUp') {

      try {
        const hashed = await bcrypt.hash(senha_hash, 10)

        await pool.query(
          'INSERT INTO usuarios (nome, email, senha_hash, plano, status ) VALUES ( $1, $2, $3, $4, $5  )',
          [nome, email, hashed, plano, status  ]
        )

        return {
          error: false,
          message: 'Usuário cadastrado com sucesso!',
        }
      } catch(err) {
        if (err.code === '23505') {
          return {
            error: true,
            message: 'Email já cadastrado, tente outro.'
          }
        }
        console.log(err)

        return{
          error: true,
          message: 'Erro ao cadastrar. Tente novamente.'
        }
       
      }

    } else {

    try {
      const result = await pool.query(
        'SELECT * FROM usuarios WHERE email = $1',
        [email]
      )
  
      if (result.rows.length === 0) {

        cookies().set('email', email);

        return {

          error: true,
          message: 'Email não encontrado'
        }
      }
  
      const usuario = result.rows[0]

      const senhaConfere = await bcrypt.compare(senha, usuario.senha)
  
      if (!senhaConfere) {
        return {
          error: true,
          message: 'Senha incorreta'
        }
      }
   // Aqui ó 👇 depois que login deu certo:
   await createSession({
     userId: usuario.id,
     nome: usuario.nome,
     email: usuario.email
   }); // cria a session (cookie com token)

   // redireciona o usuário para profile
   return {
    error: false,
    redirect: '/',  // você avisa que quer redirecionar
  }

 } catch (err) {
   console.error(err);

   return{
    error: true,
    message: "Erro, consulte o seu ADM"
   }
  
    }
  }

}