/** @format */

import mongoose from "mongoose";

// Defino el Schema: campo y tipo de dato

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
    code: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    thumbnails: {
        type: [String],
    },
    id: Number,
});

//Defino el Modelo y lo exporto:
const ProductModel = mongoose.model("products", productSchema);

export default ProductModel;
