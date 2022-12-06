Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.
com/academind/100-days-of-web-development/)

## 노드 JS소개 - 백엔드 개발 시작하기

#### 35 Days

343. 모듈 소개
344. 노드JS 솔치
345. 노드JS 코드 실행
346. 사용자 지정 노드JS 서버생성
347. 요청 처리 & 맞춤 응답 생성
348. 더 많은 서버 측 적업 수행

- 퀴즈 11: Learning Check: NodeJS Basics

349. 요약

## 익스프레스 JS로 노드 JS 향상

#### 36 Days

350. 모듈 소개
351. 'npm'으로 익스프레스 설치
352. 익스프레스 & 처리요청 + 응답으로 서버 만들기
353. 익스프레스로 사용자 데이터 구문 분석

     > 입력양식(`form[method=POST]`) 으로 데이터를 받을시, 기본적으로는 TEXT 방식으로 넘어오기 떄문에, express 미들웨어를 사용하여 데이터를 구분 분석 및 변환을 진행해 주어야 한다.
     >
     > ```javascript
     > app.use(express.urlencoded({ extended: true }));
     > ```

354. (서버측) 파일에 데이터 저장
     > node 에서 기본적인 파일 읽기, 쓰기 및 경로 관련 모듈
     >
     > - [FileSystem](https://nodejs.org/docs/latest-v16.x/api/fs.html)
     > - [path](https://nodejs.org/docs/latest-v16.x/api/path.html)
     >
     > ```javascript
     > require("fs"); // fileSystem 관련된 모듈
     > require("path"); // 파일 경로에 관련된 모듈
     > __dirname; // node 에서 제공하는 실제 실행되는 파일의 절대 경로
     > ```
355. '제이슨'형식에 대한 추가 정보
356. 파일 데이터 읽기 & 동적 응답 반환(동적 HTML 코드)
357. '노드몬'으로 개발자 워크플로 향상
358. 요약

- 퀴즈12: Learning Check: ExpressJS Basics
