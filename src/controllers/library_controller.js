import Library from "../models/library_model.js";


const getAllLibrary = async(req,res) =>{
    try {
        const library = await Library.find({})
        return res.status(200).send(library);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Library", error : error.message})
    }
}

const getLibrary = async(req,res) =>{
    const {id} = req.params;
    try {
        const library = await Library.findById(id);
        return res.status(200).send(library);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Library", error : error.message})
    }
}

const createLibrary = async(req,res) =>{
    try {
        const library = await Library.create(req.body);
        return res.status(201).send({message : "Library created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Library", error : error.message})
    }
}

const updateLibrary = async(req,res) =>{
    const {id} = req.params;
    try {
        const library = await Library.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "Library updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Library", error : error.message})
    }
}

const deleteLibrary = async(req,res) =>{
    const {id} = req.params;
    try {
        const library = await Library.findByIdAndDelete(id);
        return res.status(200).send({message : "Library deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting Library", error : error.message})
    }
}

export{
    getAllLibrary,
    getLibrary,
    createLibrary,
    updateLibrary,
    deleteLibrary
}