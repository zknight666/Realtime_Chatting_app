import React from 'react';
import './Input.css'
const Input = ({message, setMessage, sendMessage}) => {
    return (
        <div>
            <form className='form'>
                <input
                    className='input'
                    type='text'
                    placeholder='Type a message...'
                    value={message} 
                    onChange={(event) => setMessage(event.target.value) } // 키보드 입력마다 message 저장, target.value = 현재 요소의 value 값 
                    onKeyDown = {event => event.key === 'Enter' ? sendMessage(event) : null} // Enter 키 입력시 sendMessage 호출
                />
                                                                {/* sendMessage(event) 함수 호출 */}
                <button className='sendButton' onClick={(event) => sendMessage(event)}>Send</button> 
                {/* <button onClick={sendMessage}>Send</button> */}
            </form>
        </div>
    );
};

export default Input;