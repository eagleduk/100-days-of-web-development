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
