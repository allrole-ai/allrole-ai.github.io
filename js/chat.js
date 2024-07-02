
    document.getElementById('send').addEventListener('click', function() {
        var message = document.getElementById('message').value;
        var messages = document.querySelector('.messages');
        var newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        document.getElementById('message').value = '';
    });
