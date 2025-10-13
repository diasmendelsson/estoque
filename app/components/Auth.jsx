'use client'

import { useState } from "react";

import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useActionState } from 'react';
import autentication from "../../lib/autentication";

const initialState = { message:'',}

export default function Auth({type}){

    const isSignin = type === 'signIn';
    const label = isSignin ? 'Entrar' : 'Criar';

    // Para ver senha 
    const [visivel, setVisivel ] = useState(false)

    const [plano, setPlano ] = useState('free');
    const [ status, setStatus ] = useState('ativo')

    // Para o formulário
    const [ state, action, isPending ] = useActionState(autentication, initialState);

    return (
        <div className="flex flex-col items-center gap-4 mb-12  mt-18 ">

            <h1 className="font-bold text-4xl  text-blue-400 text-shadow-2xs">Gerencie seu estoque</h1>

            <div className=" mb-8 flex flex-col items-center gap-8">

            <div className="flex flex-col items-center mt-8 ">
                <h2 className="mb-2 w-64 text-center font-bold text-2xl text-gray-600">
                    {isSignin ? 'Bem-vindo de volta' : 'Crie sua conta'}
                </h2>

                <p className="text-sm font-bold text-gray-400">
                    {isSignin ? 'Tenha controle total do seu estoque' : 'Preencha os campos abaixo'}
                </p>
            </div>

            <form action={action} className="flex flex-col items-center gap-4">

                { !isSignin && (
                    <div className="flex flex-col w-72">
                        <label className="text-gray-600" htmlFor="nome">Nome:</label>
                        <input
                            className="w-full px-4 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="nome"
                            type="text"
                            required
                        />

                        {state.error?.nome && (
                            <p className="text-xs text-red-500 mt-1">{state.error.nome}</p>
                        )}
                    </div>
                )
                     
                }

                <div className="flex flex-col w-72">
                    <label className="text-gray-600" htmlFor="email">Email:</label>
                    <input
                        className="w-full px-2 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="email"
                        type="email"
                        required
                    />

                    {state.error?.email && (
                            <p className="text-xs text-red-500 mt-1">{state.error.email}</p>
                        )}
                </div>

                <div className="flex flex-col w-72 relative ">
                    <label htmlFor="senha_hash">Senha:</label>
                    <div className="relative w-full max-w-sm">
                
                    <input
                        className="w-full px-2 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        name="senha_hash"
                        type={visivel ? 'text' : 'password'}
                        required
                    />

                    <button className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-500" type="button" onClick={() => setVisivel(!visivel)}>
                    {visivel ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>

                </div>
                    {state.error?.senha_hash && (
                    <p className="text-xs text-red-500 mt-1">{state.error.senha_hash}</p>
                    )}
                </div>

                <input type="hidden" name="plano" value={plano} />
                <input type="hidden" name="status" value={status} />

                <input type="hidden" name="type" value={isSignin ? 'signIn' : 'signUp'} />

                <button
                  className="px-2 text-blue-400 font-bold mt-2 border border-stone-400 rounded h-8 w-24 cursor-pointer"
                  type="submit"
                   
                >
                {isPending 
                 ? 
                 (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                  </div> 
                 ) : label }
                </button>

                  <div className='z-10 flex justify-center mb-4'>
                    { state.message && (
                    <p className={state.error ? "text-red-600" : "text-green-600"}>
                        {state.message}
                    </p>
                    )}
                  </div>
             


                <div className="flex gap-2 mt-4">
                    <p className="font-semibold text-sm text-gray-600">
                     {isSignin  ? 'Novo por aqui?' : 'Já tem uma conta?'}
                    </p>
                    <Link href={!isSignin  ? '/sign-in' : '/sign-up'}>
                        <p className="text-sm font-bold text-blue-400">
                            {!isSignin  ? 'Fazer login' : 'Crie sua conta'}
                        </p>
                    </Link>
                </div>

        

            </form>

            </div>

        </div>
    )
}