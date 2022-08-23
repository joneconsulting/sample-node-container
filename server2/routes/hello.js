var express = require('express');
var router = express.Router();

var request = require('request');
const url = 'http://simple-node1:3000/list';
const key = "sample_key"
const api_url = url; //+'&serviceKey='+key;


router.get("/", (req, res) => {

    request(api_url,function(err,res,body){
        console.log(body);
    });

    res.send("/ method called");
});

module.exports = router;