import EstoqueBar from "./EstoqueBar";

export default function EstoqueTable({ produtos }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Produto</th>
            <th className="p-3">Código</th>
            <th className="p-3">Categoria</th>
            <th className="p-3 w-40">Estoque Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => {
            let status = "Estável";
            if (produto.quantidade <= 10) status = "Crítico";
            else if (produto.quantidade <= 20) status = "Atenção";

            return (
              <tr key={produto.id} className="border-b last:border-none">
                <td className="p-3">{produto.nome}</td>
                <td className="p-3">{produto.codigo}</td>
                <td className="p-3">{produto.categoria}</td>
                <td className="p-3">
                  <EstoqueBar
                    quantidade={produto.quantidade}
                    max={produto.max}
                  />
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      status === "Crítico"
                        ? "bg-red-100 text-red-700"
                        : status === "Atenção"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}