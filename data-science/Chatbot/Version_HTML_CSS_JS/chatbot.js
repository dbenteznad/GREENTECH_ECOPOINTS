// API CHATBOT JS

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  var chatContainer = document.getElementById('chat-container');
  var chatbotIcon = document.getElementById('chatbot-icon');
  var chatMessages = document.getElementById('chat-messages');
  var userInput = document.getElementById('user-input');
  var sendButton = document.getElementById('send-button');
  
  var bot = new RiveScript();
  bot.loadFile('ejemplo.rive', function() {
    bot.sortReplies();
  });
  
  chatbotIcon.addEventListener('click', function() {
    chatContainer.classList.toggle('hidden');
  });
  
  async function sendMessage() {
    var message = userInput.value.trim();
    if (message !== '') {
      var userMessage = document.createElement('div');
      userMessage.className = 'user-message';
      userMessage.textContent = message;
      chatMessages.appendChild(userMessage);
  
      var botMessage = document.createElement('div');
      botMessage.className = 'bot-message';
      var reply = await bot.reply('local-user', message);
      botMessage.innerHTML = reply.replace(/\n/g, "<br>"); // Reemplazar "\n" con saltos de línea HTML "<br>"
      chatMessages.appendChild(botMessage);
  
      userInput.value = '';
      scrollToBottom();
  
      setTimeout(function() {
        userInput.scrollIntoView({ behavior: 'smooth', block: 'start' });
        userInput.focus();
      }, 100);
    }
  
  }
  
  sendButton.addEventListener('click', sendMessage);
  
  userInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });
  
  scrollToBottom();
  