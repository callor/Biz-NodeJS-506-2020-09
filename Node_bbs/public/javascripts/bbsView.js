$(function () {
  // class 가 view-btn인 버튼이 클릭되면
  $("button.view-btn").click(function () {
    // 클릭된 버튼의 text(문자열)을 추출
    let text = $(this).text();

    let id = $(this).data("id");
    // jquery버전이 낮은경우 data() 함수가 작동이 안되는 경우가 있다.
    // 그때는 아래와 같은 방법으로 id값을 추출한다.
    // let id = $(this).attr("data-id")

    // text문자열에 따라 각각 버튼의 역할 수행을 하도록
    if (text === "본문수정") {
      document.location.href = "/bbs/update/" + id;
    } else if (text === "삭제") {
      if (confirm("정말 삭제할까요")) {
        // 삭제가 완료된후 브라우저의 뒤로가기 버튼을 클릭했을때
        // 이미 삭제된 데이터가 다시 보이는 것을 방지하기 위해서
        document.location.replace("/bbs/delete/" + id);
      }
    } else if (text === "목록으로") {
      document.location.href = "/bbs/list";
    }
  });
});
