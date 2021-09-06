const express = require('express');
const router = express.Router();
const Url = require('../models/urls');
const dotenv = require("dotenv");


dotenv.config();
//  @route GET /
// @desc redirect to original Url

router.get('/:urlCode', async (req, res) => {
    try {
        const urlCode = req.params.urlCode;
        const url = await Url.findOne({ urlCode: urlCode});
        
        if (url){
           return res.redirect(url.longUrl);
        }
        return res.status(404).json("Url not found");
    }
    catch (err){
        console.error(err);
        res.status(500).json("Internal server error");
    }
});
module.exports = router;
