const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

// login logic
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email:req.body.email})
        if (!user) {
            return res.status(400).send("user not found");
        }
        const pass= await bcrypt.compare(req.body.password,user.password);
        if(!pass){
            return res.status(400).send("password is incorrect");
        }
        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
        }).send("Invalid credentials")
    }
};


// register logic
const registerController = async(req,res) => {
    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt) 
    try {
        const newUser = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        });
        await newUser.save();
        res.status(201).json({
            success:true,
            newUser,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        })
        
    }
};


module.exports = { loginController, registerController };