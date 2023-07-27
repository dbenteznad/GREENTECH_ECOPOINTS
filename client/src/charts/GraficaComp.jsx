
import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";

function GraficaComp() {
  const colores = {
    España: { linea: "rgb(255, 181, 82)", texto: "rgb(255, 102, 0)" },
    Cataluña: { linea: "lightblue", texto: "darkblue" },
    UE: { linea: "lightgreen", texto: "green" },
  };

  const año_es_1 = [2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  const rs_rc_percent_es_1 = [
    29.79, 30.81, 29.98, 33.86, 36.11, 35.02, 37.96, 40.56,
  ];
  const año_es_2 = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035,
  ];
  const rs_rc_percent_es_2 = [
    40.56, 41.87, 43.17, 44.45, 45.72, 46.98, 48.23, 49.46, 50.69, 51.9, 53.1,
    54.28, 55.46, 56.63, 57.78,
  ];

  const año_cat_1 = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ];
  const rs_rc_percent_cat_1 = [
    13.96, 16.85, 19.8, 22.64, 25.42, 29.11, 31.95, 33.6, 34.41, 37.53, 40.54,
    40.6, 39.1, 37.95, 38.19, 38.98, 38.61, 39.88, 41.77, 44.9, 45.91, 46.63,
  ];
  const año_cat_2 = [
    2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
    2034, 2035,
  ];
  const rs_rc_percent_cat_2 = [
    49.43, 50.71, 51.99, 53.27, 54.55, 55.83, 57.11, 58.39, 59.67, 60.95, 62.22,
    63.5, 64.78, 66.05,
  ];

  const años_ue = [2020, 2025, 2030, 2035];
  const rs_rc_percent_ue = [50, 55, 60, 65];

  const traceEspaña1 = {
    x: año_es_1,
    y: rs_rc_percent_es_1,
    name: "España (2012-2020) ",
    mode: "lines+markers+text",
    line: { color: colores["España"]["linea"], width: 3 },
    marker: { symbol: "circle", size: 8, color: colores["España"]["linea"] },
    text: año_es_1.map((x, i) =>
      x === 2012 || x === 2020 ? `${rs_rc_percent_es_1[i]}%` : ""
    ),
    hovertemplate: "%{y:.2f}%",
    textfont: { color: colores["España"]["texto"], size: 14 },
    textposition: "bottom center",
    showlegend: true,
    legendgroup: "España (2012-2020)",
  };

  const traceEspaña2 = {
    x: año_es_2,
    y: rs_rc_percent_es_2,
    name: "Predicción España (2021-2035) ",
    mode: "lines+markers+text",
    line: { color: colores["España"]["linea"], width: 2, dash: "dot" },
    marker: {
      symbol: "circle",
      size: año_es_2.map((x) => (x % 5 === 0 ? 8 : 0)),
      color: colores["España"]["linea"],
    },
    text: año_es_2.map((x, i) =>
      x % 5 === 0 ? `${rs_rc_percent_es_2[i]}%` : ""
    ),
    hovertemplate: "%{y:.2f}%",
    textfont: { color: colores["España"]["texto"], size: 14 },
    textposition: "bottom center",
    showlegend: true,
    legendgroup: "Predicción España (2021-2035)",
  };

  const traceCataluña1 = {
    x: año_cat_1,
    y: rs_rc_percent_cat_1,
    name: "Cataluña (2000-2021) ",
    mode: "lines+markers+text",
    line: { color: colores["Cataluña"]["linea"], width: 3 },
    marker: { symbol: "circle", size: 8, color: colores["Cataluña"]["linea"] },
    text: año_cat_1.map((x, i) =>
      x === 2000 || x === 2020 ? `${rs_rc_percent_cat_1[i]}%` : ""
    ),
    hovertemplate: "%{y:.2f}%",
    textfont: { color: colores["Cataluña"]["texto"], size: 14 },
    textposition: "bottom center",
    showlegend: true,
    legendgroup: "Cataluña (2000-2021)",
  };

  const traceCataluña2 = {
    x: año_cat_2,
    y: rs_rc_percent_cat_2,
    name: "Predicción Cataluña (2022-2035) ",
    mode: "lines+markers+text",
    line: { color: colores["Cataluña"]["linea"], width: 2, dash: "dot" },
    marker: {
      symbol: "circle",
      size: año_cat_2.map((x) => (x % 5 === 0 ? 8 : 0)),
      color: colores["Cataluña"]["linea"],
    },
    text: año_cat_2.map((x, i) =>
      x % 5 === 0 ? `${rs_rc_percent_cat_2[i]}%` : ""
    ),
    hovertemplate: "%{y:.2f}%",
    textfont: { color: colores["Cataluña"]["texto"], size: 14 },
    textposition: "bottom center",
    offset: -20,
    showlegend: true,
    legendgroup: "Predicción Cataluña (2022-2035)",
  };

  const traceUE = {
    x: años_ue,
    y: rs_rc_percent_ue,
    name: "UE",
    mode: "lines+markers+text",
    text: años_ue.map((x, i) => (x % 5 === 0 ? `${rs_rc_percent_ue[i]}%` : "")),
    hovertemplate: "%{y:.2f}%",
    textposition: "top center",
    textfont: { color: colores["UE"]["texto"], size: 14 },
    line: { color: colores["UE"]["linea"], width: 3, dash: "dash" },
    showlegend: true,
    legendgroup: "UE",
  };

  // Definir el orden deseado de las trazas en la leyenda
  const order = [
    "España (2012-2020)",
    "Predicción España (2021-2035)",
    "ONU",
    "Cataluña (2000-2021)",
    "Predicción Cataluña (2022-2035)",
  ];

  // Reorganizar las trazas en el orden deseado
  const datacomp = [
    traceEspaña1,
    traceEspaña2,
    traceUE,
    traceCataluña1,
    traceCataluña2,
  ].sort((a, b) => {
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  const layout = {
    title_x: 0.5,
    title_y: 0.87,
    yaxis: { title: "% Reciclado", showgrid: false, title_font: { size: 14 } },
    showlegend: true,
    height: 500,
    width: "100%",
    legend: {
      orientation: "h",
      yanchor: "bottom",
      y: -0.25,
      xanchor: "center",
      x: 0.5,
      font: {
        family: "Arial",
        size: 12,
        color: "rgba(50, 50, 50, 0.8)",
      },
      itemsizing: "constant",
    },
    plot_bgcolor: "transparent",
  };

  const config2 = {
    displayModeBar: false,
    responsive: true,
  };

  useEffect(() => {
    const graphDiv = document.getElementById("comparativa");
    Plotly.newPlot(graphDiv, datacomp, layout, config2);
    return () => {
      Plotly.purge(graphDiv);
    };
  }, []);

  return (
    <div className="container grid md:grid-cols-2">
      <div className="span-col-1 relative z-0 mb-5 mr-5">
        <div className="w-full relative" id="comparativa"></div>
      </div>
      <div className="span-col-1 items-center text-center relative">
        <p className="mt-14 mr-4 items-center text-right text-xl">
          Pero, ¿qué nos depara el futuro? La <b>UE</b> ha establecido objetivos
          ambiciosos para el reciclaje, y es necesario que los países miembros
          los alcancen. Para el año 2020, se esperaba llegar al 50% del total
          selectivo, y lamentablemente no lo hemos cumplido. ¿Seremos capaces de
          alcanzar el 55% para el 2025, el 60% para el 2030 y finalmente el 65%
          para el 2035?
          <br />
          <br />
          Es ahí donde entra en juego <b>EcoPoints</b> . Hemos realizado predicciones
          con datos oficiales tanto de <b>España</b> como de <b>Cataluña</b> para estimar si
          alcanzaremos estos objetivos. Si seguimos la dinámica actual, <b>Cataluña</b>
          se quedaría un poco por debajo de los objetivos, alcanzando un
          admirable 66% para el 2035. En cambio, <b>España</b> se encontraría en un
          57%, por debajo del ambicioso 65% propuesto por la <b>UE</b>.
        </p>
      </div>
    </div>
  );
}

export default GraficaComp;