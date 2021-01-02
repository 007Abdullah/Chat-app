let users = [
    {
        username: "Abdullah",
        useremail: "demo@gmail.com",
        userpassword: "123",
        usergender: "Male",
        userphonenumber: "0312",
    },
];
let chats = [
    {
        username: "some name",
        chattxt: "Hello Merii Jan",
    },
];
const PORT = process.env.PORT || 5000;
const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

app.post("/signup", (req, res, next) => {
    users.push({
        username: req.body.username,
        useremail: req.body.useremail,
        userpassword: req.body.userpassword,
        usergender: req.body.usergender,
        userphonenumber: req.body.userphonenumber,
    });
    console.log()
})




server.listen(PORT, () => {
    console.log("Server is Running :", PORT);
})