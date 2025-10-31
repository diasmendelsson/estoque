"use client";

import { useTransition } from "react";

export default function ExportButton({ action }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const url = await action(); // chama a server action
      const link = document.createElement("a");
      link.href = url;
      link.download = "produtos.csv";
      link.click();
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm transition-all"
    >
      {isPending ? "Gerando..." : "Exportar"}
    </button>
  );
}