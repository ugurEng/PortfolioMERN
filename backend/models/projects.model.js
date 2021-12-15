const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  projectname: {
    type: String,
    required: true,
    
  },
  
  projectdesc: {
     type: String,
     required: true,
     },

     projectdesc: {
     type: String,
     required: true,
     },
     projectimage: {
      type: String,
      required: true,
      },
      projectselect: {
        type: String,
        required: true,
        }
}, {
  timestamps: true,
});

const Project = mongoose.model('Projects', projectsSchema);

module.exports = Project;