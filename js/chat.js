// chat.js
import { sendMessage, simulateBotResponse, sendFallbackMessage, scrollToBottom, handleLogout } from '../js/src/controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const logoutButton = document.getElementById('logout-btn');
    

    sendButton.addEventListener('click', () => {
        sendMessage(chatInput, chatWindow, scrollToBottom, simulateBotResponse);
    });

    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage(chatInput, chatWindow, scrollToBottom, simulateBotResponse);
        }
    });

    logoutButton.addEventListener('click', () => {
        handleLogout();
    });
});
