import Product from "../models/Product.js"
import createError from "./errorController.js";


// get all product 
export const getAllProduct = async (req, res, next) => {
    try {
        let products = await Product.find();
        if(products){
            res.status(200).json(products);
        }else {
            next(createError(401, "Something want wrong!"))
        }
    } catch (error) {
        next(createError(error));
    }
}

// get single product
export const singleProduct = async (req, res, next) => {
    let { id } = req.params;
    try {
        let product = await Product.findById(id);
        if(product){
            res.status(200).json(product);
        }else {
            next(createError(401, "Product not found!"));
        }
    } catch (error) {
        next(createError(error));
    }
}

// create product
export const createProduct = async (req, res, next) => {

    let gallery = [];
    for(let i = 0; i < req.files.gallery.length; i++){
        gallery.push(req.files.gallery[i].filename);
    }

    try {
        
        const product = await Product.create({
            ...req.body,
            photo: req.files.photo[0].filename,
            gallery        
        });
        if(product){
            res.status(200).json({
                "message" : "Product added successfully" 
            })
        }else {
            next(createError(401, "Something want wrong!"));
        }

    } catch (error) {
        next(createError(error));
    }
}

// update product
export const updateProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if(product){
            res.status(202).json({
                "message" : "Product updated successfully",
                "product" : product
            })
        }else {
            next(createError(401, "Something want wrong"));
        }
    } catch (error) {
        next(createError(error));
    }
}

// delete product
export const deleteProduct = async (req, res, next) => {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if(product){
            res.status(202).json({
                "message" : "Product deleted successfully"
            })
        }
    } catch (error) {
        next(createError(error));
    }
}