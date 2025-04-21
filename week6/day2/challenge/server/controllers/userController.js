const bcrypt = require('bcryptjs');
const userModel = require('../models/user');

const registerUser = async (req, res) => {
  const { username, email, first_name, last_name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = await userModel.createUser({
      username,
      email,
      first_name,
      last_name,
      password: hashedPassword
    });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(400).json({ error: 'Error logging in' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching users' });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching user' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, first_name, last_name } = req.body;
  try {
    const updatedUser = await userModel.updateUser(id, {
      email,
      first_name,
      last_name
    });
    res.status(200).json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: 'Error updating user' });
  }
};

module.exports = { registerUser, loginUser, getUsers, getUser, updateUser };
