import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'; // 스크롤이 자동으로 맨 밑으로 이동하는 라이브러리, 메세지가 추가될 때마다 자동으로 맨 밑으로 이동.
import Message from '../Message/Message';
import './Messages.css';



const Messages = ({messages, name}) => {
    return (
        <div>
            <ScrollToBottom className='messages'>
                {/* i = 인덱스, <Message> */}
                {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div> )}
            </ScrollToBottom>
        </div>
    );
};

export default Messages;