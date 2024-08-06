const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const usermodel = require('../model/usermodel');

const app = express();
app.use(bodyParser.json());
require('../connection/connection');

router.post('/', async (req, res) => {
  try {
    const { username, password, role, email, phone } = req.body;
    if (!username || !password || !role || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

   
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);
    const newEmployee = new usermodel({
      username,
      password:hashedPassword,
      role,
      email,
      phone
    });
    console.log(newEmployee.password);
    await newEmployee.save();
    res.status(201).json(newEmployee); 
  } catch (err) {
    console.error('Error adding new employee:', err);
    res.status(500).json({ message: 'Error adding new employee', error: err.message });
  }
});

module.exports = router;
