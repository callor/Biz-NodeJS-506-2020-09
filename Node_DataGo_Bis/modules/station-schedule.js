/**
 * node-schedule 을 사용하여 일정시간마다
 * 노선정보를 가져와서 DB에 저장하도록 수행할 것
 */
import shedule from "node-schedule";
import request from "request";
import gjDataVO from "../models/GjStation.js";
import {
  DATA_GO_SEVICE_KEY,
  GJ_BUS_STATION_URL,
} from "../modules/Data.go.kr.js";

const execStation = () => {
  // UT-8로 URI encoding을 수행하기
  const goDataServiceKey = encodeURIComponent(DATA_GO_SEVICE_KEY);
  const queryString =
    GJ_BUS_STATION_URL +
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    goDataServiceKey;
  const reqOption = {
    url: queryString,
    method: "GET",
  };

  console.time("Station");
  // request를 통해서 reqOption에 담긴 방식으로
  // 데이터를 요청하면 body에 데이터가 담겨서 사용할 준비가 된다
  request(reqOption, async (err, response, body) => {
    const data = JSON.parse(body);
    const resCode = data.RESULT.RESULT_CODE;
    const resMessage = data.RESULT.RESULT_MSG;
    console.log(resCode, resMessage);

    // 노선정보 데이터 추출
    const station_list = data.STATION_LIST;
    console.log("노선정보 데이터 개수 : ", station_list.length);

    // tbl_gjbus에 담긴 데이터를 모두 지워라
    await gjDataVO.deleteMany().then((result) => console.log("Delete Ok"));
    await gjDataVO
      .insertMany(station_list)
      .then((result) => console.log("DB Insert OK"))
      .catch((error) => console.log("DB Insert Error : ", error));
  });
  console.timeEnd("Station");
};

export const bis_Schedule = () => {
  // cron type 스케쥴러
  // 초 분 시 일 월 요일 단위로 스케줄링을 수행하는 코드
  // 일정한 시간에 execStation 함수를 실행하여
  // openAPI로 부터 데이터를 가져와서 db에 insert 수행할 것이다
  // 매주 일요일(0) 12시 1분 5초에 실행하라
  shedule.scheduleJob("5 1 12 * * 0", execStation);
};

// test를 위해서 app이 실행될때 데이터를 가져오는 함수  export
export const justExec = () => execStation();
