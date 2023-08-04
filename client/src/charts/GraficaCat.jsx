// GRÁFICA CATALUÑA CON REACT

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const GraficaCat = () => {
  const [showDataLabels, setShowDataLabels] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: [
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
      ],
      datasets: [
        {
          label: "Total Selectivo",
          backgroundColor: "rgba(144, 238, 144, 0.2)",
          borderColor: "rgba(60, 179, 113, 1)",
          borderWidth: 1,
          type: "bar",
          data: [
            485070,
            603675,
            736790,
            892539,
            1050091,
            1222170,
            1364140,
            1444920,
            1471136,
            1575716,
            1698666,
            1642049,
            1460689,
            1361815,
            1390459,
            1444591,
            1440791,
            1532952,
            1661539,
            1816922,
            1824098,
            1877615,
          ],
          yAxisID: "bar-y-axis",
          stack: "Stack 2",
          hoverBackgroundColor: "rgba(144, 238, 144, 0.4)",
          hoverBorderColor: "rgba(60, 179, 113, 2)",
          datalabels: {
            align: "center",
            anchor: "center",
            weight: 16,
            formatter: function (value, context) {
              return (value / 1000000).toFixed(1) + "t";
            },
          },
        },
        {
          label: "% Selectivo",
          backgroundColor: "rgba(144, 238, 144, 0.2)",
          borderColor: "rgba(60, 179, 113, 1)",
          data: [
            13.96,
            16.85,
            19.8,
            22.64,
            25.42,
            29.11,
            31.95,
            33.6,
            34.41,
            37.53,
            40.54,
            40.6,
            39.1,
            37.95,
            38.19,
            38.98,
            38.61,
            39.88,
            41.77,
            44.9,
            45.91,
            46.63,
          ],
          yAxisID: "line-y-axis",
          type: "line",
          hoverBorderColor: "rgba(144, 238, 144, 2)",
          hoverBackgroundColor: "rgba(60, 179, 113, 0.4)",
          datalabels: {
            align: "bottom",
            anchor: "end",
            Size: "20px",
            formatter: function (value, context) {
              if (context.dataIndex % 3 === 0) {
                return value.toFixed(0) + "%";
              }
              return "";
            },
          },
        },
        {
          label: "Total Resto",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          type: "bar",
          data: [
            2990154,
            2979879,
            2985052,
            3050499,
            3080497,
            2975745,
            2905295,
            2855589,
            2804035,
            2622877,
            2491289,
            2402062,
            2275260,
            2226821,
            2250904,
            2261652,
            2291341,
            2311344,
            2316494,
            2229690,
            2149095,
            2149412,
          ],
          yAxisID: "bar-y-axis",
          stack: "Stack 2",
          hoverBackgroundColor: "rgba(255, 159, 64, 0.4)",
          hoverBorderColor: "rgba(255, 159, 64, 2)",
          datalabels: {
            align: "center",
            anchor: "center",
            formatter: function (value, context) {
              return (value / 1000000).toFixed(1) + "t";
            },
          },
        },
        {
          label: "% Resto",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          data: [
            86.04,
            83.15,
            80.2,
            77.36,
            74.58,
            70.89,
            68.05,
            66.4,
            65.59,
            62.47,
            59.46,
            59.4,
            60.9,
            62.05,
            61.81,
            61.02,
            61.39,
            60.12,
            58.23,
            55.1,
            54.09,
            53.37,
          ],
          yAxisID: "line-y-axis",
          type: "line",
          hoverBorderColor: "rgba(255, 159, 64, 2)",
          hoverBackgroundColor: "rgba(255, 159, 64, 0.4)",
          datalabels: {
            align: "center",
            anchor: "end",
            formatter: function (value, context) {
              if (context.dataIndex % 3 === 0) {
                return value.toFixed(0) + "%";
              }
              return "";
            },
          },
        },
        {
          label: "Suma Total ",
          type: "bar",
          data: [
            3.475225,
            3.583554,
            3.721843,
            3.943039,
            4.130589,
            4.197916,
            4.269435,
            4.300509,
            4.275171,
            4.198594,
            4.189955,
            4.044112,
            3.735949,
            3.588637,
            3.641364,
            3.706243,
            3.732133,
            3.844296,
            3.978033,
            4.046613,
            3.973194,
            4.027027,
          ],
          yAxisID: "bar-y-axis",
          stack: "Stack 2",
          datalabels: {
            align: "top",
            anchor: "center",
            formatter: function (value, context) {
              return value.toFixed(1) + "t";
            },
          },
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
          },
          legend: {
            position: "bottom",
            align: "center",
          },
          datalabels: {
            display: function (context) {
              return (
                showDataLabels &&
                (context.dataset.type === "line" ||
                  context.dataset.type === "bar")
              );
            },
            clamp: true,
          },
        },
        scales: {
          "bar-y-axis": {
            type: "linear",
            display: true,
            position: "left",
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
              precision: 0,
              callback: function (value) {
                return value / 1000000 + "t";
              },
            },
          },
          "line-y-axis": {
            type: "linear",
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              beginAtZero: true,
              min: 100,
              fontSize: 40,

              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
        hover: {
          mode: "index",
          intersect: true,
        },
      },
      plugins: [ChartDataLabels],
    };

    const chartInstance = new Chart(chartRef.current, config);

    return () => {
      chartInstance.destroy();
    };
  }, [showDataLabels]);
  const handleToggleDataLabels = () => {
    setShowDataLabels((prevShowDataLabels) => !prevShowDataLabels);
  };

  return (
    <div className="grid md:grid-cols-2">
      <h1 className="span-col-1 items-center text-left mr-4 mt-10 text-xl ml-16  mx-auto tracking-wide">
        En <b>Cataluña</b> los datos oficiales datan del año 2000 al 2021. Se puede observar una mejor historia de la progresión, del 14% al 47%, en 21 años del material que si se ha reciclado. Es decir, en 2012 <b>Catalunya</b> estaba
        reciclando el 39% y <b>España</b>  el 30%. <br /> <br /> Si comparamos con los últimos datos
        seria respectivamente un 46% en Cataluña frente a un 41% en España. ¿Y la <b> UE</b>? ¿Qué datos registra que deberían tener los países miembros en futuros años?
      </h1>
      <div className="span-col-1 ">
        <canvas className="w-1/2 " ref={chartRef} />
        <div className="text-center mt-0">
        <button
            className="bg-green-300 hover:bg-green-400 text-sm text-black border-green-500 border border-solid border-2"
            onClick={handleToggleDataLabels}
          >
            {showDataLabels ? "Datos NO visibles" : "Datos visibles"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraficaCat;