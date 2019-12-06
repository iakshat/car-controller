var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(2000);

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/statics/controls.htm");

})

app.get("/statics/:script", (req, res) => {

    res.sendFile(__dirname + "/statics/" + req.params.script);

})

io.on('connection', function (socket) {
    socket.on('signal incoming', function (data) {
        console.log(data);

        //code for controller here


    });
});