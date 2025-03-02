const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Insecure cookie settings
router.get('/set-cookie', (req, res) => {
  res.cookie('auth', 'token123', {
    // Missing secure and httpOnly flags
  });
  res.send('Cookie set');
});

// Weak cryptography
router.post('/encrypt', (req, res) => {
  const { text } = req.body;
  // Using weak MD5 hash
  const hash = crypto.createHash('md5').update(text).digest('hex');
  res.json({ hash });
});

// Regex DoS vulnerability
router.post('/validate-email', (req, res) => {
  const { email } = req.body;
  // Vulnerable regex that can cause ReDoS
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  const isValid = emailRegex.test(email);
  res.json({ isValid });
});

module.exports = router;
