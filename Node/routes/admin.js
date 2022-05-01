const express=require('express');

const productController=require('../controllers/product');

const router=express.Router();

router.get('/add-product',productController.getProducts);

router.get('/contactus',productController.contactus);

router.post('/success',productController.success);

router.post('/product',productController.postProducts);

module.exports = router;