// 데이터 광장 주소
// https://www.data.go.kr/data/15051891/openapi.do

async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

const API_KEY = '6f6363784969733237326e61727051';

async function getData() {
  const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/5`;
  const response = await fetch(url);
  const data = await response.json();
  console.log('data', data);
}

getData();
