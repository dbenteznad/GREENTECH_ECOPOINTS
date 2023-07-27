# SCRIPT PARA UTILIZARLO LOS MODELOS DE MACHINE LEARNING. 
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Definir las variables X e Y
variables_x = ['edad', 'genero', 'estado_civil', 'num_hijos', 'tipo_vivienda', 'nivel_estudios', 'profesion']
variable_y_list = ['cant_aluminio', 'cant_plastico', 'cant_cristal', 'kg_papel', 'kg_organico']

# Cargar los modelos desde el disco
modelos = {variable_y: joblib.load(f'modelo_{variable_y}.joblib') for variable_y in variable_y_list}

@app.route('/', methods=['POST'])
def predict():
    try:
        # Obtener los valores enviados desde el front-end como un JSON
        input_data = request.get_json()

        # Verificar que se hayan enviado todas las variables requeridas
        if not all(var in input_data for var in variables_x):
            return jsonify({"error": "Faltan algunas variables requeridas en la solicitud."})

        # Convertir los valores a flotantes
        valores_usuario = [float(input_data[var]) for var in variables_x]

        # Crear un diccionario para almacenar los resultados de predicción
        resultados = {}

        # Hacer predicciones para todas las variables Y
        for variable_y in variable_y_list:
            # Cargar el modelo desde el disco (si ya está cargado, esto no debería ser un problema)
            modelo_cargado = modelos[variable_y]

            # Realizar la predicción para los valores ingresados por el usuario
            prediccion_usuario = modelo_cargado.predict([valores_usuario])[0]

            # Formatear la predicción según el tipo de variable Y
            if 'cant' in variable_y.lower():
                # Si la variable Y contiene "cant" (cantidad), convertir a número entero
                resultados[variable_y] = int(prediccion_usuario)
            else:
                # De lo contrario, redondear a dos decimales
                resultados[variable_y] = round(prediccion_usuario, 2)

        # Enviar los resultados como JSON
        return jsonify(resultados)
    except Exception as e:
        return jsonify({"error": "Error al procesar la predicción. Detalles del error: " + str(e)})

if __name__ == '__main__':
    app.run()
