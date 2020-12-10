# nodejs 대한민국 공공 DB Open API 프로젝트

## nodejs + express + request + node-schedule + mongoose

- 공공DB에서 광주광역시 버스노선을 가져와서 mongoDB에 저장하기
- 검색어를 통해 버스정류장 검색하여 리스트를 보여주
- 정류장을 클릭하면 도착정보를 보여주기

## ES6+ (ECMASCRIPT 2016+) 문법으로 코딩

- nodejs 기본적으로 CommonJS 문법을 사용한다.
- nodejs에서 ES6+ 문법을 사용하기 위하여 babel, webpack등의  
  여러가지 도구를 사용하여 문법을 구현했는데,  
  이방식은 babel, webpack등을 설치하는 절차가 까다로워 어려움을 겪었다
- nodejs 12버전에서 ES6+ 문법을 사용할수 있는 방법이 공식적으로  
  도입되고 13버전 이상에서는 매우 쉽게 사용할수 있게 되었다.
- 14.x 이상에서는 package.json 파일에 한가지만 설정하면 ES6+문법을  
  자유롭게 사용할수 있다.
- 단 일부 module이나 시스템 변수들이 아직 완전하게 작동하지는 않는다.

## ES6+ 프로젝트로 변경하기

1. package.json의 상단 property에 "type": "module", 항목을 추가한다.
2. bin/www 파일을 bin/www.js로 확장자명 추가
3. var 변수 = requrire("모듈") 형식으로 된 import 문장을  
   import 변수 from "모듈"로 변경한다.
4. var로 선언된 변수들을 const, let로 변경하여 선언 한다.
5. 각 사용자 모듈의 module.exports = 모듈명; 를  
   export default 모듈명으로 변경한다.

6. app.js 파일에 보면 **dirName, **fileName 과 같은 시스템변수는  
   현재 ES6+에서 지원하지 않으므로 다른 방식으로 사용해야 한다.  
   app.set("views", path.join('\_\_dirName', "views"))을
   app.set("views", path.join("./views")) 으로 변경한다
