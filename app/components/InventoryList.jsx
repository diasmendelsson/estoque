export default function InventoryList({ products }) {
  const statusColor = (status) => {
    switch (status) {
      case "Estável":
        return "bg-green-100 text-green-600";
      case "Crítico":
        return "bg-red-100 text-red-600";
      case "Instável":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-3">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="font-semibold text-gray-800">{p.name}</h3>
            <p className="text-gray-500 text-sm">
              {p.fornecedor} • {p.categoria}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <span className="text-gray-700 font-medium">
              Estoque: {p.estoque}
            </span>
            <span
              className={`text-sm px-3 py-1 rounded-full ${statusColor(
                p.status
              )}`}
            >
              {p.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}