const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const router = express.Router();

const filePath = './users.json';

// Initialiser le fichier users.json s'il n'existe pas
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]');
}

// Fonctions utilitaires
const readUsers = () => JSON.parse(fs.readFileSync(filePath));
const writeUsers = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// 🔐 Enregistrement
router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  const users = readUsers();

  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) return res.status(400).send('error1');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  try {
    writeUsers(users);
    res.send('register');
  } catch {
    res.status(500).send('Error writing to file');
  }
});

// 🔐 Connexion
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send('error2');

  const match = await bcrypt.compare(password, user.password);
  match ? res.send('login') : res.status(401).send('error2');
});

// 👤 Liste des utilisateurs (sans mot de passe)
router.get('/users', (req, res) => {
  try {
    const users = readUsers().map(({ password, ...u }) => u);
    res.json(users);
  } catch {
    res.status(500).send('Error reading file');
  }
});

// 🔍 Un utilisateur par ID
router.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).send('User not found');

  const { password, ...safeUser } = user;
  res.json(safeUser);
});

// ✏️ Mise à jour d'un utilisateur
router.put('/users/:id', async (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).send('User not found');

  const updatedUser = { ...users[index], ...req.body };

  if (req.body.password) {
    updatedUser.password = await bcrypt.hash(req.body.password, 10);
  }

  users[index] = updatedUser;

  try {
    writeUsers(users);
    res.send('User updated');
  } catch {
    res.status(500).send('Error writing to file');
  }
});

// 🗑️ Suppression d'un utilisateur
router.delete('/users/:id', (req, res) => {
  const users = readUsers();
  const newUsers = users.filter(u => u.id !== req.params.id);

  if (newUsers.length === users.length) return res.status(404).send('User not found');

  try {
    writeUsers(newUsers);
    res.send('User deleted');
  } catch {
    res.status(500).send('Error writing to file');
  }
});

module.exports = router;
