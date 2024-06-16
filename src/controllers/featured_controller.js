import Featured from "../models/featured_model.js";

const getAllFeatured = async(req,res) =>{
    try {
        const featured = await Featured.find({})
        return res.status(200).send(featured);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Featured", error : error.message})
    }
}

const getFeatured = async(req,res) =>{
    const {id} = req.params;
    try {
        const featured = await Featured.findById(id);
        return res.status(200).send(featured);
    } catch (error) {
        return res.status(500).send({message : "Error in getting Featured", error : error.message})
    }
}

const createFeatured = async(req,res) =>{
    try {
        const featured = await Featured.create(req.body);
        return res.status(201).send({message : "Featured created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Featured", error : error.message})
    }
}

const updateFeatured = async(req,res) =>{
    const {id} = req.params;
    try {
        const featured = await Featured.findByIdAndUpdate(id, req.body, {
            new : true
        })
        return res.status(200).send({message: "Featured updated successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting featured", error : error.message})
    }
}

const deleteFeatured = async(req,res) =>{
    const {id} = req.params;
    try {
        const featured = await Featured.findByIdAndDelete(id);
        return res.status(200).send({message : "Featured deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({message : "Error in getting Featured", error : error.message})
    }
}

export{
    getAllFeatured,
    getFeatured,
    createFeatured,
    updateFeatured,
    deleteFeatured
}