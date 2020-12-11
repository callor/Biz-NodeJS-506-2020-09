document.addEventListener("DOMContentLoaded", () => {
  // 정류장 리스트 테이블
  const station_list = document.querySelector("table.station-list");
  station_list.addEventListener("click", (e) => {});
  //1. table이 클릭되면
  station_list.onclick = (e) => {
    /**
     * table에 event핸들링을 설정했는데
     * 실제 클릭을 했을때 최종적으로 event를 발생시키는 tag는 TD이다
     * 따라서 onclick(e)의 매개변수인 e 는 table이 아닌 TD의 정보가
     * 담겨 있게 된다.
     * e(TD) 로부터 자신의 부모(closest())를 검색하여 TR이 있으면
     * TR tag에 설정된 속성중 data-id값을 추출하여 변수에 담는다
     */
    const busstop_id = e.target.closest("TR").dataset.id;
    // alert(busstop_id);
    // localhost:3000/bis/busstop/111
    fetch(`/bis/busstop/${busstop_id}`)
      .then((result) => {
        return result.json();
      })
      .then((list) => {
        // 서버에서 전달받은 데이터뭉치에서 LIST정보 추출
        const busstop_list = list.BUSSTOP_LIST;

        // 각 버스도착정보중에 필요한 칼럼이름을 배열로 선언
        const stopTitleArray = [
          "LINE_NAME", // 버스노선번호
          "BUSSTOP_NAME", // 정류장이름
          "REMAIN_MIN", // 남은 시간
          "REMAIN_STOP", // 남은 정류장
        ];

        // 수신받은 데이터 리스트를 사용하여
        // <tr><td>...</tr>구조의 HTML을 생성하기

        // 2. busstop_list를 map으로 순회하면서
        //      각 요소를 busstop에 담아 내부로 전달
        const tr_list = busstop_list.map((busstop) => {
          // 3. 칼럼이름이 담긴 배열을 map으로 순회하면서
          //        busstop에 담긴 json데이터중
          //        필요한 요소만 추출하여 td로 생성
          // 원하는 칼럼으로 td만들기
          const td_list = stopTitleArray.map((title) => {
            const td = document.createElement("TD");
            let textContent = busstop[title];

            textContent += title == "REMAIN_MIN" ? "분" : "";
            textContent += title == "REMAIN_STOP" ? " 번째전" : "";
            td.textContent = textContent;
            return td;
          });
          const tr = document.createElement("TR");

          tr.append(...td_list);
          console.log(tr);
          return tr;
        });
        document.querySelector("table.busstop-list tbody").innerHTML = "";
        document.querySelector("table.busstop-list tbody").append(...tr_list);
      })
      .catch((err) => alert("서버 통신 오류발생"));
  };
});
