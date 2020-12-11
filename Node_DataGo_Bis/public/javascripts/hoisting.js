console.log(a);
var a = 3;

console.log(b);
let b = 10;

ex();
function ex() {
  console.log("여기는  ex 함수");
}

ex1();
const ex1 = function () {
  console.log("여기는 ex1함수");
};
ex1();

const ex2 = () => {
  console.log("여기는 ex2");
};
ex2();
