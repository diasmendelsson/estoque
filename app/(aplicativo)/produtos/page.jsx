import Image from "next/image"


export default function Produtos(){
    return (
         <section className="h-full">
            <main className="flex flex-col w-full  gap-8 pb-10">
                <div className="flex items-center justify-between border px-4 border-b border-gray-200 h-[76px]">

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

                         <button className="border flex bg-blue-900 w-[183px] h-[32px] rounded items-center justify-center cursor-pointer text-sm text-white gap-1">
                            <Image src="/icons/add.svg" alt="Icone de upload" width={19} height={19}/>
                            Adicionar produto
                        </button>
                    </div>


                </div>

               <div className="border w-[1552px] h-[727px] shadow-lg border-x border-gray-300 rounded-lg ml-6 pt-8">
            
                {/* Tabela */}
                <table className="w-full text-center  ">
                    <thead>
                    <tr>
                        <th scope="col">PRODUTO</th>
                        <th scope="col">CÓDIGO</th>
                        <th scope="col">DESCRIÇÃO</th>
                        <th scope="col">FORNECEDOR</th>
                        <th scope="col">CATEGORIA</th>
                        <th scope="col">VALOR</th>
                        <th scope="col">STATUS</th>
                    </tr>
                    </thead>
                    <tbody className="">
                    <tr className="mb-8 border">
                        <td className="border flex items-center justify-center">Chris</td>
                        <td >12345</td>
                        <td>HTML tables</td>
                        <td>Fornecedor X</td>
                        <td>Categoria A</td>
                        <td>R$ 99,90</td>
                        <td>Ativo</td>
                    </tr>

                     <tr className="mb-8 border">
                        <td className="border flex items-center justify-center">Chris</td>
                        <td >12345</td>
                        <td>HTML tables</td>
                        <td>Fornecedor X</td>
                        <td>Categoria A</td>
                        <td>R$ 99,90</td>
                        <td>Ativo</td>
                    </tr>

                    <tr className="mb-8 border">
                        <td className="border flex items-center justify-center">Chris</td>
                        <td >12345</td>
                        <td>HTML tables</td>
                        <td>Fornecedor X</td>
                        <td>Categoria A</td>
                        <td>R$ 99,90</td>
                        <td>Ativo</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </main>
         </section>
    )
}