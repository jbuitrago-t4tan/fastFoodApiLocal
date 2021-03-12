'use strict';

const uuid = require("uuid").v4;
const redis = require('redis');
const logger = require('@condor-labs/logger');
const FastFoodMenu = require("../models/fastFoodMenu");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});
module.exports.create_menu = async (req, res) => {
    
    const { menuName, menuPrice } = req.body;
    const menuId = uuid();
    
    try {
        const newMenu = await FastFoodMenu.create({
            menuId: menuId,
            menuName: menuName,
            menuPrice: menuPrice
        });
            
        client.set(`menuId-${menuId}`,  `${menuId}`, redis.print);
        client.set(`menuName-${menuId}`, `${menuName}`, redis.print);
        client.set(`menuPrice-${menuId}`, `${menuPrice}`, redis.print);
        client.set(`menuId`,  `${menuId}`, redis.print);
        client.set(`menuName`, `${menuName}`, redis.print);
        client.set(`menuPrice`, `${menuPrice}`, redis.print);
        
        res.status(201).json({
            ok: true,
            statusCode: 201,
            newMenu
        });

    }catch(err){
        return res.status(500).json({
            ok: false,
            statusCode: 500,
            message: "An error was ocurred",
            error: err,
        });
    }
};

module.exports.get_all_menus = async (req, res) => {

    client.get(`menuId`, redis.print);
    client.get(`menuName`, redis.print);
    client.get(`menuPrice`, redis.print);

    try{
        const allMenus = await FastFoodMenu.find();
        logger.information({ ok: true, statusCode: 200, menus: allMenus });
        res.json({
            ok:true,
            statusCode: 200,
            allMenus
        });
        
    }catch(err) {
        logger.error(Error("Get menus error!... "));
        return res.status(500).json({
            ok: false,
            statusCode: 500,
            message: "An error was ocurred",
            error: err,
        });
    };
};  

