const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let users = {};

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    users[socket.id] = { username, room };

    socket.emit('message', { user: 'ChatBot', text: `Bienvenue ${username} !` });
    socket.broadcast.to(room).emit('message', { user: 'ChatBot', text: `${username} a rejoint le salon.` });

    updateUserList(room);
  });

  socket.on('chatMessage', msg => {
    const user = users[socket.id];
    if (user) {
      io.to(user.room).emit('message', { user: user.username, text: msg });
    }
  });

  socket.on('disconnect', () => {
    const user = users[socket.id];
    if (user) {
      io.to(user.room).emit('message', { user: 'ChatBot', text: `${user.username} a quitté le salon.` });
      delete users[socket.id];
      updateUserList(user.room);
    }
  });

  function updateUserList(room) {
    const roomUsers = Object.values(users).filter(u => u.room === room);
    io.to(room).emit('roomUsers', roomUsers);
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
