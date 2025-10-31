"use server";

export async function getProducts() {
  // Aqui você buscaria os dados reais do banco.
  // Exemplo: const products = await prisma.product.findMany();

  return [
    { id: 1, name: "Fone de Ouvido Bluetooth", fornecedor: "Distribuidora Alfa", categoria: "Eletrônicos", estoque: 48, status: "Estável" },
    { id: 2, name: "Smartwatch", fornecedor: "Distribuidora Alfa", categoria: "Eletrônicos", estoque: 5, status: "Crítico" },
    { id: 3, name: "Câmera Digital", fornecedor: "Distribuidora Alfa", categoria: "Eletrônicos", estoque: 12, status: "Instável" },
    { id: 4, name: "Perfume", fornecedor: "Distribuidora Alfa", categoria: "Beleza", estoque: 32, status: "Estável" },
  ];
}