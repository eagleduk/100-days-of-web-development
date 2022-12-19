Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 더 많은 익스프레스: 템플릿을 사용한 정적 & 동적 콘텐츠(EJS)

#### 37 Days

359. 모듈 소개
360. 시작 프로젝트 만들기 & 변경해야 할 사항
361. 기본 익스프레스 앱 설정(연습 포함)
362. 노드 & 익스프레스로 HTML 파일 제공
363. 정적 파일 제공(CSS & 자바 스크립트)

     > - 사용자에 의해 변경되지 않는 파일(style, javascript) 등을 요청하면 정의된 주소에서 해당 파일을 검색한다.
     > - express 에서 기본으로 제공하는 미들웨어를 사용 하여 주소를 정의해 준다.
     >
     > ```javascript
     > app.use(express.static("[정적 파일 제공 Baes URL]"));
     > ```

364. 양식 데이터 구문 분석 & 요청 리다이렉트
365. ejs 템플릿 엔진 추가

     > - [npm install ejs](https://ejs.co/)
     > - 엔진이 사용할 기본 폴더를 설정해 주어야 한다.
     > - express 미들웨어를 통하여 사용할 템플릿 엔진을 설정해 주어야 한다.
     > - 엔진에 맞는 파일로 확장자 변경(ejs -> _.ejs, pug -> _.pug)
     > - 템플릿 엔진을 사용할 경우, response.render 함수로 해당 템플릿을 응답 객체에 넣어 준다.
     >
     > ```javascript
     > app.set("views", path.join(__dirname, "views")); // 템플릿 엔진의 기본이 되는 위치를 설정
     > app.set("view engine", "ejs"); // 사용할 템플릿 엔진 설정
     >
     > res.render("index"); // index.ejs 를 화면에 그려준다.
     > ```

366. 템플릿으로 동적 콘텐츠 렌더링
367. EJS & 반복문으로 반복 콘텐츠 출력하기

     > EJS 에서 제공하는 특수 태그
     >
     > - <% 'Scriptlet' tag, for control-flow, no output
     > - <%\_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
     > - <%= Outputs the value into the template (HTML escaped)
     > - <%- Outputs the unescaped value into the template
     > - <%# Comment tag, no execution, no output
     > - <%% Outputs a literal '<%'
     > - %> Plain ending tag
     > - -%> Trim-mode ('newline slurp') tag, trims following newline
     > - \_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

368. 조건부 콘텐츠 렌더링
369. 일부 콘텐츠 포함
370. EJS & IDE 지원
371. 모듈 요약

- 퀴즈 13: Learning Check: Static & Dynamic Content

## 동적 라우트(URL), 오류 & 관리 처리하기 더 큰 Express 프로젝트

#### 38 Days

372. 모듈 소개
373. 동적 경록 소개
374. 고유 ID로 데이터 관리
     > - [npm install uuid](https://github.com/uuidjs/uuid)
375. 세부 데이터 로드 & 표시
376. '찾을 수 없음' 사례에 대한 404 페이지 표시
377. 추가 404 페이지 사용(존재하지 않는 경로)
378. 서버측 오류 처리(500 상태 코드)
379. 상태 코드 작업
380. 코드 리팩토링 & 더 많은 기능 추가
381. 노드 JS에서 코드 가져오기 & 내보내기
382. 익스프레스 라우터를 사용해서 라우트 구성 분할
