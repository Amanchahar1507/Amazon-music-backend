import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema(
    {
        image :{type: String, required:true},
        name:{type: String, required:true},
        type:{type: String, required:true}
    },
    {
        timestamps:true,
        versionKey: false
    }
)

const Podcast = mongoose.model("Podcast", podcastSchema);

export default Podcast;