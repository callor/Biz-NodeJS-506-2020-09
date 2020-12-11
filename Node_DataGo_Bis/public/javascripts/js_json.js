const jsonData = { name: "홍길동", tel: "010-111-1111", age: 23 };

// json객체의 속성을 이용하여 값 읽기
console.log(jsonData.name);
console.log(jsonData.tel);
console.log(jsonData.age);

// 마치 배열의 값을 읽는 것처럼 사용하는데
// 각 요소를 문자열로 사용여 값 읽기
console.log(jsonData["name"]);
console.log(jsonData["tel"]);
console.log(jsonData["age"]);

// 각 요소를 문자열 변수로 선언한 후
// 변수를 이용하여 값을 읽는 방법
const nameStr = "name";
const telStr = "tel";
const ageStr = "age";
console.log(jsonData[nameStr]);
console.log(jsonData[telStr]);
console.log(jsonData[ageStr]);

const strArray = ["name", "tel", "age"];
strArray.forEach((title) => {
  console.log(jsonData[title]);
});

// {key:value} 형식의 JSON데이터에서 key 부분만
// 추출하여 배열로 만들기
const jsonKey = jsonData.keys();
jsonKey.forEach((key) => {
  console.log(jsonData[key]);
});
