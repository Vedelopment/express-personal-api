var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  student_name: String,
  project_name: String,
  description: String,
  image: String,
  url: String,
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
