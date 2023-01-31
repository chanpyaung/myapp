var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // let headersResponse = "";
    // req.headers.forEach(value, key => {
    //     headersResponse.append("#{key}: $value")
    // });
    // res.render('api', { title: JSON.stringify(req.headers) });
    res.send(req.headers);
});

module.exports = router;