import React, {useState} from 'react';
// 'react-router-dom' 라이브러리dptj Link 컴포넌트 가져옴
// HTML의 '<a>' 태그 = Link 로 생각하면 됨.
import { Link } from 'react-router-dom';
import './Join.css';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input placeholder="Name" className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} /></div>
                {/* Sign In 버튼을 눌렀을 때 name 또는 room에 값이 없는 경우 event.preventDefault() 실행 -> 이벤트 실행 안하는 함수 실행 */}
                {/* Link' 컴포넌트가 클릭될 때 chat?name=${name}&room=${room} url로 이동해라 */}
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;