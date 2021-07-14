const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  firstNameNative: {
    type: String,
  },
  lastNameNative: {
    type: String,
  },
  middleNameNative: {
    type: String,
  },
  avatarSrc: {
    type: String,
    default: '',
  },
  department: {
    type: String,
  },
  roomNumber: {
    type: String,
  },
  mobilePhone: {
    type: String,
  },
  internalPhone: {
    type: String,
  },
  cNumber: {
    type: String,
  },
  male: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    default: '',
  },
  skype: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'user',
  },
  password: {
    type: String,
  },
  dateHired: {
    type: Number,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  addressBookRedesign: {
    type: Boolean,
    default: true,
  },
  vacation: {
    status: { type: Boolean },
    finish_date: { type: Number },
  },
});

module.exports = mongoose.model('employee', employeeSchema);
