const mongoose= require("mongoose");

const capstone_schema = new mongoose.Schema({
    picture : String,
    name: String,
    client: String,
},{timestamps : true})

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  skills: [String],
  experience: String,
  portfolio: [{
    title: String,
    description: String,
    imageUrl: String,
  
  }],
 
});

 
const Project = mongoose.model('Project',capstone_schema,'Project');
const User = mongoose.model('User', userSchema);

module.exports = {Project,User};

