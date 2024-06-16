import PopularArtist from "../models/popularArtist_model.js";

const getAllPopularArtist = async(req,res) =>{
    try {
        const popularArtist = await PopularArtist.find({})
        return res.status(200).send(popularArtist);
    } catch (error) {
        return res.status(500).send({message : "Error in getting popularArtist", error : error.message})
    }
}

const getPopularArtist = async(req,res) =>{
    const {id} = req.params;
    try {
        const popularArtist = await PopularArtist.findById(id);
        return res.status(200).send(popularArtist);
    } catch (error) {
        return res.status(500).send({message : "Error in getting popularArtist", error : error.message})
    }
}

const createPopularArtist = async(req,res) =>{
    try {
        const popularArtist = await PopularArtist.create(req.body);
        return res.status(201).send({message : "popularArtist created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting popularArtist", error : error.message})
    }
}

const updatePopularArtist = async(req,res) =>{
    const {id} = req.params;
    try {
        const popularArtist = await PopularArtist.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "popularArtist updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting popularArtist", error : error.message})
    }
}

const deletePopularArtist = async(req,res) =>{
    const {id} = req.params;
    try {
        const popularArtist = await PopularArtist.findByIdAndDelete(id);
        return res.status(200).send({message : "popularArtist deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting popularArtist", error : error.message})
    }
}

export{
    getAllPopularArtist,
    getPopularArtist,
    createPopularArtist,
    updatePopularArtist,
    deletePopularArtist
}