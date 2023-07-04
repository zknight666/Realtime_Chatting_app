# Realtime_Chatting_app
<img src="https://img.shields.io/github/languages/count/zknight666/Realtime_Chatting_app"/>
<img src="https://img.shields.io/github/languages/top/zknight666/Realtime_Chatting_app"/>
<img src="https://img.shields.io/github/languages/code-size/zknight666/Realtime_Chatting_app"/>
<img src="https://img.shields.io/github/repo-size/zknight666/Realtime_Chatting_app"/>
<img src="https://img.shields.io/github/commit-activity/w/zknight666/Realtime_Chatting_app"/>
<img src="https://img.shields.io/github/last-commit/zknight666/Realtime_Chatting_app"/
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzknight666%2FRealtime_Chatting_app&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>

- 2023/06/02 ver
- 홈페이지 2023/06/15까지 운영
- 참고 자료
  - https://www.youtube.com/watch?v=ZwFA3YMfkoc (예전 영상이라 세팅 차이 있음)
  - https://www.heroku.com/ (서버 배포용, 무료아님)
  - https://www.netlify.com/ (client 배포용)

<div align="center" >
<img src="https://veiled-jay-0c2.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e768a0a-5b2a-451c-978e-9c8354653ffc%2F%25EC%25A3%25BC%25EC%2584%259D_2023-06-15_225922.png?id=7424d5f2-b6be-4295-a0a4-aa0f1abeb8d3&table=block&spaceId=5989bf22-29e0-4423-b8aa-9d2d5f3b5c6b&width=2000&userId=&cache=v2" width="400" height="400"/>
&emsp;
<img src="https://veiled-jay-0c2.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1dc33b21-7c63-4d72-a99a-bd88ac441f4e%2F%25EC%25A3%25BC%25EC%2584%259D_2023-06-15_225905.png?id=1658ef0b-19e2-4378-84cd-f2ab6d10cd3f&table=block&spaceId=5989bf22-29e0-4423-b8aa-9d2d5f3b5c6b&width=2000&userId=&cache=v2" width="400" />
</div>

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
