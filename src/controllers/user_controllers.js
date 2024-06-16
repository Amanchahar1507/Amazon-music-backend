import User from "../models/user_models.js";
import { sendEmail } from "../utilities/email.js";
import { createToken } from "../utilities/jwt.js";

const register = async(req,res) =>{
    try{
        const {name, email, password,number} = req.body;

        const user = await User.create({
            name,
            email,
            password,
            mobile_number:number
        })

        const option = {
            from :"amanchahar1507@gmail.com",
            to: email,
            subject: "Welcome to our platform",
            html: `<h1> Welcome ${name} </h1>
                    <p> Thanks for registering on our platform </p>
                    <p> Now you can login to our platform with your email and password </p>
                    <p> Thanks </p> `
        };
        // sendEmail(option)
        return res.status(201).send({message : "User register successfully"});
    }
    catch(error){
        return res.status(500).send({message: "user registering error", error: error.message});
    }
}

const login = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user  = await User.findOne({email});

        if(!user){
            return res.status(400).send({message : "Invalid credentials"});
        }

        const passwordMatch = await user.matchPassword(password)

        if(!passwordMatch){
            return res.status(400).send({message : "Invalid Credentials"});
        }

        const token = createToken({id: user._id})
        res.cookie("authToken", token,{
            path :"/",
            expires : new Date(Date.now() + 3600000),
            secure : true,
            httpOnly : true,
            sameSite : "None"
        })
        return res.status(200).send({message : "User logged successfully",token})
    }
    catch(error){
        return res.status(500).send({message : "user login error", error: error.message})
    }
}

const deleteUser = async(req,res)=>{
    try {
        console.log(req.user);
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).send({message : "user not found"});
        }
        return res.status(200).send({message: "user deleted successfully"});

    } catch (error) {
        return res.status(500).send({message: "delete user error", error: error.message});
    }
}

const logout = async(req,res) =>{
    res.clearCookie("authToken");
    return res.status(200).send({message:"used logout successfully"});
}

export{
    register,
    login,
    logout,
    deleteUser
}