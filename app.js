const express = require('express');
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const app = express();

// Insecure middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Store API tokens in code (bad practice)
const API_TOKEN = "1234567890abcdefghijklmnopqrstuvwxyz";

// Insecure file operations
app.get('/download', (req, res) => {
  const file = req.query.file;
  // Path traversal vulnerability
  const filePath = path.join(__dirname, 'public', file);
  
  // Sending file without validation
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.send(data);
  });
});

// Command injection vulnerability
app.get('/ping', (req, res) => {
  const host = req.query.host;
  // Executing user input directly
  exec(`ping -c 4 ${host}`, (err, stdout) => {
    res.send(stdout);
  });
});

// SQL Injection vulnerable code
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Using string concatenation for SQL (vulnerable to injection)
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  
  // Mock database call
  console.log(`Executing query: ${query}`);
  res.send('Login endpoint');
});

// XSS vulnerability
app.get('/profile', (req, res) => {
  const username = req.query.username;
  // Outputting user input directly to response
  res.send(`Welcome, ${username}!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
