import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const phrases = [
  "Reciclar es la oportunidad de transformar el pasado en un futuro sostenible.",
  "El reciclaje es un pequeño gesto que deja una gran huella en el planeta.",
  "Cuida la Tierra, es el único hogar que tenemos.",
  "El medio ambiente no es una herencia de nuestros padres, sino un préstamo de nuestros hijos.",
  "Piensa globalmente, recicla localmente.",
  "Reciclar es como darle un abrazo al planeta.",
  "La naturaleza no necesita que la rescatemos, necesita que dejemos de dañarla.",
  "El reciclaje es una invitación a ser parte del cambio que queremos ver en el mundo.",
  "El futuro sostenible está en nuestras manos y en nuestras acciones de reciclaje.",
  "Reduce, reutiliza, recicla: las tres claves para proteger nuestro entorno.",
  "El reciclaje es una actitud que se contagia y multiplica cuando todos participamos.",
  "El respeto por la naturaleza comienza con pequeños gestos de reciclaje.",
  "No hay un planeta B, cuidemos el planeta que tenemos.",
  "La basura de hoy es el problema de mañana, reciclar es prevenir.",
  "Cada envase que reciclas es una oportunidad para marcar la diferencia.",
  "Cada kilogramo de papel reciclado evita la tala de aproximadamente 17 árboles.",
  "Reciclar una tonelada de plástico puede ahorrar hasta 5,774 litros de petróleo.",
  "Por cada tonelada de aluminio reciclado, se ahorra la energía equivalente a 20,000 litros de gasolina.",
  "El reciclaje de vidrio reduce las emisiones de dióxido de carbono en un 20% y ahorra suficiente energía para mantener un televisor encendido durante 3 horas.",
  "Cada botella de vidrio reciclada ahorra suficiente energía para encender una bombilla durante 4 horas.",
  "Reciclar una lata de aluminio ahorra suficiente energía para mantener un televisor funcionando durante 3 horas.",
  "El reciclaje de papel puede reducir las emisiones de gases de efecto invernadero en un 75%.",
  "El reciclaje de una tonelada de plástico evita la emisión de 2,5 toneladas de dióxido de carbono.",
  "El reciclaje de una botella de plástico ahorra suficiente energía para alimentar un ordenador durante 25 minutos.",
  "Cada kilogramo de acero reciclado ahorra 1,130 litros de agua y 1,400 kilogramos de mineral de hierro."
];

const App = () => {
  return (
    <div className="App">
      <Carousel showThumbs={false}>
        {phrases.map((phrase, index) => (
          <div key={index}>
            <p>{phrase}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
