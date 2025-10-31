import InventorySummary from "@/app/components/InventorySummary";
import InventoryList from "@/app/components/InventoryList";
import ExportButton from "@/app/components/ExportButton";
import { getProducts } from "@/app/actions/getProducts";
import { exportProducts } from "@/app/actions/exportProducts";

export default async function Estoque() {
  const products = await getProducts();

  const summary = {
    total: products.length,
    emEstoque: products.filter((p) => p.estoque > 10).length,
    estoqueBaixo: products.filter((p) => p.estoque > 0 && p.estoque <= 10).length,
    foraDeEstoque: products.filter((p) => p.estoque === 0).length,
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Inventário de produtos
          </h1>
          <p className="text-gray-500">
            Gerencie seus itens de estoque e níveis de inventário
          </p>
        </div>

        <ExportButton action={exportProducts} />
      </div>

      <InventorySummary data={summary} />

      <InventoryList products={products} />
    </main>
  );
}