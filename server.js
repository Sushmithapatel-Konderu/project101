const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'blood_bank'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// API Routes

// Get all donors
app.get('/api/donors', (req, res) => {
  db.query('SELECT id, name, email, phone, blood_group, age, gender, address FROM donors WHERE is_active = TRUE', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Search donors
app.get('/api/donors/search', (req, res) => {
  const { q, blood_group } = req.query;
  let query = 'SELECT id, name, email, phone, blood_group, age, gender, address FROM donors WHERE is_active = TRUE';
  const params = [];
  
  if (q) {
    query += ' AND (name LIKE ? OR email LIKE ? OR phone LIKE ? OR address LIKE ?)';
    const searchTerm = `%${q}%`;
    params.push(searchTerm, searchTerm, searchTerm, searchTerm);
  }
  
  if (blood_group) {
    query += ' AND blood_group = ?';
    params.push(blood_group);
  }
  
  db.query(query, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

// Add new donor
app.post('/api/donors', async (req, res) => {
  const { name, email, phone, blood_group, age, gender, address, password } = req.body;
  
  // Validate required fields
  if (!name || !email || !phone || !blood_group || !age || !gender || !address || !password) {
    return res.status(400).json
  }});