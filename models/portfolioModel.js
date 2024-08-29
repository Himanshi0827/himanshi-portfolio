const mongoose = require('mongoose');
const introSchema = new mongoose.Schema({
    welcomeText:
    {
        type: String,
        require: true
    },
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}

);
const experienceSchema = new mongoose.Schema({
    tittle:
    {
        type: String,
        require: true
    },
    period:
    {
        type: String,
        require: true
    },

    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

}

);
const aboutsSchema = new mongoose.Schema({
    lottieURL:
    {
        type: String,
        require: true
    },

    description: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    },
    skills:{
        type:Array,
        required:true
    }
}

);

const projectSchema = new mongoose.Schema({
    tittle:
    {
        type: String,
        require: true
    },
    image:
    {
        type: String,
        require: true
    },

    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technolgies: {
        type: Array,
        required: true
    }
}

);

const coursesSchema = new mongoose.Schema({
    tittle:
    {
        type: String,
        require: true
    },
    image:
    {
        type: String,
        require: true
    },

    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technolgies: {
        type: Array,
        required: true
    }
}

);
const contactsSchema = new mongoose.Schema({
    name:
    {
        type: String,
        require: true
    },
    age:
    {
        type: String,
        require: true
    },

    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

}

);
module.exports ={
    Intro: mongoose.model("intros",introSchema),
    Abouts: mongoose.model("abouts",aboutsSchema),
    Experience: mongoose.model("experience",experienceSchema),
    Project: mongoose.model("projects",projectSchema),
    Courses: mongoose.model("courses",coursesSchema),
    Contacts: mongoose.model("contacts",contactsSchema),
}