import socket from 'socket.io'
import http from 'http'

export default (http: http.Server) => {

    const io = new socket.Server(http, {
        cors: {
            origin: "https://backend-todo-list-web-mob.herokuapp.com",
            methods: ["GET", "POST"]
        }
    });

    io.on("connect", function (socket: any) {
        console.log("Connect is successful")
        io.emit('message', "Connect is successful")
    })

    return io;
}
