import mongoose from "mongoose";


// Create product schema
const productSchema = mongoose.Schema({

    name : {
        type: String,
        required: true,
        trim: true
    },
    regular_price : {
        type: Number,
        required: true
    },
    sale_price : {
        type: Number
    },
    stock : {
        type: Number
    },
    photo : {
        type: String,
        default: 'p.png'
    },
    gallery : {
        type: Array,
        default: []
    },
    categories : {
        type: Array,
        default: []
    },
    tags : {
        type: Array,
        default: []
    }

}, {
    timestamps: true
});



// export student schema
export default mongoose.model('Product', productSchema);