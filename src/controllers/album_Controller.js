import Album from "../models/album_model.js";


const getAllAlbum = async(req,res) =>{
    try {
        const album = await Album.find({})
        return res.status(200).send(album);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Album", error : error.message})
    }
}

const getAlbum = async(req,res) =>{
    const {id} = req.params;
    try {
        const album = await Album.findById(id);
        return res.status(200).send(album);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Album", error : error.message})
    }
}

const createAlbum = async(req,res) =>{
    try {
        const album = await Album.create(req.body);
        return res.status(201).send({message : "Album created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Album", error : error.message})
    }
}

const updateAlbum = async(req,res) =>{
    const {id} = req.params;
    try {
        const album = await Album.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "Album updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Album", error : error.message})
    }
}

const deleteAlbum = async(req,res) =>{
    const {id} = req.params;
    try {
        const album = await Album.findByIdAndDelete(id);
        return res.status(200).send({message : "Album deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting Album", error : error.message})
    }
}

export{
    getAllAlbum,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum
}