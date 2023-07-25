import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const Grafica_Mensual = () => {
    const chartRef = useRef();

    useEffect(() => {
        const data = {
            labels: ['Dato 1', 'Dato 2', 'Dato 3', 'Dato 4', 'Dato 5'],
            datasets: [
                {
                    data: [30, 25, 15, 20, 10],
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

    return( 
        
        <div className='col-span-1'><canvas className='w-1/2 ' ref={chartRef} /></div>)
   
      
 
};


export default Grafica_Mensual;
