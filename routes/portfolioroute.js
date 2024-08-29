// const router = require('express').Router();
// const { Intro, Abouts, Project, Contacts, Experience, Courses } = require("../models/portfolioModel");
// // get all portfolioData
// router.get('/get-portfolio-data', async (req, res) => {
//     try {
//         const intros = await Intro.find();
//         const abouts = await Abouts.find();
//         const project = await Project.find();
//         const contacts = await Contacts.find();
//         const experience = await Experience.find();
//         const courses = await Courses.find();

//         res.status(200).send({
//             intro: intros[0],
//             abouts: abouts[0],
//             project: project,
//             contacts: contacts[0],
//             experience: experience,
//             courses: courses,

//         })
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


// // update portfolio data
// router.post("/update-intro", async (req, res) => {
//     try {
//         const intros = await Intro.findOneAndUpdate(
//             { _id: req.body._id },
//             req.body,
//             { new: true }
//         );
//         res.status(200).send(
//             {
//                 data: intro,
//                 success: true,
//                 message: "Intro Updated Successfully"
//             }
//         );
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });
// module.exports = router;





const express = require('express');
const router = express.Router();
const { Intro, Abouts, Project, Contacts, Experience, Courses } = require("../models/portfolioModel");
const User= require('../models/userModel')
// Get all portfolioData
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await Abouts.find();
        const project = await Project.find();
        const contacts = await Contacts.find();
        const experience = await Experience.find();
        const courses = await Courses.find();

        res.status(200).send({
            intro: intros[0],
            abouts: abouts[0],
            project: project,
            contacts: contacts[0],
            experience: experience,
            courses: courses,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update portfolio data
router.post("/update-intro", async (req, res) => {
    try {
        const intros = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intros,
            success: true,
            message: "Intro Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
//update about data
router.post("/update-about", async (req, res) => {
    try {
        const about = await Abouts.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// add- experience
router.post('/add-exp', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
       
    }
});
// update experience
router.post('/update-exp', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// delete experience
router.post('/delete-exp', async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({
            _id: req.body._id
        }) 
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});





//projects
// add- projects
router.post('/add-project', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
       
    }
});
// update projects
router.post('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// delete projects
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({
            _id: req.body._id
        }) 
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});






//courses
// add- courses
router.post('/add-courses', async (req, res) => {
    try {
        const courses = new Courses(req.body);
        await courses.save();
        res.status(200).send({
            data: courses,
            success: true,
            message: "Courses added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
       
    }
});
// updateCourses
router.post('/update-courses', async (req, res) => {
    try {
        const courses = await Courses.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: courses,
            success: true,
            message: "Courses Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// delete projects
router.post('/delete-courses', async (req, res) => {
    try {
        const courses = await Courses.findOneAndDelete({
            _id: req.body._id
        }) 
        res.status(200).send({
            data: courses,
            success: true,
            message: "Courses Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// CONTACT
router.post("/update-Contact", async (req, res) => {
    try {
        const Contact = await Contacts.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: Contact,
            success: true,
            message: "Contact Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
// //admin login
// router.post('/admin-login', async (req, res) => {
//     try {
// const user= await user.findOne({username : req.body.username , password : req.body.password })
// if(user){
//     res.status(200).send({
//         data:user,
//         success:true,
//         message:"Login Successfully"
//         });
//         }else{
//             res.status(200).send({
//                 data:user,
//                 success:false,
//                 message:"Invalid Credentials"
//                 })

//     }}
//     catch(error){
//         res.status(500).send(error);
//     }
// }
// );

router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successfully",
                token: 'your-generated-token' // Replace with actual token generation logic
            });
        } else {
            res.status(200).send({
                success: false,
                message: "Invalid Credentials"
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
});

module.exports = router;
