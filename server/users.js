const users = [];

const addUser = ({id, name, room}) => {
    // trim() = 문자열 양 끝 공백 제거
    // toLowerCase() = 문자열 모두 소문자로 변경
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
   
    // .find() = 함수를 만족하는 배열의 첫 번째 요소를 반환
    const existingUser = users.find((user) => user.room === room && user.name === name); // 동일 방이름에 동일 이름이 있는지 확인하는 코드

    if(existingUser){
        return{error : '해당 이름은 사용중입니다.'};
    }

    const user = {id,name,room};
    
    // push() = 배열 끝에 () 내용 추가
    users.push(user);
    
    return { user };

}

const removeUser = (id) => {
    // findindex = 요소의 위치(인덱스)를 반환
    const index = users.findIndex((user) => user.id ===id);
    // index 값이 -1이 아닌경우 = 일치하는 값이 있는경우...
    // splice() = 첫번째 인자 = 실행할 배열 위치, 두번째 인자 = 제거 요수 수
    // [0] 없으면 배열 index 배열 반환, [0] 있으면 index 요소 반환
    if(index !== -1){
        return users.splice(index,1)[0];
    }    

}

const getUser = (id) => users.find((user) => user.id ===id);

// 방 안에 있는 모든 유저 확인
//getUsersInRoom 함수가 호출될 때 user.room과 동일한 값을 가지고 있는 room을 가진 모든 user들을 users.filter로 검색후 새로운 배열로 만듬.
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser,removeUser,getUser,getUsersInRoom}
