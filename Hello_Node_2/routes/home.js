// express Routing
//1. express 프레임워크 import
var express = require("express");
//2. express 프레임워크를 사용하여 router객체 생성
var router = express.Router();

// get("/") 는 app.js에서 Router로 설정한 주소와
// 합성되어 실제 요청 주소가 된다.
// @RequestMapping으로 설정되는 URL들
router.get("/", function (req, res) {
  res.send("Home GET Mapping");
});
// home/my
router.get("/my", function (req, res) {
  // res.send("My GET Mapping");
  res.render("home");
});

/*
client에서 서버로 request를 수행할때
변수에 값을 담아서 보내는 방법

1. 보안적 측면, 내용적 측면에서 매우 좋은 방법
form, input을 이용하여 데이터를 담아서 보내는 방법

2. 간단한 데이터를 서버로 보내고자 할때
query문자열로 만들어서 보내는 방법
http://localhost:3000/url?변수1=값&변수2=값&변수3=값
가. 전체 query문자열이 255자를 넘어가면 데이터가 잘린다
나. 데이터가 주소창에 노출되어 보안에 취약하다.
다. 서버로 전송되는 변수이름이 노출되어 보안에 취약하다.

3. RestFull(Representation State Transfer) 방식
최근에 web 어플리케이션에서 사용되는 데이터 전송방식
간단한 데이터를 서버로 보낼때 query문자열을 대체하는 방법
params 주소사용
http://localhost:3000/input/30/40/50 이런 주소를 서버로 전송하면
~/input/까지는 url로 인식되고 이후의 30, 40, 50이라는 값은
params변수에 담아서 서버에서 사용할수 있도록 하는 체계
*/

// client에서 input 주소뒤에 어떤문자열을 포함하면
// nation이라는 변수에 받아서서 처리할 수 있다.
router.get("/input/:nation", function (req, res) {
  let nation = req.params.nation;
  res.send(nation);
});

router.get("/input", function (req, res) {
  let nation = req.query.nation;
  res.send(nation);
});

router.post("/input", function (req, res) {
  // res.send("INPUT POST Mapping");
  let m_user = req.body.m_user;
  // res.send("입력한 user : " + m_user);
  res.render("home", { m_user: m_user });
});

router.post("/", function (req, res) {
  res.send("Home POST Mapping");
});

router.get("/list", function (req, res) {
  // 비어있는 배열 list
  let list = [];

  // list배열에 json객체를 추가하기
  list.push({ name: "홍길동" });
  list.push({ name: "이몽룡" });
  list.push({ name: "성춘향" });
  list.push({ name: "장보고" });
  list.push({ name: "임꺽정" });

  res.render("list", { list: list });
});

// express를 사용한 router 설정객체를
// app.js 에서 import하여 사용할수 있도록 내보내기 기능
module.exports = router;
