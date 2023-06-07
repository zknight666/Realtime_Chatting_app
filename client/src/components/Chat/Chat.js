import React, { useEffect,useState } from 'react';
// 현재 URL의 객체 정보를 확인하기 위해 사용
import { useLocation } from 'react-router-dom';
//  URL의 객체 정보를 json으로 보여주는 라이브러리
import queryString from 'query-string';
// 클라이언트에서 사용되는 socket.io
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
    // use state = 함수를 호출시 상태 업데이트, 다시 렌더링
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    // ENDPOINT가 대문자인 이유 = 상수임을 알리기 위해, 변경되지 않는 값.
    // const ENDPOINT = 'localhost:5000';
    const ENDPOINT = 'https://react-chat-application.herokuapp.com/';
    const location = useLocation();

    //useEffect = 렌더링 될때 마다 코드 실행
    // useEffect 2번째 인자 [] 배열 내 값이 변경될 때마다 렌더링
    // location.search가 변경될 때 마다 = 사용자가 다른 방에 참여하거나 나갈때마다 실행
    useEffect(() => {
        const {name,room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        // io(ENDPOINT)  콘솔로그
        console.log(socket);
        // join 이벤트 실행해라, 첫번째 인수: 이벤트 이름, 두번째 인수: 이벤트 data
        // socket.on('join')으로 서버쪽에서 받을 수 있음
        socket.emit('join', {name,room}, () =>{
            
        });

        // 컴포넌트가 언마운트될 때 실행됨, 의존성 배열에 있는 값이 변경될 때 실행됨.
        return () => {
            // disconnect 이벤트를 실행해라
            socket.emit('disconnect');
            // 클라이언트 소켓 연결 종료
            socket.off();
        }
    }, [ENDPOINT, location.search]);
 

    useEffect(() => {
        // socket.on = 서버에서 보낸 message 이벤트를 listen함 -> 이벤트 발생 시 다음 함수 실행, message event는 sendmessage 안에 있음
        socket.on('message', (message) => {
            setMessages([...messages,message]); // messages 배열을 만듬. message를 추가한 새 배열을 만듬. message 이벤트 발생할 때마다 실행.
        })
    },[messages]);

    const sendMessage = (event) => { // event = enter를 눌렀을 때, send를 눌렀을 때 (input.js 에 설정되어 있음)
       
        event.preventDefault(); // form 안쓰면 제거해도 됨.

        if(message) {
            socket.emit('sendMessage',message,() => setMessage(''));
        }
    }

    console.log(message,messages);



    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            {/* <TextContainer users={users}/> */}
        </div>
    )
}

export default Chat;