/**
 * Created by abhishekyadav on 01/04/17.
 */
var express = require('express');
var app = express();
var apiai = require('apiai');
var bp=require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
var appapi = apiai("3e9ac947953143df90c3c7fcebed6c62");
var q;
var s;
const path = require('path');
app.use('/', express.static(__dirname + '/public_html'));
app.post('/',function (req,res) {
    q=req.body.query;
    s=req.body.sessionId;
    console.log(q)
    var request = appapi.textRequest(q, {
        sessionId: s
});

    request.on('response', function(response) {
        console.log(response);
        res.send(response.result.fulfillment.speech);
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})



app.listen(1208,function () {
    console.log("listening");
})