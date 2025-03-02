module.exports = {
  url: 'mongodb://localhost:27017/vuln_test',
  options: {
    useNewUrlParser: true,
    user: 'admin',
    pass: 'super_secret_password123',
    connectTimeoutMS: 30000
  }
};
