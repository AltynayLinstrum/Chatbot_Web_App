// function getBotResponse() {
//     var rawText = $("#textInput").val();
//     var userHtml = '<p class="userText"><span>' + rawText + "</span></p>";
//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document
//         .getElementById("userInput")
//         .scrollIntoView({ block: "start", behavior: "smooth" });
//     $.get("/get", { msg: rawText }).done(function (data) {
//         var botHtml = '<p class="botText"><span>'+ data + "</span></p>";
//         $("#chatbox").append(botHtml);
//         document
//             .getElementById("userInput")
//             .scrollIntoView({ block: "start", behavior: "smooth" });
//     });
// }
// $("#textInput").keypress(function (e) {
//     if (e.which == 13) {
//         getBotResponse();
//     }
// })

const chatbot = document.getElementById("chatbot");
const userInput = document.getElementById("userInput");
let userText;
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendUserMessage);
userInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendButton.click();
  }
});

function sendUserMessage() {
  const message = userInput.value;

  if (!message) {
    return;
  }

  const messageBubble = createMessageBubble(message, true);
  chatbot.appendChild(messageBubble);

  userInput.value = "";
  scrollToBottom();
  getChatbotResponse(message);
}

function getChatbotResponse(userMessage) {
  const msgDiv = createMessageBubble("...", false);
  chatbot.appendChild(msgDiv);
  scrollToBottom();

  $.get("/get", { msg: userMessage }).done(function (data) {
    msgDiv.firstChild.textContent = data;
    scrollToBottom();
  });
    
}

function createMessageBubble(message, isUserMessage) {
  const messageBubble = document.createElement("div");
  messageBubble.classList.add(isUserMessage ? "user-message" : "chatbot-message");
  const messageText = document.createElement("div");
  messageText.classList.add("message-bubble");
  messageText.textContent = message;
  messageBubble.appendChild(messageText);

  return messageBubble;
}

function scrollToBottom() {
  chatbot.scrollTop = chatbot.scrollHeight;
}
