# Realtime_Chatting_app

- 2023/06/02 ver
- 홈페이지 2023/06/15까지 운영
- 참고 자료
  - https://www.youtube.com/watch?v=ZwFA3YMfkoc (예전 영상이라 세팅 차이 있음)
  - https://www.heroku.com/ (서버 배포용, 무료아님)
  - https://www.netlify.com/ (client 배포용)

# **How to run**

- 웹에서 실행시 (주소창 복사)
  - 64794b6c1dd9f03d85d26465--melodic-kashata-4668a1.netlify.app

<br>

- 로컬에서 실행시
  - server/index.js 의 socket.io setup 부분의 origin 값 변경
    ```bash
    // Socket.io setup
    const io = new Server(server,{
        cors: {
          origin : "http://localhost:3000", 
          methods: ["GET","POST"]
    });
    ```
    
  - client/Chat.js 의 ENDPOINT 값 변경
    ```bash
    const ENDPOINT = 'localhost:5000';
    ```
    
  - server 폴더의 node_modules 설치 및 가동
    ```bash
    cd server
    ```
    ```bash
    npm install
    ```
    ```bash
    npm start
    ```
    
  - client 폴더의 node_modules 설치 및 가동
    - New Terminal (VScode 기준 ctrl+shift+`)
      ```bash
      cd client
      ```
      ```bash
      npm install
      ```
      ```bash
      npm start
      ```
