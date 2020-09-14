/*
Router : 경로설정
  spring : Controller 클래스로 선언
  spring에서 Controller가 하는일과 유사한 기능을 수행한다
  client 의 req 요청 주소를 분석하여 적절한 요청을 수행하고
  응답을 수행하는 역할
*/
var express = require("express");
var router = express.Router();

/* GET home page. */
// localhost:3000/ 를 GET 방식으로 요청을하면
// function() 함수를 실행하라
// router.get() 콜백함수, 함수
// function(req,res) {  }
// req(request) : client(web browser)가 요청하는 여러가지 정보를 담고와서
//    서버에 전달해주는 역할 수행
// res(response) : 서버가 client에게 응답하는 것들이 담겨있다
router.get("/", function (req, res, next) {
  // views/index.pug파일을 읽어서 rendering 한 후
  // client에게 응답하라
  // title이라는 변수에 Express라는 문자열을 담고
  // rendering할때 index.pug에게 전달하라
  res.render("index", { title: "대한민국" });
});

// localhost:3000/home 으로 요청을 하면
router.get("/home/index", function (req, res) {
  // 순수한 문자열을 client에게 전달하라
  res.send("우리나라만세");
});

router.get("/add", function (req, res) {
  // req.query
  // ?변수=값 형태로 전달된 값을 추출하기
  let num1 = parseInt(req.query.num1) || 30;

  // client에서 num2라는 query변수에 값이 담겨오면
  // 그 값을 정수로 바꾸어서 num2에 저장하고
  // 그렇지 않으면 num2에 정수 40을 저장하라
  let num2 = parseInt(req.query.num2) || 40;

  let sum = num1 + num2;
  res.send(sum + ""); // 숫자값을 문자열화
});

// 주소값에 :문자열 => Client에서 수신하는 변수
// localhost:3000/add/숫자1/숫자2 라고 요청을 하면
// 숫자1에 있는 값을 추출, 숫자2에 있는 값을 추출하여
// 정수로 변환한 다음 덧셈하여 결과를 response 하라
router.get("/add/:num1/:num2", function (req, res) {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  let sum = num1 + num2;
  res.send(sum + "");
});

// form에서 input 주소로 데이터를 보내오면
router.post("/input", function (req, res) {
  let m_user = req.body.m_user;
  res.send("전송된 user :" + m_user);
});

module.exports = router;
