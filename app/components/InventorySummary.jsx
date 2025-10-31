export default function InventorySummary({ data }) {

  const summary = [
    {
      title: "Total de Produtos",
      value: data.total,
      icon: "📦",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Em estoque",
      value: data.emEstoque,
      icon: "✅",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Estoque baixo",
      value: data.estoqueBaixo,
      icon: "⚠️",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Fora de Estoque",
      value: data.foraDeEstoque,
      icon: "❌",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {summary.map((item, i) => (
        <div key={i} className="rounded-2xl p-4 shadow-sm border bg-white flex align-items justify-between">
        
         <div>
            <h2 className="text-gray-500 text-sm">{item.title}</h2>
            <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
         </div>

            <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color} mb-3`}
          >
            <span className="text-xl">{item.icon}</span>
          </div>

        </div>
          
      ))}
    </div>
  );
}