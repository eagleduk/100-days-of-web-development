Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 마일스톤 프로젝트: 완전한 온라인 상점(처음부터 끝까지!)

536. 모듈 소개
537. 프로젝트 계획

```
= Structure =
    FrontEnd                         BackEnd
(HTML, CSS, JS)             (NodeJS, Express, MongoDB)
        |                               |
        |-          Customer           -|
        |-           Admin             -|
```

```
= Views =
    Customer                                                    Admin
                            == Login    == SignUp
    - All Products                                              - DashBoard
    - Product Detail                                            - All Products
    - Shopping Cart                                             - New Product
    - All Order For Customer                                    - Update Product
                                                                - All Orders
```

```
= Models =
Users: email, password, isAdmin, address, name
Product: name, summary, price, description, image
Cart: Items, total price, number of items
Orders: User data, Product | Cart data, date, status
```

538. 여러분의 챌린지!
539. 과정 프로젝트 설정

     - node init
     - express
     - nodemon

540. 폴더, 파일 및 첫번째 경로 만들기

     - 회원가입
     - 로그인

541. EJS & 첫 번째 보기 추가
542. 첫 번째 보기 채우기 & 렌더링
543. 기본 CSS 파일 & 정적 파일 추가
544. CSS 변수 추가 & 웹사이트 테마
545. 웹사이트를 위한 더 많은 기본 CSS 스타일

     - bcryptjs
     - mongodb

546. 첫 번째 양식 요소 스타일링
547. 몽고DB 데이터베이스 서버 및 연결 추가
548. 사용자 가입 추가
549. 보안 시간: CSRF 보호 추가
550. 오류 처리 미들웨어로 적절한 오류 처리 구현
551. 세션 소개 & 세션 구성
552. 인증 & 사용자 로그인 구현
553. 인증 완료 & 인증 상태 확인

     - express-mongodb-session
     - express-session

554. 로그아웃 기능 추가
555. 비동기 코드의 오류 처리
556. 사용자 입력 검증 추가
557. 플래싱 오류 & 세션에 데이터 입력
