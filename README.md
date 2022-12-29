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

#### 44 Days

502. 쿠키 자세히 살펴보기

     - 개발자가 직접 쿠키에 대해 작업할 필요가 없다.
     - 세션에 저장하면 자동으로 쿠키가 저장되어 사용자의 브라우저에 전달이 된다.
     - 사용자가 서버에 대하여 요청시 전달받은 쿠키를 헤더에 담아서 보내진다.

503. 세션 자세히 알아보기(인증 이상)

     - 페이지를 리 다이렉션할 때, 사용자의 입력값을 유지하고 싶으면 세션을 이용하여 전달할 수 있다.
     - 세션을 저장할 때, 익명 함수에서 `return`을 설정해도 해당 요청에 관하여 함수가 종료되는 부분이 아니기 때문에 중복 요청을 보내는 에러가 발생할 수 있다.

       ```javascript
       req.session.save(function () {
         // 익명 함수에서는 return 을 설정해도 req.session.save 에 대하여 반환될 뿐이다.
         return res.redirect("/admin");
       });
       // "/admin", "/login" 에 대하여 중복 요청을 수행한다.
       return res.redirect("/login");

       req.session.save(function () {
         // 익명 함수에서는 return 을 설정해도 req.session.save 에 대하여 반환될 뿐이다.
         return res.redirect("/admin");
       });
       // 세션을 저장항 이후에 전체 함수에 관하여 종료를 선언한다.
       return;
       // 해당 redirect 가 요청되가 전에 함수가 종료됨으로 중복 요청이 이루어 지지 않는다.
       return res.redirect("/login");
       ```

     - 세션을 이용하여 사용자 입력값을 전달 후에는 전달된 세션값을 이용하는 구간에서 값을 추출하고 해당 입력값에 대한 세션을 초기화 해주어야 한다.

504. 권한 부여 vs 인증

     - 인증: 자격증명을 사용하여 가입 및 로그인하는 거소가 제한된 리소스 및 페이지에 관한 엑세스 권한을 사용자에게 부여하기 위해 세션에 데이터를 저장

     - 권한 부여: 권한 부여를 통해 사용자가 수행할 수 있는 작업 또는 사용자가 인증된 경우에도 방문할 수 있는 페이지 제한

505. 세션 연습 & 세션 작업
506. 맞춤형 미들웨어 작성 & 'res.locals' 사용
     - res.locals: 현재 처리중인 요청내 템플릿에서 사용할 수 있는 전역 변수
     - router 전의 미들웨어에서 res.locals 를 사용하여 사용자 인증 및 권한을 검사하면 해당 요청 및 템플릿에서 전역변수로 인증 및 권한을 사용할 수 있다.
     - 미들웨어에서 로직을 수행하고 다음으로 넘어가기 위해서는 `next()` 함수를 수행해야 한다.
