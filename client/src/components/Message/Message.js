import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';

//Message = ({message})라 써도 되지만 이렇게 쓰면 {message.text}라 써야 되므로 message : {user,text}로 작성 
const Message = ({message : {user,text}, name}) => {

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    // 현재 사용자라면 메세지 오른쪽에 표시 아니라면 왼쪽에 표시하는 코드
    return (
            isSentByCurrentUser
                ? (
                    <div className='messageContainer justifyEnd'>
                        <p className='sentText pr-10'>{trimmedName}</p>
                        <div className='messageBox backgroundBlue'>
                            <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
                        </div>
                    </div>
                ) 
                : (
                    <div className='messageContainer justifyStart'>
                        <div className='messageBox backgroundLight'>
                        <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                        </div>
                        <p className='sentText pl-10'>{user}</p>
                    </div>
                )
    );
};

export default Message;