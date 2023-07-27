import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from '../../charts/DoughnutChart';

const RecyclingChart = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedGender, setSelectedGender] = useState('all');

  useEffect(() => {
    fetchData(selectedGender);
  }, [selectedGender]);

  const fetchData = async (gender) => {
    try {
      let url = 'http://127.0.0.1:5000/api/v1/usuarios/recycling';

      // Crear un array para almacenar los filtros
      const filters = [];

      if (gender !== 'all') {
        filters.push(`genero=${gender}`);
      }

      // Concatenar los filtros en la URL
      if (filters.length > 0) {
        url += `?${filters.join('&')}`;
      }

      const response = await axios.get(url);
      const responseData = response.data; // No inicialices data con un array vacío

      // Asegurarse de que responseData contenga la propiedad "users" con los datos de los usuarios
      const data = responseData.users || [];

      const types = ['basura_papel', 'basura_plastico', 'basura_resto', 'basura_organico', 'basura_cristal'];

      // Obtener la cantidad de personas que disponen de cada tipo de reciclaje y no reciclan
      const counts = types.map((type) => data.filter((user) => user[type] === 1).length);

      // Obtener la cantidad de personas que no reciclan
      const noReciclaCount = data.filter((user) => user['no_recicla'] === 1).length;

      setChartData({
        labels: [...types.map((type) => type.replace('basura_', '').charAt(0).toUpperCase() + type.slice(8)), 'No recicla'],
        datasets: [
          {
            data: [...counts, noReciclaCount],
            backgroundColor: ['#3B82F6', '#F87171', '#10B981', '#FBBF24', '#7C3AED', '#F97316'], // Color para "No recicla"
            hoverBackgroundColor: ['#2563EB', '#F26262', '#059669', '#D97706', '#6D28D9', '#EA580C'], // Color para "No recicla"
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
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Reciclaje en Casa</h2>
      </header>
      <div className="flex justify-center p-4">
        <select
          className="border rounded-md px-3 py-1 ml-4"
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

export default RecyclingChart;
