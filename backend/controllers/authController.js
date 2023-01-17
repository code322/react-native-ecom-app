const db = require('../config/db');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //check if the user exists
    const exists = await getUser(email);

    // if the users exists return an error
    if (exists) return res.status(400).json('Email is already registered');

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const sqlInsert = `INSERT INTO Users(name,email,password ) VALUES (?,?,? )`;
    const values = [name, email, hashedPassword];

    // save the user in the database
    await db.query(sqlInsert, values);

    //create jwt token
    let user = await getUser(email);
    const token_secret = process.env.TOKEN_SECRET;
    const token = jwt.sign({ id: user._id }, token_secret, {
      expiresIn: '30d',
    });
    if (!token)
      return res.status(400).json({ message: 'Token was not created' });
    user.password = undefined;

    console.log(user);
    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (email) => {
  try {
    const [results] = await db.query('SELECT * FROM Users WHERE email=?', [
      email,
    ]);

    return results[0];
  } catch (error) {
    return error;
  }
};

module.exports = { signUp };
