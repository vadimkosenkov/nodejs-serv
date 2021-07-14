const Employee = require('../models/Employees');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
  const candidate = await Employee.findOne({ email: req.body.email });
  if (candidate) {
    const isPasswordValid = req.body.password === candidate.password;
    if (isPasswordValid) {
      const token = jwt.sign({ userId: candidate.id, role: candidate.role, email: candidate.email }, 'jwt-dev', {
        expiresIn: 3600,
      });
      res.status(200).json({ token: `Bearer ${token}` });
    } else {
      res.status(401).json({ message: 'incorrect password' });
    }
  } else {
    res.status(404).json({ message: 'user not found' });
  }
};
