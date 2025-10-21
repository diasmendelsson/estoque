


export default function CadProduto(){
    return(
        <form>
              <p>
          <label htmlFor="body">Texto</label>
          <textarea id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" required  />
        </p>

        <p className={styles.actions}>

        <button type='button' onClick={onCancel}>Cancelar</button>
        <button type='submit'> Enviar</button>

        </p>
        </form>
    )
}