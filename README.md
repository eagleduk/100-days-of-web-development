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
