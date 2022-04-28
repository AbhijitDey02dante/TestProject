const path = require('path');

const express = require('express');

const productsController=require('../controllers/product');
const adminData = require('./admin');

const router = express.Router();

router.get('/', productsController.showProduct);

module.exports = router;
