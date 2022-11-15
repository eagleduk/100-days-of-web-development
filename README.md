Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 고급 자바 스크립트: DOM을 사용한 작업

#### 29 Days

257. 모듈 소개
258. 시작 설정하기
259. 전역 'window' & 'document' 객체
260. 'DOM' 이란 무엇일까
261. DOM 탐색
262. HTML 요소 선택 & 변경을 위한 DOM 드릴링
263. 스크립트를 올바르게 로드하기

     - HTML의 body가 분석되기 전에 script 에서 DOM 객체를 읽으려고 하면 에러가 발생.
     - 해결방법으로는
       > 1. body의 최하단에 script 작성
       > 2. script 태그에 `defer(전체 문서(document 객체)가 분석이 끝날때 까지 스크립트 실행을 지연시키는 속성)` 을 사용한다.

264. DOM 트리 & DOM 탐색
265. DOM 드릴링 & 텍스트 노드 탐색
266. DOM 드릴링 제한
267. DOM에서 요소 검색하기
268. 요소 쿼리
269. 일반적인 쿼리 메서드

     > - `document.getElementById('some-id')`: ID로 HTML 요소 선택(ID는 고유해야 하므로 하나의 요소만 선택)
     > - `document.querySelector('<some-css-selector>')`: 제공된 CSS 선택자에 의해 충족/선택된 첫 번째 일치(!) HTML 요소를 선택합니다. CSS 선택자는 기본적으로 모든 종류의 유효한 CSS 선택자(예: ID 선택자, 태그 유형 선택자, 클래스 선택자, 결합 선택자 등)일 수 있습니다.
     > - `document.querySelectorAll('<some-css-selector>')`: 제공된 CSS 선택자에 의해 충족/선택된 일치하는 모든 HTML 요소를 선택합니다.
     > - `document.getElementsByClassName('some-css-class')`: 제공된 CSS 클래스가 있는 모든 HTML 요소를 선택합니다.
     > - `document.getElementsByTagName('tag')`: 제공된 HTML 태그 유형의 모든 HTML 요소를 선택합니다.

270. 연습 시간: 문제

     1. h1 요소 선택 후 변수 저장
     2. (1) 변수에서 부모 요소 접근
        > - BONUS: 형제 요소 접근
     3. h1 ID로 선택
     4. 두번쨰 p 태그 선택 후 변수에 저장
     5. (4) 텍스트 변경

271. 연습 시간:솔루션

#### 30 Days

272. 다음 단계
273. 자바 스크립트를 통해 새 HTML 요소 삽입
274. DOM 요소 삭제
275. 기존 요소 이동
276. 'innerHTML' 작업
