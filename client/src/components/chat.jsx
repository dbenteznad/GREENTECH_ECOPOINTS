// import React, { useState } from 'react';
// import '../styles/Style_Chatbot.css';
// import 

// function Chatbot() {
//   const [isChatOpen, setChatOpen] = useState(false);
//   const [userInput, setUserInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleChatbotIconClick = () => {
//     setChatOpen(!isChatOpen);
//   };

//   const handleSendMessage = () => {
//     if (userInput.trim() !== '') {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: userInput, fromUser: true },
//       ]);
//       setUserInput('');
//     }
//   };

//   const handleUserInputKeyDown = (event) => {
//     if (event.keyCode === 13) {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div>
//       <img
//         id="chatbot-icon"
//         src="icon.png"
//         alt="Chatbot Icon"
//         onClick={handleChatbotIconClick}
//       />
//       {isChatOpen && (
//         <div id="chat-container">
//           <div id="chat-header">
//             <div id="chat-toggle-header">
//               <span id="chat-toggle-icon">&#x1F4AC;</span>
//             </div>
//             <div id="chat-title">Asistente Virtual Quimi</div>
//           </div>
//           <div id="chat-body">
//             <div id="chat-messages">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={message.fromUser ? 'user-message' : 'bot-message'}
//                 >
//                   {message.text}
//                 </div>
//               ))}
//             </div>
//             <div id="chat-input">
//               <input
//                 type="text"
//                 id="user-input"
//                 placeholder="Escribe un mensaje..."
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyDown={handleUserInputKeyDown}
//               />
//               <button id="send-button" onClick={handleSendMessage}>
//                 Enviar
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chatbot;
