import React, { useState, useEffect, useRef } from "react";

import '../styles/Prediccion.css';

const getEstadoCivil = (value) => {
  switch (value) {
    case 0:
      return 'Soltero/a';
    case 1:
      return 'Separado/a';
    case 2:
      return 'Casado/a';
    case 3:
      return 'Viudo/a';
    default:
      return '';
  }
};

const getTipoVivienda = (value) => {
  switch (value) {
    case 0:
      return 'Piso';
    case 1:
      return 'Apartamento';
    case 2:
      return 'Chalet';
    case 3:
      return 'Loft';
    default:
      return '';
  }
};

const getNivelEstudios = (value) => {
  switch (value) {
    case 0:
      return 'Sin estudios';
    case 1:
      return 'Educación primaria';
    case 2:
      return 'Educación secundaria';
    case 3:
      return 'Bachillerato';
    case 4:
      return 'Técnico o formación profesional';
    case 5:
      return 'Universidad (licenciatura/grado)';
    case 6:
      return 'Posgrado (maestría/máster)';
    case 7:
      return 'Doctorado';
    default:
      return '';
  }
};

const getProfesion = (value) => {
  switch (value) {
    case 0:
      return 'Administrativo/a';
    case 1:
      return 'Arquitecto/a';
    case 2:
      return 'Asistente administrativo/a';
    case 3:
      return 'Contador/a';
    case 4:
      return 'Diseñador/a';
    case 5:
      return 'Ingeniero/a';
    case 6:
      return 'Médico/a';
    case 7:
      return 'Profesor/a';
    case 8:
      return 'Programador/a';
    case 9:
      return 'Estudiante';
    case 10:
      return 'Trabajador/a social';
    case 11:
      return 'Empresario/a';
    case 12:
      return 'Abogado/a';
    case 13:
      return 'Comerciante';
    case 14:
      return 'Periodista';
    case 15:
      return 'Investigador/a';
    case 16:
      return 'Artista';
    case 17:
      return 'Obrero/a';
    case 18:
      return 'Agricultor/a';
    case 19:
      return 'Fontanero/a';
    case 20:
      return 'Jardinero/a';
    case 21:
      return 'Repartidor/a';
    case 22:
      return 'Electricista';
    case 23:
      return 'Otro';
    default:
      return '';
  }
};

