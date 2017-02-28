var server = require('node-router').getServer();

server.get("/", function (req, resp) {
    resp.simpleText(200,"Hello world");
});

server.listen(8000,"localhost");