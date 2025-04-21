const db = require('../config/knex');

const createUser = async (userData) => {
  const { username, email, first_name, last_name, password } = userData;

  const trx = await db.transaction(); // Start a transaction

  try {
    const user = await trx('users').insert({
      email,
      username,
      first_name,
      last_name
    }).returning('*');

    await trx('hashpwd').insert({
      username,
      password
    });

    await trx.commit(); // Commit the transaction
    return user[0]; // Return the created user
  } catch (error) {
    await trx.rollback(); // Rollback the transaction on error
    throw error;
  }
};

const getUserByUsername = async (username) => {
  const user = await db('users').where({ username }).first();
  return user;
};

const getUserById = async (id) => {
  const user = await db('users').where({ id }).first();
  return user;
};

const updateUser = async (id, userData) => {
  const { email, first_name, last_name } = userData;
  const updatedUser = await db('users')
    .where({ id })
    .update({ email, first_name, last_name })
    .returning('*');

  return updatedUser[0];
};

module.exports = { createUser, getUserByUsername, getUserById, updateUser };
