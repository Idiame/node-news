const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', async(req,res,next) => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/random?apikey=pBg2suDqN394DyRM8jojqN7C1eAk2kTC")
    res.render('axios',{gif: response.data.data.images.downsized_medium.url});
    console.log(response.data.data)
})

module.exports=router;