import mongoose from "mongoose";

const librarySchema = new mongoose.Schema(
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

const Library = mongoose.model("library", librarySchema);

export default Library;