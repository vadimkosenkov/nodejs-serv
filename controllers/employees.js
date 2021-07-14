const Employee = require('../models/Employees');

module.exports.getAll = async (req, res) => {
  const searchQuery = req.query.search;
  let users = [];

  users = await Employee.find({});

  if (users.length) {
    if (searchQuery) {
      users = users.filter(
        e => e.nameRu.toLowerCase().indexOf(searchQuery) > -1 || e.nameEn.toLowerCase().indexOf(searchQuery) > -1
      );
    }
    res.status(200).json(users);
  } else {
    res.status(400).json({ message: 'Bad request' });
  }
};

module.exports.getById = async (req, res) => {
  const user = await Employee.findOne({ id: req.params.id });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
