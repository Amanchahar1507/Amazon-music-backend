import mongoose from "mongoose";

const trendingPlaylistSchema = new mongoose.Schema(
    {
        image:{type: String, required:true},
        name:{type: String, required:true},
        type:{type: String, required:true}
    },
    {
        timestamps:true,
        versionKey: false
    }
)

const TrendingPlaylist = mongoose.model("trendingPlaylist", trendingPlaylistSchema);

export default TrendingPlaylist;