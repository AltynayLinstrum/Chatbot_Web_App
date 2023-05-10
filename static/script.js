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
const userInput = document.getElementById("user-input");
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
  const messageBubble = createMessageBubble("...", false);
  chatbot.appendChild(messageBubble);
  scrollToBottom();

  // Make a request to your chatbot's API here and replace the "..." message with the chatbot's response
  // In this example, we're just going to use a hardcoded response

  const chatbotResponse = "I'm sorry, I don't know how to respond to that.";

  setTimeout(function() {
    messageBubble.textContent = chatbotResponse;
    scrollToBottom();
  }, 1000);
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
