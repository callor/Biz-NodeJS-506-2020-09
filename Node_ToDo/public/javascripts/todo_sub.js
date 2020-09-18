document.addEventListener("DOMContentLoaded", function () {
  // 서버로 부터 되돌려 받은 데이터가 있으면
  // JSON객체 변환하여 todo_list 배열에 추가하라

  if (todo_data) {
    let todo_json = JSON.parse(todo_data);
    console.log(todo_json.todo);
    todo_list.push(todo_json);
  }

  // todo_list 배열에 데이터가 있으면 localStorage에 저장하기
  if (todo_list.length > 0) {
    console.log(todo_list);
    localStorage.setItem("todo_list", JSON.stringify(todo_list));

    // todo_list 배열을 반복문으로 순회하라
    // 각각의 아템을 todo 라는 이름을 익명함수에 주입하라
    todo_list.forEach(function (todo) {
      let ul_todo_list = document.querySelector("#todo_list");
      let li_todo_data = document.createElement("li");
      let li_todo_text = document.createTextNode(todo.todo);
      li_todo_data.appendChild(li_todo_text);
      ul_todo_list.appendChild(li_todo_data);
    });
  }

  var count = 0;
  document.querySelector("#btn-new").addEventListener("click", function () {
    // ul tag selector
    let ul_todo_list = document.querySelector("#todo_list");
    let li_todo_data = document.createElement("li");
    let li_todo_text = document.createTextNode(++count + ". 오늘할일");
    li_todo_data.appendChild(li_todo_text);
    ul_todo_list.appendChild(li_todo_data);
  });
});
