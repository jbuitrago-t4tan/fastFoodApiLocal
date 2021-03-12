'use strict';

const uuid = require("uuid").v4;
const redis = require('redis');
const FastFoodTicket = require("../models/fastFoodTicket");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});

// RM-1
module.exports.create_ticket = async (req, res) => {

    const {
        ccClient,
        userNameClient,
        menuId
    } = req.body;

    try{
        const newTicket = await FastFoodTicket.create({
            ccClient: ccClient,
            userNameClient: userNameClient,
            menuId: menuId,
            requestDate: new Date()
        });

        res.json({
            ok: true,
            statusCode: 200,
            newTicket
        });
    }catch(err){
        return res.status(500).json({
            ok: false,
            statusCode: 500,
            message: "An error was ocurred",
            error: err,
        });
    };
};