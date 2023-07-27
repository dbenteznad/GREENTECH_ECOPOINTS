import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from '../../charts/DoughnutChart';

const GenderDistributionChart = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    fetchData(selectedGender);
  }, [selectedGender]);

  const fetchData = async (gender) => {
    try {
      let url = `http://127.0.0.1:5000/api/v1/usuarios/gender`;
      if (gender !== 'all') {
        url += `?genero=${gender}`; // Cambia "gender" por "genero" para que coincida con el nombre del campo en la tabla
      }
      const response = await axios.get(url);
      const data = response.data;

      // Contar la cantidad de usuarios masculinos y femeninos
      const maleCount = data.maleCount;
      const femaleCount = data.femaleCount;

      setChartData({
        labels: ['Masculino', 'Femenino'],
        datasets: [
          {
            data: [maleCount, femaleCount],
            backgroundColor: ['#3B82F6', '#F87171'],
            hoverBackgroundColor: ['#2563EB', '#F26262'],
          },
        ],
      });
      console.log(chartData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Distribución de Género</h2>
      </header>
      <div className="flex justify-center p-4">
        <select
          className="border rounded-md px-3 py-1"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      {chartData ? (
        <DoughnutChart data={chartData} width={389} height={260} />
      ) : (
        <p className="text-center p-4 text-slate-800 dark:text-slate-100">Cargando datos...</p>
      )}
    </div>
  );
};

export default GenderDistributionChart;
