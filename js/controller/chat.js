document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function() {
      sendMessage();
    });
  
    chatInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
      }
    });
  
    function sendMessage() {
      const message = chatInput.value.trim();
      if (message === "") return;
  
      // Menampilkan pesan pengguna di chat box
      displayMessage("You", message);
  
      const requestBody = { query: message };
      console.log("Sending request:", requestBody);
  
      // Mengirim pesan ke API
      fetch("https://backend-production-9c11.up.railway.app/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.message || "HTTP error " + response.status); });
        }
        return response.json();
      })
      .then(data => {
        console.log("Response data:", data);
        // Menampilkan respons dari API di chat box
        displayMessage("Bot", data.answer);
      })
      .catch(error => {
        console.error("Error:", error.message || error);
        displayMessage("Bot", "Sorry, something went wrong. Please try again later.");
      });
  
      // Mengosongkan input setelah mengirim pesan
      chatInput.value = "";
    }
  
    function displayMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
  
      const senderElement = document.createElement("strong");
      senderElement.textContent = sender + ": ";
      messageElement.appendChild(senderElement);
  
      const textElement = document.createElement("span");
      textElement.textContent = message;
      messageElement.appendChild(textElement);
  
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke bagian bawah chat box
    }
  });
  