/*
바닐라 JS 코딩
Jquery등 front 라이브러리, 프레임워크를 사용하지 않고
순수 JS 를 활용한 코딩
*/
var todo_list = [];
// 페이지가 새로 시작되면 localStorage로 부터 데이터 읽어오기
let todo_list_store = localStorage.getItem("todo_list");
if (todo_list_store) {
  // localStorage에서 가져온 데이터가 있으면 JSON 형태로 변경하여
  // todo_list에 저장하라
  todo_list = JSON.parse(todo_list_store);
}
// localStorage의 todo_list 데이터가 있으면
// 그 데이터는 todo_list 배열에 담겨 있을 것이고
// 그렇지 않으면 배열은 비어있는 상태가 된다

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input");
    todo_input = document.querySelector(
      "section.todo_main form input[name='todo']"
    );

    let todo_value = todo_input.value;

    if (todo_value === "") {
      alert("할일은 반드시 입력하세요");
      document.querySelectorAll("input")[0].focus();
      document
        .querySelector("section.todo_main form input[name='todo']")
        .focus();
      return false;
    }

    if (confirm("저장할까요?")) {
      document.querySelector("form").submit();
    }
  });
});