function Prediccion() {
  const [userInputs, setUserInputs] = useState({});
  const [results, setResults] = useState({
    cant_aluminio: "",
    cant_plastico: "",
    cant_cristal: "",
    kg_papel: "",
    kg_organico: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input_data = {
      edad: parseInt(form.edad.value),
      genero: parseInt(form.genero.value),
      estado_civil: parseInt(form.estado_civil.value),
      num_hijos: parseInt(form.num_hijos.value),
      tipo_vivienda: parseInt(form.tipo_vivienda.value),
      nivel_estudios: parseInt(form.nivel_estudios.value),
      profesion: parseInt(form.profesion.value),
    };
    setUserInputs(input_data);

    fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(input_data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al procesar la predicción");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data);
        setResultsReady(true);
      })
      .catch((error) => console.error("Error al procesar la predicción:", error));
  };

  useEffect(() => {
    if (resultsReady && Object.keys(userInputs).length > 0) {
      setShowResults(true);
      setShowMessage(true);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  }, [resultsReady, userInputs, showResults]);

  return (
    <div className="bloque">
      <div className="titulo">
        <h1 ><span className="titulo_color">Predicción de Reciclaje Residuos</span> ♻️</h1>
      </div>
      <div className="explicacion">
        <p>La siguiente predicción muestra la cantidad de material reciclado y su peso estimado de manera ANUAL según el perfil de la persona. </p>
        <p className="pred" > Cómo funciona la predicción? </p>
        <p className="pred_2"> Debes poner el número correspondiente de la palabra, en las celdas blancas.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <table className="variable-table">
          <tbody>
            <tr className="valores">
              <th>Tipo Variable</th>
              <th colSpan="4">Caractéristicas de la variable</th>
              <th>Valor a predecir</th>
            </tr>
            <tr className="linia">
              <th>Edad:</th>
              <td colSpan="4">Entre 12 y 100</td>
              <td><input type="text" id="edad" pattern="[0-9]{2,3}" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Género:</th>
              <td colSpan="2">Masculino: 0</td>
              <td colSpan="2">Femenino: 1</td>
              <td><input type="text" id="genero" pattern="[0-1]" inputMode="numeric" required /></td>

            </tr>
            <tr className="linia">
              <th>Estado Civil:</th>
              <td>Soltero/a: 0</td>
              <td>Separado/a: 1</td>
              <td>Casado/a: 2</td>
              <td>Viudo/a: 3</td>
              <td><input type="text" id="estado_civil" pattern="[0-3]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Número de hijos:</th>
              <td colSpan="4">Entre 0 y 4</td>
              <td><input type="text" id="num_hijos" pattern="[0-4]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Tipo de vivienda:</th>
              <td>Piso: 0</td>
              <td>Apartamento: 1</td>
              <td>Chalet: 2</td>
              <td>Loft: 3</td>
              <td><input type="text" id="tipo_vivienda" pattern="[0-3]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th rowSpan="2">Nivel de estudios:</th>
              <td>Sin estudios: 0</td>
              <td>Educación primaria: 1</td>
              <td>Educación secundaria: 2</td>
              <td>Bachillerato: 3</td>
              <td rowSpan="2"><input type="text" id="nivel_estudios" pattern="[0-7]" inputMode="numeric" required /></td>
            </tr>
            <tr>
              <td>Técnico o formación profesional: 4</td>
              <td>Universidad (licenciatura/grado): 5</td>
              <td>Posgrado (maestría/máster): 6</td>
              <td>Doctorado: 7</td>
            </tr>
            <tr className="linia">
              <th rowSpan="7">Profesión:</th>
              <td>Administrativo/a: 0</td>
              <td>Arquitecto/a: 1</td>
              <td>Asistente administrativo/a: 2</td>
              <td>Contador/a: 3</td>
              <td rowSpan="7"><input type="text" id="profesion" pattern="[0-9]{1,2}|1[0-9]|2[0-3]" inputMode="numeric" required /></td>
            </tr>
            <tr>
              <td>Diseñador/a: 4</td>
              <td>Ingeniero/a: 5</td>
              <td>Médico/a: 6</td>
              <td>Profesor/a: 7</td>
            </tr>
            <tr>
              <td>Programador/a: 8</td>
              <td>Estudiante: 9</td>
              <td>Trabajador/a social: 10</td>
              <td>Empresario/a: 11</td>
            </tr>
            <tr>
              <td>Abogado/a: 12</td>
              <td>Comerciante: 13</td>
              <td>Periodista: 14</td>
              <td>Investigador/a: 15</td>
            </tr>
            <tr>
              <td>Artista: 16</td>
              <td>Obrero/a: 17</td>
              <td>Agricultor/a: 18</td>
              <td>Fontanero/a: 19</td>
            </tr>
            <tr>
              <td>Jardinero/a: 20</td>
              <td>Repartidor/a: 21</td>
              <td>Electricista: 22</td>
              <td>Otro: 23</td>
            </tr>
          </tbody>
        </table>
        <button className="button" type="submit">Obtener predicción</button>
      </form>
      <div className="contenedor-principal" >
        <div className="resultados-container">
          <div className="titulo_resultados"><h2>Resultados de la predicción:</h2></div>
          {showResults && (
            <div className="elecciones">
              <p>Para una persona de <span>{userInputs.edad}</span> años, de género <span>{userInputs.genero === 0 ? 'Masculino' : 'Femenino'}</span>, <span>{getEstadoCivil(userInputs.estado_civil)}</span>, que vive en un <span>{getTipoVivienda(userInputs.tipo_vivienda)}</span>, con <span>{userInputs.num_hijos}</span> hijo/a/s, con un nivel de estudios de <span>{getNivelEstudios(userInputs.nivel_estudios)}</span> y de profesión <span>{getProfesion(userInputs.profesion)}</span> <u><b>generará al año de media...</b></u>  </p>
            </div>
          )}

          <div className="resultados">
            <ul>
              <li><p>
                Cantidad de aluminio: <span className="color_resultados">{results.cant_aluminio} unidades.</span>
              </p></li>
              <li><p>
                Cantidad de plástico: <span className="color_resultados">{results.cant_plastico} unidades.</span>
              </p></li>
              <li><p>
                Cantidad de cristal: <span className="color_resultados">{results.cant_cristal} unidades.</span>
              </p></li>
              <li> <p>
                Kg de papel: <span className="color_resultados">{results.kg_papel} kg.</span>
              </p></li>
              <li><p>
                Kg de orgánico: <span className="color_resultados">{results.kg_organico} kg.</span>
              </p></li>
            </ul>
          </div>
        </div>
        {/* Mostrar mensaje adicional solo si es relevante y showMessage es true */}
        {showResults && showMessage && (
          <div className="mensaje-adicional">
            <p>
              ¡Ah, las predicciones, qué locura! Aquí va la información más jugosa
              del día: nuestras predicciones tienen una fiabilidad del 0,068%, sí,
              ni siquiera el 1% lo pillamos. Pero espera, ¡no te desesperes! Con
              toda la certeza del mundo, estas predicciones no van a pasar en el
              99,932% de los casos. ¡Casi nada, eh!
            </p>
            <p>Seamos sinceros, nuestro dataset es más falso que un billete de 3 dólares. ¡Todo inventado, nada real!</p>
            <p>¡Es como tener una moneda de dos caras en la mano! Por un lado, nuestras predicciones son más certeras que acertar a ciegas en una diana, pero por el otro, son más imprecisas que un reloj de arena sin arena. Un verdadero show de equilibrio.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prediccion;
