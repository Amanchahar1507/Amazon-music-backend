import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema(
    {
        name : {type:String, default:true},
        email : {type:String, default:true, unique:true},
        mobile_number : {type:Number, default: true},
        password : {type:String, default:true},
    },
    {
        timestamps:true,
        versionKey: false
    }
)

userSchema.pre("save", async function(next){
    try{
        const salt = await bcrypt.genSaltSync(10);
        this.password = await bcrypt.hash(this.password,salt);
    }
    catch(error){
        console.log("error hashing password",error);
        next(error);
    }
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compareSync(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;