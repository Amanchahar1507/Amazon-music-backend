import mongoose from "mongoose";

const albumSchema = new mongoose.Schema(
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

const Album = mongoose.model("album", albumSchema);

export default Album;