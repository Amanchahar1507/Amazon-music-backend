import Podcast from "../models/podcast_model.js";

const getAllPodcast = async(req,res) =>{
    try {
        const podcast = await Podcast.find({})
        return res.status(200).send(podcast);
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const getPodcast = async(req,res) =>{
    const {id} = req.params;
    try {
        const podcast = await Podcast.findById(id);
        return res.status(200).send(podcast);
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const createPodcast = async(req,res) =>{
    try {
        const{
            image,
            name,
            type
        }=req.body
        const podcast = await Podcast.create({image,name,type});
        return res.status(201).send({message : "podcast created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const updatePodcast = async(req,res) =>{
    const {id} = req.params;
    try {
        const podcast = await Podcast.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "podcast updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const deletePodcast = async(req,res) =>{
    const {id} = req.params;
    try {
        const podcast = await Podcast.findByIdAndDelete(id);
        return res.status(200).send({message : "podcast deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

export{
    getAllPodcast,
    getPodcast,
    createPodcast,
    updatePodcast,
    deletePodcast
}