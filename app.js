const express = require('express');
const app = express();
const {Server } = require('socket.io')
const chatroute = require('./routes/chatRoute')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use("", chatroute);

app.use(express.static("public"));
 const server = app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

const io =new Server(server)

io.on("connection" , (socket)=>{
    console.log("A user connected");
    // console.log(socket.broadcast);
    socket.on("message", (data)=>{
        console.log(data);
        io.emit("broadcastMessage", {
            userId: data.userId,
            text: data.message
        });
     
    })

})

