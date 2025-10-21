'use client'

import Image from "next/image"

import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import Modal from "@/app/components/Modal";


export default function Produtos(){

      const [products] = useState([
    {
      nome: "Conector UPC",
      codigo: "PRD-001",
      descricao: "Caixa plástica de 20L com tampa e alças laterais",
      fornecedor: "Distribuidora Alfa",
      categoria: "Eletrônicos",
      valor: "R$ 48,99",
      status: "Ativo",
    },
    {
      nome: "Smartwatch",
      codigo: "PRD-002",
      descricao: "Relógio inteligente",
      fornecedor: "Distribuidora Alfa",
      categoria: "Eletrônicos",
      valor: "R$ 199,90",
      status: "Inativo",
    },
  ]);

    return (
         <section className="h-full overflow-hidden">
            <main className="flex flex-col  gap-8 pb-10 ">
                <div className="flex items-center justify-between  px-4  h-[76px]">

                    <div className="">
                    <h1 className="font-bold">Inventário de produtos</h1>
                    <p>Gerencie seus itens de estoque e níveis de inventário</p>
                    </div>

                    <div className="flex justify-center  w-[500px] gap-4">
                        <button className="border flex border-gray-400 text-gray-400 w-[109px] h-[32px] rounded items-center justify-center cursor-pointer text-sm gap-1">
                            <Image src="/icons/upload_file.svg" alt="Icone de upload" width={19} height={19}/>
                            Importar
                        </button>

                         <button className="border flex border-gray-400 text-gray-400 w-[109px] h-[32px] rounded items-center justify-center cursor-pointer text-sm gap-1">
                            <Image src="/icons/file_export.svg" alt="Icone de upload" width={19} height={19}/>
                            Exportar
                        </button>

                        <Modal />
                    </div>


                </div>

          <div className="p-4 w-full">
            {/* Cabeçalho - apenas desktop */}
            <div className="hidden lg:grid grid-cols-[2fr_1fr_2fr_1.5fr_1.5fr_1fr_1fr_1fr] bg-gray-100 font-semibold text-gray-700 text-sm px-4 py-3 rounded-t-lg ">
                <span>Produto</span>
                <span>Código</span>
                <span>Descrição</span>
                <span>Fornecedor</span>
                <span>Categoria</span>
                <span>Valor</span>
                <span>Status</span>
                <span className="text-center">Ação</span>
            </div>

            {/* Lista */}
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-b-lg shadow-sm">
                {products.map((p, i) => (
                <div
                    key={i}
                    className="p-4 hover:bg-gray-50 transition flex flex-col lg:grid lg:grid-cols-[2fr_1fr_2fr_1.5fr_1.5fr_1fr_1fr_1fr] lg:items-center"
                >
                    {/* Produto */}
                    <div className="flex items-center gap-2 mb-2 lg:mb-0 ">
                    <div className="bg-orange-500 p-2 rounded"><Image src="/icons/package_w.svg" width={20} height={20} alt="Icone de pacote" /></div>
                    <div>
                        <p className="font-medium text-gray-800">{p.nome}</p>
                        <p className="text-sm text-gray-500 lg:hidden">{p.codigo}</p>
                    </div>
                    </div>

                    {/* Código */}
                    <p className="hidden lg:block text-gray-600">{p.codigo}</p>

                    {/* Descrição */}
                    <p className="text-gray-600 lg:block mb-1 lg:mb-0">
                    {p.descricao}
                    </p>

                    {/* Fornecedor */}
                    <p className="text-gray-600 hidden lg:block">{p.fornecedor}</p>

                    {/* Categoria */}
                    <p className="text-gray-600 hidden lg:block">{p.categoria}</p>

                    {/* Valor */}
                    <p className="font-medium text-gray-800 mb-1 lg:mb-0">{p.valor}</p>

                    {/* Status */}
                    <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold w-fit mb-2 lg:mb-0 ${
                        p.status === "Ativo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                    >
                    {p.status}
                    </span>

                    {/* Ações */}
                    <div className="flex gap-2 justify-end lg:justify-center">
                    <button className="p-1 hover:text-blue-600 cursor-pointer">
                        <Edit size={18} />
                    </button>
                    <button className="p-1 hover:text-red-600 cursor-pointer">
                        <Trash2 size={18} />
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>

            </main>
         </section>
    )
}