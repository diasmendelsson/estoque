"use server";

import { getProducts } from "./getProducts";
import { promises as fs } from "fs";
import path from "path";

export async function exportProducts() {
  const products = await getProducts();

  // Cabeçalho do CSV
  const headers = ["Nome", "Fornecedor", "Categoria", "Estoque", "Status"];
  const csvRows = [headers.join(",")];

  // Linhas dos produtos
  for (const p of products) {
    csvRows.push(
      [p.name, p.fornecedor, p.categoria, p.estoque, p.status].join(",")
    );
  }

  // Gera string final
  const csvData = csvRows.join("\n");

  // Cria arquivo temporário (pasta .next/cache)
  const filePath = path.join(process.cwd(), "public", "produtos.csv");
  await fs.writeFile(filePath, csvData, "utf8");

  return `/produtos.csv`; // retorna URL para download
}