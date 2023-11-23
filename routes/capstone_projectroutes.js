const express = require("express");
const capstone_router = express.Router();
const { Project } = require("../models/capstone");
  
capstone_router.get("/", async (req, res) => {
    console.log("get /");
    //const user = await global.User.findById(req.user)
    //  console.log(user)
    // res.json({ ...user._doc, token: req.token });
  });
 
// API endpoint to get all projects
capstone_router.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// API endpoint to create a new project
capstone_router.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to get a specific project by ID
capstone_router.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// API endpoint to delete a project by ID
capstone_router.delete('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to delete a project by ID
capstone_router.delete('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

capstone_router.post("/api/add_new_contact", async (req,res) => {
  console.log(req.body)
    const {  profilePic, firstName,lastName,number,email,notes,address} = req.body;

    console.log("add_new_contact");
    console.log(profilePic);
    try {
        let cl = new Contact({
     
            profilePic : profilePic,
            firstName : firstName,
            lastName : lastName,
            number: number,
            email : email,
            notes : notes,
            address : address
          });
    
          cl = await cl.save();

          res.send(cl)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})




// API endpoint to get user profile by ID
capstone_router.get('/api/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to update user profile by ID
capstone_router.put('/api/profile/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


capstone_router.delete("/api/delete", async (req,res) => {
  const { number} = req.body;

  console.log("deleting");
  console.log(number);

 
  try {
 
  
      //  cl = await cl.save();
  

        //let cl2 = await Contact.deleteMany({ number: { $in: number } })
        let cl2 = await Contact.deleteMany({
          $or: number.map((n) => {
            return { number: n };
          })
        });
  
        console.log(cl2)
        res.send(cl2)

  } catch (error) {
      console.log(error)
      res.send(error)
  }

   
})


 

module.exports = capstone_router;

