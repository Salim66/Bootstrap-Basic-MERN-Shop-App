import express from 'express';
import multer from 'multer';
import { createProduct, deleteProduct, getAllProduct, singleProduct, updateProduct } from '../controllers/productController.js';
import path, { resolve } from 'path';

// init router
const router = express.Router();

const __dirname = resolve();


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/products/'));
    }
});

const productMulter = multer({
    storage
}).fields([
    {
        name: 'photo',
        maxCount: 1
    },
    {
        name: 'gallery',
        maxCount: 10
    }
]);


// route
router.route('/').get(getAllProduct).post(productMulter, createProduct);
router.route('/:id').get(singleProduct).put(updateProduct).delete(deleteProduct);


// Export default router
export default router;