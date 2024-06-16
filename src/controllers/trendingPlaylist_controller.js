import TrendingPlaylist from "../models/trendingPlaylist_model.js";

const getAllTrendingPlaylist = async(req,res) =>{
    try {
        const trendingPlaylist = await TrendingPlaylist.find({})
        return res.status(200).send(trendingPlaylist);
    } catch (error) {
        return res.status(500).send({message : "Error in getting trendingPlaylist", error : error.message})
    }
}

const getTrendingPlaylist = async(req,res) =>{
    const {id} = req.params;
    try {
        const trendingPlaylist = await TrendingPlaylist.findById(id);
        return res.status(200).send(trendingPlaylist);
    } catch (error) {
        return res.status(500).send({message : "Error in getting trendingPlaylist", error : error.message})
    }
}

const createTrendingPlaylist = async(req,res) =>{
    try {
        const trendingPlaylist = await TrendingPlaylist.create(req.body);
        return res.status(201).send({message : "trendingPlaylist created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting trendingPlaylist", error : error.message})
    }
}

const updateTrendingPlaylist = async(req,res) =>{
    const {id} = req.params;
    try {
        const trendingPlaylist = await TrendingPlaylist.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "trendingPlaylist updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting trendingPlaylist", error : error.message})
    }
}

const deleteTrendingPlaylist = async(req,res) =>{
    const {id} = req.params;
    try {
        const trendingPlaylist = await TrendingPlaylist.findByIdAndDelete(id);
        return res.status(200).send({message : "trendingPlaylist deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting trendingPlaylist", error : error.message})
    }
}

export{
    getAllTrendingPlaylist,
    getTrendingPlaylist,
    createTrendingPlaylist,
    updateTrendingPlaylist,
    deleteTrendingPlaylist
}