Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 사용자 인증 & 세션 작업

#### 43 Days

490. 모듈 소개
491. '인증'이란 무엇이며 웹 사이트에 추가하고 싶은 이유는 무엇일까요?
492. 우리의 프로젝트 시작하기
493. 기본 가입 기능 추가
494. 꼭 해야할 일: 비밀번호 해싱하기

     - [npm i bcryptjs](https://github.com/dcodeIO/bcrypt.js)

495. 사용자 로그인 기능 추가
496. 가입 정보 유효성 검사하기
497. 세션 & 쿠키 소개 - 인증의 시작

     - 세션
       > - 사용자에 대한 정보를 데이터로 저장
       > - 인증 전용으로 사용되지만은 않는다.
       >   세션에 모든 종류의 데이터를 저장 가능하다.
     - 쿠키
       > - 서버에 저장된 세션에 대한 정보를 사용자의 브라우저에 저장
       > - 사용자 추적 및 광고에 사용
       > - 실생활에서의 "티켓" 과 유사한 개념

498. 웹사이트에 세션 지원 추가

     - Express Session

       > - [npm i express-session](https://github.com/expressjs/session)
       >
       > ```javascript
       > const express = require("express");
       > const session = require("express-session");
       >
       > const app = express();
       >
       > app.use(
       >   session({
       >     secret: "string", // 필수옵션. 세션 ID 쿠키에 서명하는 데 사용되는 임의의 문자열
       >     resave: true || false, // 세션의 데이터가 실제로 변경된 경우에만 데이터베이스에서 업데이트 유무
       >     saveUninitialized: true || false, // 세션이 저장되는 데이터에 관하여 초기화 유무
       >     store, // 세션 데이터가 실제로 저장되어야 하는 위치 (https://github.com/expressjs/session#compatible-session-stores 참조)
       >   })
       > );
       > ```

     - MongoDB Session

       > - [npm i connect-mongo](https://github.com/jdesboeufs/connect-mongo)
       > - [npm i connect-mongodb-session](https://github.com/mongodb-js/connect-mongodb-session): 경량화 버전
       >
       > ```javascript
       > const express = require("express");
       > const session = require("express-session");
       > const mongoDBSession = require("connect-mongodb-session");
       >
       > const MongoDBStore = mongoDBSession(session);
       >
       > const store = new MongoDBStore({
       >   uri: "mongodb://localhost:27017/connect_mongodb_session_test",
       >   databaseName: "myDb",
       >   collection: "mySessions",
       > });
       > const app = express();
       > app.use({
       >   store: store,
       > });
       > ```

499. 세션에 인증 데이터 저장
     > ```javascript
     > req.session.user = { id: existUser._id, email: existUser.email }; // 세션에 저장할 user 객체
     > req.session.save(function () {
     >   // 세션의 저장이 끝나고 수행하는 Callback
     >   res.redirect("/admin");
     > }); // 데이터베이스에 session 데이터를 저장한다.
     > ```
500. 엑세스 제어를 위한 세션 & 쿠키 사용
501. 로그아웃 기능 추가하기
     > ```javascript
     > req.session.user = null; // 세션에 저장할 user 객체를 지운다. 단. session 에 대한 데이터베이스는 지우지 않는다.
     > req.session.destory(function () {
     >   // 세션의 삭제가 끝나고 수행하는 Callback
     >   res.redirect("/");
     > }); // 데이터베이스에 저장된 session 데이터를 지운다.
     > ```
