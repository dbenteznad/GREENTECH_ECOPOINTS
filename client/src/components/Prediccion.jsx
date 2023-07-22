import React, { useState } from "react";
import '../styles/Prediccion.css';


function Prediccion() {


  const [results, setResults] = useState({
    cant_aluminio: "",
    cant_plastico: "",
    cant_cristal: "",
    kg_papel: "",
    kg_organico: "",
  });

  const [showMessage, setShowMessage] = useState(false); // Nuevo estado para controlar la visibilidad del mensaje adicional


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
        setShowMessage(true);
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 100);

      })
      .catch((error) => console.error("Error al procesar la predicción:", error));



  };

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
              <td colSpan="4">entre 12 y 100</td>
              <td><input type="text" id="edad" pattern="[0-9]{2,3}" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Género:</th>
              <td colSpan="2">masculino: 0</td>
              <td colSpan="2">Femenino: 1</td>
              <td><input type="text" id="genero" pattern="[0-1]" inputMode="numeric" required /></td>

            </tr>
            <tr className="linia">
              <th>Estado Civil:</th>
              <td>soltero/soltera: 0</td>
              <td>separado/separada: 1</td>
              <td>casado/casada: 2</td>
              <td>viudo/viuda: 3</td>
              <td><input type="text" id="estado_civil" pattern="[0-3]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Número de hijos:</th>
              <td colSpan="4">entre 0 y 4</td>
              <td><input type="text" id="num_hijos" pattern="[0-4]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th>Tipo de vivienda:</th>
              <td>piso: 0</td>
              <td>apartamento: 1</td>
              <td>chalet: 2</td>
              <td>loft: 3</td>
              <td><input type="text" id="tipo_vivienda" pattern="[0-3]" inputMode="numeric" required /></td>
            </tr>
            <tr className="linia">
              <th rowSpan="2">Nivel de estudios:</th>
              <td>sin estudios: 0</td>
              <td>educación primaria: 1</td>
              <td>educación secundaria: 2</td>
              <td>bachillerato: 3</td>
              <td rowSpan="2"><input type="text" id="nivel_estudios" pattern="[0-7]" inputMode="numeric" required /></td>
            </tr>
            <tr>
              <td>técnico o formación profesional: 4</td>
              <td>universidad (licenciatura/grado): 5</td>
              <td>posgrado (maestría/máster): 6</td>
              <td>doctorado: 7</td>
            </tr>
            <tr className="linia">
              <th rowSpan="7">Profesión:</th>
              <td>administrativo/a: 0</td>
              <td>arquitecto/a: 1</td>
              <td>asistente administrativo/a: 2</td>
              <td>contador/a: 3</td>
              <td rowSpan="7"><input type="text" id="profesion" pattern="[0-23]" inputMode="numeric" required /></td>
            </tr>
            <tr>
              <td>diseñador/a: 4</td>
              <td>ingeniero/a: 5</td>
              <td>médico/a: 6</td>
              <td>profesor/a: 7</td>
            </tr>
            <tr>
              <td>programador/a: 8</td>
              <td>estudiante: 9</td>
              <td>trabajador/a social: 10</td>
              <td>empresario/a: 11</td>
            </tr>
            <tr>
              <td>abogado/a: 12</td>
              <td>comerciante: 13</td>
              <td>periodista: 14</td>
              <td>investigador/a: 15</td>
            </tr>
            <tr>
              <td>artista: 16</td>
              <td>obrero/a: 17</td>
              <td>agricultor/a: 18</td>
              <td>fontanero/a: 19</td>
            </tr>
            <tr>
              <td>jardinero/a: 20</td>
              <td>repartidor/a: 21</td>
              <td>electricista: 22</td>
              <td>otro: 23</td>
            </tr>
          </tbody>
        </table>
        <button className="button" type="submit">Obtener predicción</button>
      </form>
      <div className="contenedor-principal" >
        <div className="resultados-container">
          <div className="titulo_resultados"><h2>Resultados de la predicción:</h2></div>

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
        {showMessage && (
          <div className="mensaje-adicional">
            <p>
              ¡Ah, las predicciones, qué locura! Aquí va la información más jugosa
              del día: nuestras predicciones tienen una fiabilidad del 0,002%, sí,
              ni siquiera el 1% lo pillamos. Pero espera, ¡no te desesperes! Con
              toda la certeza del mundo, estas predicciones no van a pasar en el
              99,998% de los casos. ¡Casi nada, eh!
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