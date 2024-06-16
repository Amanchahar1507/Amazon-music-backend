import mongoose from "mongoose";

const popularArtistSchema = new mongoose.Schema(
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

const PopularArtist = mongoose.model("PopularArtist", popularArtistSchema);

export default PopularArtist;