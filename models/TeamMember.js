// models/TeamMember.js

const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  ProfileUrl: {
    type: String,
    required: true,
  },
});
mongoose.models = {}
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
