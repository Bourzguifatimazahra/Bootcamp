const socket = io();

// Récupérer les infos de l'URL
const { username, room } = Object.fromEntries(new URLSearchParams(window.location.search));

socket.emit('joinRoom', { username, room });

const chatBox = document.getElementById('chat-box');
const usersList = document.getElementById('users');

socket.on('message', message => {
  const div = document.createElement('div');
  div.innerText = `${message.user}: ${message.text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});

socket.on('roomUsers', users => {
  usersList.innerHTML = '';
  users.forEach(u => {
    const li = document.createElement('li');
    li.innerText = u.username;
    usersList.appendChild(li);
  });
});

document.getElementById('chat-form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('msg');
  socket.emit('chatMessage', msg.value);
  msg.value = '';
  msg.focus();
});
