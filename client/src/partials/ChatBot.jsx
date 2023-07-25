import React, { useState, useEffect, useRef } from "react";
import "../styles/Style_Chatbot.css";

function Chat() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatBodyRef = useRef(null);

// Mensaje por defecto al abrir el chat
  useEffect(() => {
    setMessages([
      {
        text: "Hola soy Quimi, tu asistente virtual. ¿En qué puedo ayudarte?",
        fromUser: false,
      },
    ]);
  }, []);

  //El chat baja de manera autómatica después de cada input. 
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // El chat inicialmente esta cerrado.
  const handleChatbotIconClick = () => {
    setChatOpen(!isChatOpen);
  };

  // Funcionamiento inputs-outputs chat con el bot.
  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      const botResponse = getBotResponse(userInput);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, fromUser: true },
        { text: botResponse, fromUser: false },
      ]);

      setUserInput("");
    }
  };

  const handleUserInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSendMessage();
    }
  };

  // Texto del bot
  const getBotResponse = (userInput) => {
    const patternsAndResponses = [
      {
        pattern: /(hola|buenas|hol|holi)/i,
        response:
          "Hola, soy Quimi tu asistente virtual, esta es la información que te puedo ofrecer:\n" +
          "- GreenTech\n" +
          "- Contenedor inteligente | ¿Cómo funciona?\n" +
          "- EcoPoints | Registrarse\n" +
          "- Reciclaje | Gráficas\n" +
          "- Privacidad | Contacto\n",
      },
      {
        pattern: /(que tal|como estas|como te encuentras)/i,
        response:
          "Muy bien!! Muchas gracias por preguntar! Espero que estés genial también! Esta es la información que te puedo ofrecer:\n" +
          "- GreenTech\n" +
          "- Contenedor inteligente | ¿Cómo funciona?\n" +
          "- EcoPoints | Registrarse\n" +
          "- Reciclaje | Gráficas\n" +
          "- Privacidad | Contacto\n",
      },
      {
        pattern: /(empresa|greentech)/i,
        response:
          "GreenTech es una empresa comprometida con la protección del medio ambiente en el sector de las IT que fomenta el reciclaje, concienciando y incentivando a través de datos reales y soluciones como contenedores inteligentes.\n",
      },
      {
        pattern: /(contenedor inteligente|contenedor|producto|venta)/i,
        response:
          "Desde GreenTech ofrecemos una solución para mejorar e incentivar el reciclaje a la sociedad con los 'Contenedor Inteligente', el cual nos premiará con EcoPoints por nuestro compromiso con el medio ambiente.\n",
      },
      {
        pattern: /(como funcionan|funcionan)/i,
        response:
          "Una vez te hayas registrado obtendrás una tarjeta personal con un código QR que escanearás en nuestros contenedores inteligentes y detectará los elementos que recicles.",
      },
      {
        pattern: /(ecopoints|eco|points)/i,
        response:
          "A través de nuestra aplicación 'EcoPoints', fomentamos el reciclaje y recompensamos a los usuarios por depositar residuos en nuestros contenedores con puntos canjeables por descuentos, productos y más...",
      },
      {
        pattern: /(registrarse|registro|inicio|iniciar|formulario)/i,
        response:
          "A continuación te dejo el link: http://localhost:5173/Registro \n" +
          "El formulario consta de dos partes: una obligatoria para crear el usuario y otra para saber si reciclas, la cual premiamos con EcoPoints al rellenarla al completo.",
      },
      {
        pattern: /(reciclaje|residuos)/i,
        response:
          "El reciclaje es un proceso en el que se transforman residuos usados o desechados en nuevas materias primas listas para volver a ser usadas.",
      },
      {
        pattern: /(graficas|estadistica|datos)/i,
        response:
          "Las gráficas nos ayudan en la visualización de los datos para ayudar a detectar patrones, tendencias, relaciones... PERO!! lo más IMPORTANTE es hacer llegar los datos a todos los usuarios para que entiendan y sean conscientes de los datos estudiados.",
      },
      {
        pattern: /(privacidad|regulaciones|ley)/i,
        response:
          "Los datos proporcionados con consentimiento del usuario siguen la legislación de la ley LOPD. Se mantendrá en todo momento el anonimato del usuario y los datos no serán usados para fines lucrativos, sino para estudios públicos para analizar la evolución del reciclaje.",
      },
      {
        pattern: /(contacto)/i,
        response: "Nuestro correo es: greentech@gmail.com",
      },
      {
        pattern: /(oscar)/i,
        response: "¿Qué Óscar?",
      },
      {
        pattern: /.*/i,
        response:
          "Lo siento pero no tengo información sobre el tema descrito. \n" +
          "- GreenTech\n" +
          "- Contenedor inteligente | ¿Cómo funciona?\n" +
          "- EcoPoints | Registrarse\n" +
          "- Reciclaje | Gráficas\n" +
          "- Privacidad | Contacto\n",
      },
    ];

    // Lógica interna para buscar en el texto la respuesta en función del input del usuario.
    for (const { pattern, response } of patternsAndResponses) {
      if (userInput.match(pattern)) {
        return response;
      }
    }
  };


  // Contenedor del chat con estilos css.
  return (
    <div>
      <img
        id="chatbot-icon"
        src="../../public/icon.png"
        alt="Chatbot Icon"
        onClick={handleChatbotIconClick}
      />
      {isChatOpen && (
        <div id="chat-container">
          <div id="chat-header">
            <div id="chat-toggle-header">
              <span id="chat-toggle-icon">&#x1F4AC;</span>
            </div>
            <div id="chat-title">Asistente Virtual Quimi</div>
          </div>
          <div id="chat-body" ref={chatBodyRef}>
            <div id="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.fromUser ? "user-message" : "bot-message"}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div id="chat-input">
              <input
                type="text"
                id="user-input"
                placeholder="Escribe un mensaje..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleUserInputKeyDown}
              />
              <button id="send-button" onClick={handleSendMessage}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
