const express = require('express'); // express = node.js의 웹 app framework 서버 구성 및 관리
const http = require('http'); // http =  Node.js의 내장 모듈, http 서버 및 클라이언트 기능 제공
const cors = require('cors'); // cors = 웹페이지가 다른 도메인의 리소스를 요청할 때 보안을 위해 제한하는 정책 // Socket.Io v3 부터 CORS 설정 작성해야 함
const { Server } = require("socket.io"); // io =  Socket.IO 서버 인스턴스, Server 클래스의 새로운 인스턴스 만듬
//const socketio = require('socket.io'); // socketio = 실시간 양방향 통신
const router = require('./router'); // router.js에 작성한 라우팅 설정을 사용하겠다
const {addUser, getUser,getUsersInRoom,removeUser} = require('./users.js');

// App setup
const app = express(); // app = express 의 인스턴스 (라우팅, 미들웨어 설정 가능)
app.use(router);
app.use(cors());

// Server setup
const server = http.createServer(app); // server = HTTP 서버 인스턴스
const PORT = process.env.PORT || 5000 // PORT = 서버 사용 포트 지정 지정 포트가 없으면 5000 사용.

// Socket.io setup
const io = new Server(server,{
    cors: {
        // origin: "https://64794b6c1dd9f03d85d26465--melodic-kashata-4668a1.netlify.app/chat?name=t&room=001", // 모든 도메인 접근 허용 = *, localhost3000만 허용 
         origin: ["https://react-chat-application.herokuapp.com/", "https://64794b6c1dd9f03d85d26465--melodic-kashata-4668a1.netlify.app"],
        // origin : "*",
        methods: ["GET","POST"] // 허용할 요청 메소드
    }
});

// Socket.io event handlers (클라이언트가 서버와 연결됬을 때 )
io.on('connection', (socket) => {
    console.log('a user connected');

    // 클라이언트에서 join이라는 이벤트를 실행할 때 서버에서 실행될 함수
    socket.on('join',({name,room}, callback) => { // callback = 이벤트 처리 완료시 클라이언트에게 알림 용도로 실행
        console.log(name,room);
        
        const {error,user} = addUser({id:socket.id, name, room}); //name=name, room=room이지만 생략됨., error = 아이디 중복체크
        
        if(error) return callback(error);

        socket.emit('message',{user:'admin', text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin', text: `${user.name} 님이 참가했습니다.`}) // 특정 유저가 있는 특정 방에 있는 모든 소켓에게(본인 제외) 메세지 보내기.
        socket.join(user.room); // room에 들어간다.

        io.to(user.room).emit('roomData',{room:user.room, users:getUsersInRoom(user.room)})

        callback(); // join 이벤트 처리 완료를 알리는 함수
    });

    socket.on('sendMessage', (message,callback) => {
        const user = getUser(socket.id);
        
        io.to(user.room).emit('message', {user:user.name,text:message}); // 방에 있는 모든 사용자에게 메세지 보냄
        io.to(user.room).emit('roomData',{room:user.room, users:getUsersInRoom(user.room)}) // 특정 사용자가 있는 특정 방에 roomData라는 이벤트를 보냄. 

        callback();
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        
        if(user){
            io.to(user.room).emit('message', {user:'admin', text: `${user.name} 님이 나가셨습니다.`})
        }
        console.log('user disconnected');
    });
});
 
// Server start
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`)); 
