'use client';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardCharts() {
  const lineData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Quant. Atual de Estoque',
        data: [25, 30, 35, 40, 45, 50, 52, 38, 30, 50, 32, 32],
        borderColor: '#2563EB',
        backgroundColor: '#2563EB20',
        borderWidth: 2,
        tension: 0.4,
        pointBorderColor: '#2563EB',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        fill: false,
      },
      {
        label: 'Estoque Ideal',
        data: [15, 18, 20, 23, 25, 28, 30, 48, 26, 40, 26, 20],
        borderColor: '#10B981',
        backgroundColor: '#10B98120',
        borderWidth: 2,
        tension: 0.4,
        pointBorderColor: '#10B981',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 12 },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: '#E5E7EB' },
        beginAtZero: true,
      },
    },
  };

  const donutData = {
    labels: ['Eletrônicos', 'Orgânico', 'Periféricos', 'Social'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#8B5CF6', '#10B981', '#F59E0B', '#3B82F6'],
        borderWidth: 2,
      },
    ],
  };

  const donutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true, boxWidth: 8, font: { size: 12 } },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 p-4  items-center justify-between">

      <div className="flex flex-col justify-center bg-white rounded-2xl shadow p-4 shadow-lg border-x border-gray-200 rounded-lg px-8 py-4 w-[570px]  h-[356px]">
        <h2 className="text-gray-800 font-semibold mb-2">Controle de Estoque</h2>
       <div className=''> <Line data={lineData} options={lineOptions} /></div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center shadow-lg border-x border-gray-200 rounded-lg px-8 py-4  h-[356px] overflow-hidden">
        <h2 className="text-gray-800 font-semibold mb-2">Categorias</h2>
        <div className=''><Doughnut data={donutData} options={donutOptions} /></div>
      </div>
    </div>
  );
}