/*
Router 만드는 절차
*/
// express의 routing기능을 활용하기 위해
// express 프레임워크에서 지원하는 routing 기능을 사용해서
// client의 mapping을 처리하기
// 1. express impot
var express = require("express");
// 2. express로 부터 router선언
var router = express.Router();

// client의 request method
// requestMethod=GET선언한 함수

// 익명, 무명함수
// function(req,res) 함수는 함수인데 이름이 없는 함수
// 함수라는 선언만 있고 이름이 없는 함수
// client에서 /로 요청을하면 처리할 코드를 포함하는 곳
// call back 함수라고 한다.
// url에 의해서 호출되는 mapping
// localhost:3000/home요청에 대한 응답
router.get("/", function (req, res) {
  // res.send("home GET mapping");
  res.render("div");
});
// form의 submit에 의해서 호출되는 mapping
router.post("/", function (req, res) {
  res.send("home POST mapping");
});

// router.put()
// router.delete()

// 현재 이파일에서 설정한 router 객체를
// 다른 js 파일에서 import하여 사용할수 있도록 선언
module.exports = router;
