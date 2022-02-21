import socket from 'socket.io'
import http from 'http'

export default (http: http.Server) => {

    const io = new socket.Server(http, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connect", function (socket: any) {
        console.log("Connect is successful")
        io.emit('message', "Connect is successful")

        socket.on("SERVER:ITEM_UPDATE", (obj: any) => {
            socket.broadcast.emit("SERVER:ITEM_UPDATE", obj);
        })
    })

    return io;
}
