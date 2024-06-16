import mongoose from "mongoose";

const featuredSchema = new mongoose.Schema(
    {
        image:{type:String, required:true},
        name:{type: String, required:true},
        type:{type: String, required:true}
    },
    {
        timestamps:true,
        versionKey: false
    }
)

const Featured = mongoose.model("Featured", featuredSchema);

export default Featured;