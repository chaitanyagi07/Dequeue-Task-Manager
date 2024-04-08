const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  status: { type: String, required: true },
  owner: { type: String, required: true },
}, { timestamps: true, collection: 'projects' });


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
