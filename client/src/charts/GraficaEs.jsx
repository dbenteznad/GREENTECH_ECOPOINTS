import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function GraficaEsp() {
    const data = {
        labels: ['2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
            {
                label: 'Total Selectivo',
                backgroundColor: 'rgba(144,238,144, 0.2)',
                borderColor: 'rgba(60,179,113, 1)',
                borderWidth: 1,
                type: 'bar',
                data: [6522002, 6419769, 6343909, 7294915, 7950973, 7797424, 8451121, 8919822],
                yAxisID: 'bar-y-axis',
                stack: 'Stack 2',
                hoverBackgroundColor: 'rgba(144,238,144, 0.4)',
                hoverBorderColor: 'rgba(60,179,113, 2)',
                datalabels: {
                    align: 'center',
                    anchor: 'center',
                    formatter: function (value, context) {
                        return (value / 1000000).toFixed(1) + 't';
                    },
                },
            },
            {
                label: '% Selectivo',
                backgroundColor: 'rgba(144,238,144, 0.2)',
                borderColor: 'rgba(60,179,113, 1)',
                data: [29.79, 30.81, 29.98, 33.86, 36.11, 35.02, 37.96, 40.56],
                yAxisID: 'line-y-axis',
                type: 'line',
                hoverBorderColor: 'rgba(144,238,144, 2)',
                hoverBackgroundColor: 'rgba(60,179,113, 0.4)',
                datalabels: {
                    align: 'bottom',
                    anchor: 'bottom',
                    formatter: function (value, context) {
                        return value.toFixed(0) + '%';
                    },
                },
            },
            {
                label: 'Total Resto',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                type: 'bar',
                data: [15374333, 14416639, 14813919, 14246925, 14066891, 14467399, 13810568, 13069494],
                yAxisID: 'bar-y-axis',
                stack: 'Stack 2',
                hoverBackgroundColor: 'rgba(255, 159, 64, 0.4)',
                hoverBorderColor: 'rgba(255, 159, 64, 2)',
                datalabels: {
                    align: 'center',
                    anchor: 'center',
                    formatter: function (value, context) {
                        return (value / 1000000).toFixed(1) + 't';
                    },
                },
            },
            {
                label: '% Resto',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                data: [70.21, 69.19, 70.02, 66.14, 63.89, 64.98, 62.04, 59.44],
                yAxisID: 'line-y-axis',
                type: 'line',
                hoverBorderColor: 'rgba(255, 159, 64, 2)',
                hoverBackgroundColor: 'rgba(255, 159, 64, 0.4)',
                datalabels: {
                    align: 'bottom',
                    anchor: 'bottom',
                    formatter: function (value, context) {
                        return value.toFixed(0) + '%';
                    },
                },
            },
            {
                label: 'Suma Total ',
                type: 'bar',
                data: [20.20, 20.84, 21.16, 21.54, 22.02, 22.26, 22.26, 21.99],
                yAxisID: 'bar-y-axis',
                stack: 'Stack 2',
                datalabels: {
                    align: 'top',
                    anchor: 'center',
                    formatter: function (value, context) {
                        return value.toFixed(1) + 't';
                    },
                },
            },
        ],
    };

    const config = {
        type: 'bar',
        data,
        options: {
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    position: 'bottom',
                    align: 'center',
                },
                datalabels: {
                    display: function (context) {
                        return context.dataset.type === 'line' || context.dataset.type === 'bar';
                    },
                },
            },
            scales: {
                'bar-y-axis': {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        precision: 0,
                        callback: function (value) {
                            return (value / 1000000) + 't';
                        },
                    },
                },
                'line-y-axis': {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 100,
                        fontSize: 40,
                        callback: function (value) {
                            return value + '%';
                        },
                    },
                },
            },
            hover: {
                mode: 'index',
                intersect: true,
            },
        },
        plugins: [ChartDataLabels],
    };

    useEffect(() => {
        const myChart = new Chart(document.getElementById('espana'), config);
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className='grid md:grid-cols-2'>


            <div className='span-col-1 '>  <canvas className='w-1/2 ' id="espana" width="400" height="200" ></canvas></div>
            <p className='span-col-1 mt-14 items-center text-center '>¿Sabías que en España los datos oficiales sobre el reciclaje
                datan solamente del año 2012 hasta el 2020? <br /> <br />
                En esos informes, hemos visto una progresión significativa en el reciclaje, pasando
                del 30% al 41% del material que efectivamente se ha reciclado respecto al total generado en España en tan solo 8 años. <br />
                ¡Un gran avance!
            </p>

        </div>
    );
}

export default GraficaEsp;


