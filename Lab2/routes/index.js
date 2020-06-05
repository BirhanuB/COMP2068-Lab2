'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log(req.query);
    var n = Object.keys(req.query).length;
    if (n === 3) {
        var method = req.query.method;
        var x = req.query.x;
        var y = req.query.y;
        if (method === "add") {
            console.log(x + ' + ' + y + ' = ' + (Number(x) + Number(y)));
        }
        else if (method === "subtract") {
            console.log(x + ' - ' + y + ' = ' + (x - y));
        }
        else if (method === "multiply") {
            console.log(x + ' * ' + y + ' = ' + (x * y));
        }
        else if (method === "divide") {
            console.log(x + ' / ' + y + ' = ' + (x / y));
        }
        else {
            console.log("error: unrecognized method")
        }
    }
    else if (n > 0 && n != 3) {
        console.log('error: required parameter missing in the url');
    }
    res.render('index', { title: 'Express' });
});

module.exports = router;
