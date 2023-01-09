Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 좋은 코드 작성, 리팩토링 & MVC 패턴

#### 45 Days

520. 모듈 소개
521. 우리의 시작 프로젝트(심층 분석)
522. 코드에 문제가 있으신가요?
523. 루트 분할
524. 구성 설정 추출하기
525. 사용자 지정 미들웨어 추출하기
526. MVC 패턴 소개

- 수신요청을 처리하고 응답을 다시 보내는데 관련된 기본 코드를 세가지 주요 영역으로 분할

- Model

  > 데이터 소스 작업과 관련된 모든 논리에 관한것
  >
  > 데이터 베이스 관련 논리

- View

  > 컨텐츠를 사용자에게 제공하기 위한 논리를 포함
  >
  > 템플릿(ejs, pug)

- Controller

  > 모델을 뷰에 연결하기 위한 논리를 포함
  >
  > 모델에 데이터를 가져오도록 지시
  >
  > 가져온 데이터를 뷰로 전달
  >
  > 일반적으로 라우트가 트리거될 때 실행되는 기능

527. 첫 번째 모델 만들기
528. 모델에 업데이트 & 삭제 기능 추가
529. 모델에 가져오기 기능 추가


    - class <strong>static</strong> 메소드: 인스턴스한 객체에서 호출하지 않고 클래스 자체에서 호출

530. 첫 번째 컨트롤러 & 컨트롤러 작업 추가
531. 세션 & 입력 유효성 검사 오류 기능 리팩토링
532. CSRF 토큰 처리 리팩토링

#### 45 Days

533. '인증' 기능을 MVC로 마이그레이션
534. 비동기식 오류 처리 개선


    - 비동기식을 이용한 저장된 데이터 베이스에서 데이터를 가져올 때 에러가 발생하면 express 에러에 도달하지 못하고 중간에서 끊긴다. 따라서 Promise 에서 에러 처리를 해준다.

535. 사용자 지정 미들웨어로 경로 보호

- 라우터 전체에 미들웨어를 추가 하고 싶으면 `express` 자체에 추가

```javascript
const app = express();
app.use([AllMiddleware]);
```

- 원하는 라우터에 추가하고 싶으면 `get` , `post` 함수에 추가

```javascript
app.get("/", [Middleware], function (req, res, next) {});
app.post("/", [Middleware], function (req, res, next) {});
```

- 원하는 라우터 그룹에 추가하고 싶으면 라우터 자체에 추가

```javascript
router.use([GroupMiddleware]); // 이후의 라우터 전체에 'GroupMiddleware' 미들웨어가 추가된다.
router.get("/", function (req, res, next) {});
router.post("/", function (req, res, next) {});
```

- 퀴즈 24: Learning Check: Refactoring & MVC
