
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
        className="border flex bg-blue-900  w-[183px] h-[32px] rounded items-center justify-center cursor-pointer text-sm text-white gap-1"
      >
        <Image src="/icons/add.svg" alt="Icone de upload" width={19} height={19}/>
         Adicionar produto
      </button>
   
      {/* Modal */}
      {open && (
         <div
                className="fixed inset-0 bg-black/50 py-1 flex justify-center"
                onClick={() => setOpen(false)} // ← fecha ao clicar no fundo
            >
                <div
                className="bg-white rounded-2xl p-6 md:w-[820px] shadow-lg px-4"
                onClick={(e) => e.stopPropagation()} // ← impede o fechamento ao clicar dentro do modal
                >
                <h2 className="text-xl font-semibold mb-2 mt-2">Novo Produto</h2>


                 <form  action={handleSubmit} className="space-y-4 bg-white p-6  rounded shadow">
                 
                    <div className="sm:w-full flex justify-center align-items gap-4">
                    <div className="w-full">
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
                   <div className="sm:w-full cursor-pointer ">
                    <label  className="block text-sm font-medium text-gray-700" htmlFor="categorias">Selecione uma Categoria</label>
                    <select className="cursor-pointer mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-stone-400"  name="categorias">
                      <option>Fornecedor A</option>
                      <option>Fornecedor B</option>
                      <option>Fornecedor C</option>
                      <option>Fornecedor D</option>
                    </select>
                  </div>
                  </div>

                  <div className="sm:w-full">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                      Descrição
                    </label>
                    <textarea
                      type="text"
                      id="nome"
                      name="nome"
                      className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Descreva detalhes sobre o produto"
                    />
                  </div>

                  <div className="sm:w-full cursor-pointer ">
                    <label  className="block text-sm font-medium text-gray-700" htmlFor="categorias">Selecione uma Categoria</label>
                    <select className="cursor-pointer mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-stone-400"  name="categorias">
                      <option className="">Equipamentos de Rede</option>
                      <option>Cabeamento e Conectores</option>
                      <option>Ferramentas</option>
                      <option>Materiais de Infraestrutura</option>
                    </select>
                  </div>


                <div className="sm:flex gap-4 sm:w-full">

                  <div className="sm:w-full">
                    <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
                      Preço de Custo
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="preco"
                      name="preco"
                      className="no-spinner mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Ex: 199.90"
                    />
                  
                  </div>
                  <div className="sm:w-full">
                    <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
                      Preço de Venda
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="preco"
                      name="preco"
                      className="no-spinner mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Ex: 199.90"
                    />

                    </div>
                  </div>


                    <div className="sm:flex gap-4 sm:w-full">
                    <div className="sm:w-full">
                    <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
                      Quantidade
                    </label>
                    <input
                      type="number"
                      id="quantidade"
                      name="quantidade"
                      className="no-spinner mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Ex: 20"
                    />
                    </div> 
                    <div className="sm:w-full">
                    <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
                      Quantidade miníma
                    </label>
                    <input
                      type="number"
                      id="quantidade"
                      name="quantidade"
                      className="no-spinner mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Ex: 10"
                    />
                    </div>
                  </div>

          
                  
              
                  <div className="flex gap-4 justify-center w-full mt-2">
                
                  <button
                    onClick={() => setOpen(false)}
                    className="border flex border-gray-400 text-gray-400 w-[109px] h-[32px] rounded items-center justify-center cursor-pointer text-sm gap-1"
                  >
                  <Image src="/icons/close.svg" alt="Icone de x" width={19} height={19}/>
                  Cancelar
                  </button>

                  <button
                    type="submit"
                    className="border flex bg-blue-900 w-[183px] h-[32px] rounded items-center justify-center cursor-pointer text-sm text-white gap-1"
                  >
                   <Image src="/icons/save.svg" alt="Icone de salvar" width={19} height={19}/>
                   Salvar Produto
                  </button>
                  </div>
              </form>
          

             
                  </div>
                </div>

      
      )}
    </div>
  );
}