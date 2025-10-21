
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Modal() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const produto = {
      nome: formData.get("nome"),
      preco: formData.get("preco"),
    };

    console.log("Produto adicionado:", produto);
    setOpen(false); // fecha o modal
  }

  return (
    <div>
      {/* Botão que abre o modal */}
      <button
        onClick={() => setOpen(true)}
        className="border flex bg-blue-900 w-[183px] h-[32px] rounded items-center justify-center cursor-pointer text-sm text-white gap-1"
      >
        <Image src="/icons/add.svg" alt="Icone de upload" width={19} height={19}/>
         Adicionar produto
      </button>

      {/* Modal */}
      {open && (
         <div
                className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                onClick={() => setOpen(false)} // ← fecha ao clicar no fundo
            >
                <div
                className="bg-white rounded-2xl p-6 w-96 shadow-lg"
                onClick={(e) => e.stopPropagation()} // ← impede o fechamento ao clicar dentro do modal
                >
            <h2 className="text-xl font-semibold mb-4">Novo Produto</h2>

              <form  action={handleSubmit} className="sm:max-w-3xl space-y-4 bg-white p-6 border border-gray-200 rounded shadow">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: Teclado Mecânico"
          />
        </div>


      <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
            Preço (R$)
          </label>
          <input
            type="number"
            step="0.01"
            id="preco"
            name="preco"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: 199.90"
          />
        </div>

           <div>
          <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: 20"
          />
        </div>

 
        
    
        <button
          type="submit"
          className=" flex items-center justify-center cursor-pointer w-full py-2 px-4 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition"
        >
        Cadastrar
        </button>
      </form>
          </div>
  
        </div>

      
      )}
    </div>
  );
}