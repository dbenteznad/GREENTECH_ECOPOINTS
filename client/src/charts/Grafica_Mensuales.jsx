// GRÁFICA QUESITO DATOS MENSUALES

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const Grafica_Mensual = () => {
    const chartRef = useRef();

    useEffect(() => {
        const data = {
            labels: ['Plástico', 'Cristal', 'Aluminio', 'Papel', 'Orgánico'],
            datasets: [
                {
                    data: [35, 24, 18, 9, 12],
                    backgroundColor: ['#FF6384', '#33FF99', '#FFCE56', '#36A2EB', '#9966FF'],
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
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                    },
                },
                datalabels: {
                    color: 'white',
                    anchor: 'end',
                    align: 'end',
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

    return (
        <div className='col-span-1 mb-5 '>
            <canvas className=' hover:scale-105 w-1/2 sm:w-1/3' ref={chartRef} />
        </div>
    );
};

export default Grafica_Mensual;