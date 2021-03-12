'use strict';

//  Get services
const { Router } = require('express');

const menuController = require('../controllers/menu.controller');

//  Initializations 
const router = Router();

//  Menu routes
router.post('/api/fastfood/menu', menuController.create_menu);
router.get('/api/fastfood/menu', menuController.get_all_menus);

module.exports = router;
