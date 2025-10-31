
import Image from "next/image";

import Auth from "../components/Auth";

import { getSession } from "../../lib/session";
import pulo from "../../db/autenticacao";
import { decrypt  } from "../../lib/session";
import { cookies } from "next/headers";
import { logout } from "@/lib/autentication";

import { FaArrowUp } from "react-icons/fa";
import DashboardCharts from "../components/DashboardCharts";
import EstoqueTable from "../components/EstoqueTable";



export default function Home() {

   const produtos = [
    { id: 1, nome: "Fone de Ouvido Bluetooth", codigo: "PRD-001", categoria: "Eletrônicos", quantidade: 48, max: 50 },
    { id: 2, nome: "Smartwatch", codigo: "PRD-002", categoria: "Eletrônicos", quantidade: 5, max: 50 },
    { id: 3, nome: "Câmera Digital", codigo: "PRD-003", categoria: "Eletrônicos", quantidade: 12, max: 50 },
    { id: 4, nome: "Perfume", codigo: "PRD-004", categoria: "Beleza", quantidade: 32, max: 50 },
  ];

  const atividades = [
   { fornecedor: "John Doe", horas: "2 horas"},
  ]
  

  return (
    <section className="">

        <main className="flex flex-col w-full  gap-8 pb-10">
          <div className="flex items-center border px-4 border-b border-gray-200 h-[76px]">
           <h1 className="text-base">Dashboard Overview</h1>
          </div>

          <div className="px-4 flex gap-3  w-full max-w-[1084]">

            <div className="w-[300px] h-[100px]  flex items-center justify-between px-6 shadow-lg border-x border-gray-200 rounded-lg">

              <div className="">
                <p className="text-[14px] text-gray-600">Total de Produtos</p>
                <p className="font-bold text-[24px]">1,248</p>
                <p className="text-[14px] flex gap-2 items-center text-green-500"><span><FaArrowUp /></span>12.5% vs último mês</p>
              </div>
              <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-blue-200">
                <Image
                  src="/icons/package.svg"
                  alt="Icone de pacote"
                  width={28}
                  height={28}
                  />
              </div>

            </div>

             <div className="w-[300px] h-[100px]  flex items-center justify-between px-6 shadow-lg border-x border-gray-200 rounded-lg">

              <div className="">
                <p className="text-[14px] text-gray-600">Estoque Baixo</p>
                <p className="font-bold text-[24px]">47</p>
                <p className="text-[14px] flex gap-2 items-center text-red-500"><span><FaArrowUp /></span>5% vs último mês</p>
              </div>
              <div className="rounded-full h-[45px] w-[45px] flex items-center justify-center bg-red-200">
                <Image
                  src="/icons/warning.svg"
                  alt="Icone de pacote"
                  width={28}
                  height={28}
                  />
              </div>

            </div>

             <div className="w-[300px] h-[100px] flex items-center justify-between px-6 shadow-lg border-x border-gray-200 rounded-lg">

              <div className="">
                <p className="text-[14px] text-gray-600">Valor Total</p>
                <p className="font-bold text-[24px]">R$ 1.284,75</p>
                <p className="text-[14px] flex gap-2 items-center text-green-500"><span><FaArrowUp /></span>8.5% vs último mês</p>
              </div>
              <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-green-200">
                <Image
                  src="/icons/attach_money.svg"
                  alt="Icone de pacote"
                  width={28}
                  height={28}
                  />
              </div>

            </div>

            <div className="w-[300px] h-[100px] flex items-center justify-between px-6 shadow-lg border-x border-gray-200 rounded-lg">

              <div className="">
                <p className="text-[14px] text-gray-600">Fornecedores</p>
                <p className="font-bold text-[24px]">32</p>
                <p className="text-[14px] flex gap-2 items-center text-green-500"><span><FaArrowUp /></span>12 novos este mês</p>
              </div>
              <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-indigo-200">
                 <Image
                  src="/icons/deployed.svg"
                  alt="Icone de pacote"
                  width={28}
                  height={28}
                 
                  />
              </div>

            </div>
          </div>

          <div className="flex items-center justify-between max-w-[1084]">
            <DashboardCharts />
          
          </div>


          <div className="px-4 flex gap-8">
            <div className=" min-w-[320px] h-[397px] shadow-lg border-x border-gray-300 rounded-lg py-4 px-4">
              <h2 className="font-bold mb-4">Atividades recentes</h2>
              <div>
                <div className="flex items-center gap-2 pl-4 mb-6">
                  <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-blue-200">
                  <Image
                    src='/icons/person_add.svg'
                    alt='icone de pessoa'
                    width={28}
                    height={28}
                     
                  />
                  </div>

                  <div>
                    <p className="font-bold">Novo fornecedor</p>
                    <p>John Doe - <span>2 horas atrás</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-2 pl-4 mb-6">
                  <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-green-200">
                  <Image
                    src='/icons/shopping_cart.svg'
                    alt='icone de pessoa'
                    width={28}
                    height={28}
                     
                  />
                  </div>

                  <div>
                    <p className="font-bold">Compra realizada</p>
                    <p>Order 456 - <span>4 horas atrás</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-2 pl-4 mb-6">
                  <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-indigo-200">
                  <Image
                    src='/icons/chat.svg'
                    alt='icone de pessoa'
                    width={28}
                    height={28}
                     
                  />
                  </div>

                  <div>
                    <p className="font-bold">Nova mensagem</p>
                    <p>Conector UPC- <span>6 horas atrás</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-2 pl-4">
                  <div className="rounded-full h-[45px] w-[45px]  flex items-center justify-center bg-orange-200">
                    <Image
                      src='/icons/notifications.svg'
                      alt='icone de pessoa'
                      width={28}
                      height={28}
                      
                    />
                  </div>

                  <div>
                    <p className="font-bold">Atualização do sistema</p>
                    <p>Versão 2.3.5 - <span>1 dia atrás</span></p>
                    </div>
                </div>

                
              </div>

            </div>

            <div className="shadow-lg border-x border-gray-300 rounded-lg w-full h-[397] px-4 pt-4">
                <div className="flex justify-between px-4">
                  <h2  className="font-bold">Status do Estoque</h2>
                  <p className="text-blue-500 font-bold">Ver todos</p>
                </div>

                  <EstoqueTable produtos={produtos} />

            </div>
          </div>

        </main>
    
    </section>
  );
}
