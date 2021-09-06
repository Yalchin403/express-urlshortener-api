const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const Url = require('../models/urls');
const dotenv = require("dotenv");


dotenv.config();
//  @route POST /api/urls/shorten
// @desc create short Url
router.post('/shorten', async (req, res) => {
    console.log(req.body)
    const { longUrl } = req.body;
    const baseUrl = process.env.LOCAL_BASE_URL;

    if(!validUrl.isUri(baseUrl)) {
        return res.status(422).json('Invalid Base Url');
    }

    const urlCode = shortId.generate();
    if(!validUrl.isUri(longUrl)) {
        return res.status(422).json("Invalid Url")
    }
    else {
        // try {

            let url = await Url.findOne({ longUrl: longUrl});
            if (url) {
                res.status(200).json(url);
            }
            else {
                const shortUrl = `${baseUrl}/${urlCode}`;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                });

               await url.save();
               res.status(200).json(url);

            }
        }
        // catch (err) {
        //     console.error(err);
        //     res.status(500).json("Internal Server Error")
        // }
    // }
})
module.exports = router;
