import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from '../../charts/BarChart01';

const AgeDistributionChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/usuarios');
      const data = response.data;

      // Obtener las edades únicas y la cantidad de usuarios en cada grupo de edad
      const ageCounts = data.reduce((acc, user) => {
        const age = user.edad;
        acc[age] = (acc[age] || 0) + 1;
        return acc;
      }, {});

      // Convertir los datos en un formato adecuado para el gráfico
      const labels = Object.keys(ageCounts);
      const counts = Object.values(ageCounts);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Cantidad de Usuarios',
            data: counts,
            backgroundColor: ['#3B82F6', '#F87171', '#10B981', '#FBBF24', '#7C3AED'], // Puedes ajustar los colores según tus preferencias
            hoverBackgroundColor: ['#2563EB', '#F26262', '#059669', '#D97706', '#6D28D9'],
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Distribución de Edades</h2>
      </header>
      {chartData ? (
        <BarChart data={chartData} formatValue={(value) => value.toString()} />
      ) : (
        <p className="text-center p-4 text-slate-800 dark:text-slate-100">Cargando datos...</p>
      )}
    </div>
  );
};

export default AgeDistributionChart;
