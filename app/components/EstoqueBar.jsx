"use client";

export default function EstoqueBar({ quantidade, max }) {
    
  const porcentagem = Math.round((quantidade / max) * 100);

  let cor = "bg-green-500";
  if (porcentagem <= 20) cor = "bg-red-500";
  else if (porcentagem <= 40) cor = "bg-yellow-500";

  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className={`${cor} h-3 rounded-full transition-all duration-500`}
        style={{ width: `${porcentagem}%` }}
      ></div>
      <span className="text-xs text-gray-500">{quantidade} unidades</span>
    </div>
  );
}