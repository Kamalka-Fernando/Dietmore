const express = require('express');
const router = express.Router();

const axios = require('axios');

const PostAPI = 'https://jsonplaceholder.typicode.com'  ;
//Get post
router.get('/',(req, res)=>{nodemon

  axios.get(`${PostAPI}/posts`).then(posts=>{
 
    res.status(200).json(posts.data);

  })

  .catch(error =>{
    res.status(500).send(error);
  })

});

module.exports = router;
