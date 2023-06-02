// 서버 라우팅 설정

const express = require('express');
// express 객체의 Router 메서드를 호출, 새로운 라우터 객체 만듬
// router = url 요청 처리해주는 메소드
const router = express.Router();

router.get('/', (req,res) => {
    res.send('서버 이즈 업 앤 러닝');
})

module.exports = router;