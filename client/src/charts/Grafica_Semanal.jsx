import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const Grafica_Semanal = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      labels: [' Plástico', 'Papel', 'Aluminio', 'Cristal', 'Orgánico'],
      datasets: [
        {
          data: [40, 20, 25, 5, 5],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF99', '#9966FF'],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          align: 'center',
        },
        datalabels: {
          display: function (context) {
            const dataset = data.datasets[context.datasetIndex];
            return dataset.type === 'pie' || !dataset.hidden;
          },
        },
      },
    };

    const myPieChart = new Chart(chartRef.current, {
      type: 'pie',
      data: data,
      options: options,
    });

    return () => {
      myPieChart.destroy();
    };
  }, []);

  return (<div className='col-span-1 hover:scale-110 '><canvas className='w-1/2' ref={chartRef} /></div>)
};

export default Grafica_Semanal;