// API JS PARA FRONTEND DE LOS MODELOS.

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el contenedor para los resultados
    const form = document.getElementById("prediction-form");
    const resultsContainer = document.querySelector(".results");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Obtener los valores ingresados por el usuario
        const edad = document.getElementById("edad").value;
        const genero = document.getElementById("genero").value;
        const estadoCivil = document.getElementById("estado_civil").value;
        const numHijos = document.getElementById("num_hijos").value;
        const tipoVivienda = document.getElementById("tipo_vivienda").value;
        const nivelEstudios = document.getElementById("nivel_estudios").value;
        const profesion = document.getElementById("profesion").value;

        // Crear el objeto con los valores de entrada
        const input_data = {
            edad: parseInt(edad),
            genero: parseInt(genero),
            estado_civil: parseInt(estadoCivil),
            num_hijos: parseInt(numHijos),
            tipo_vivienda: parseInt(tipoVivienda),
            nivel_estudios: parseInt(nivelEstudios),
            profesion: parseInt(profesion)
        };

        // Enviar los datos al servidor Flask usando Fetch API con el verbo POST
        fetch("http://localhost:5000/", {
            method: "POST",
            body: JSON.stringify(input_data), // Convertir los datos a formato JSON
            headers: {
                "Content-Type": "application/json" // Especificar el tipo de contenido como JSON
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al procesar la predicción');
            }
            return response.json();
        })
        .then(data => {
            // Actualizar los resultados en el HTML
            resultsContainer.innerHTML = `
                <p>Cantidad de aluminio: <span>${data.cant_aluminio}</span> unidades</p>
                <p>Cantidad de plástico: <span>${data.cant_plastico}</span> unidades</p>
                <p>Cantidad de cristal: <span>${data.cant_cristal}</span> unidades</p>
                <p>Peso de papel: <span>${data.kg_papel}</span> kg</p>
                <p>Peso de orgánico: <span>${data.kg_organico}</span> kg</p>
                Recuerda
            `;
        })
        .catch(error => console.error("Error al procesar la predicción:", error));
    });
});
