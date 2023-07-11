
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

// JSON 데이터를 가져와 포스팅 목록을 생성하는 함수
function generatePostList() {
  fetch('/getPosts', headers)
    .then(response => response.json())
    .then(data => {
      const postList = document.getElementById('postList');
      const posts = data.body;
      console.log(data);

      posts.reverse().forEach(post => {
        const li = document.createElement('li');
        //list로 포스팅 목록을 불러오는 부분을 작성하세요
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}


//JSON 데이터를 가져와 시간표 테이블을 만드는 함수
function generateTimetable() {
  fetch('/getTimetable', headers)
    .then(response => response.json())
    .then(data => {
      const timetableList = document.getElementById('timetableList');
      const timetables = data.body;
      console.log(data);

      const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
      const dayOfWeek = daysOfWeek[new Date().getDay()];
      const day = document.createElement('h2');
      day.innerHTML = dayOfWeek;
      timetableList.appendChild(day);

      timetables.forEach(timetable => {
        //오늘 시간표를 불러와 테이블로 만드는 부분을 작성하세요.
      });
    })
    .catch(error => {
      console.error('Error fetching timetable:', error);
    });
}

// 페이지 로드 완료 시 포스팅 목록과 시간표 테이블을 생성
window.addEventListener('load', () => {
  generatePostList();
  generateTimetable();
});
