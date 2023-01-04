Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 보안

#### 44 Days

508. 모듈 소개
509. 인증 vs 웹사이트 보안

     - 인증: 익명의 사용자, 사용자를 구분
     - 보안: 권한이 있는 사용자에게 특정 기능 제공 유무, 악의적인 사용자가 수행할 수 있는 공격 및 작업으로 부터의 보호

510. CSRF 공격 이해

     - Cross Site Request Forgery (사이트간 요청 위조)
     - 수행해서는 안되는 작업을 유발하는 요청을 백앤드로 보내는 공격
     - 공식 페이지와 비슷한 모습의 위조 페이지로 사용자의 입력과 다른 값으로 요청을 보냄

511. 'Same-Site' 쿠키로 부분 CSRF 보호하기

     - [참조](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
     - [참조2](https://seob.dev/posts/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%BF%A0%ED%82%A4%EC%99%80-SameSite-%EC%86%8D%EC%84%B1/)

512. 더 나은 CSRF 보호 구현하기

     - [npm i csurf](https://www.npmjs.com/package/csurf)
     - 한번의 요청에서만 사용할 수 있는 서버에서 임의로 생성하는 문자열로 이루어진 토큰을 발행하여 사용자가 서버에 요청시 발행한 토큰을 확인

513. XSS 공격 이해하기

     - Cross Site Scripting
     - 악성 자바 스크립트 코드를 웹사이트에 주입하는것.
     - Ajax 요청등 사용자 인증, 쿠키 및 토큰이 발행된 페이지에서 수행되기 때문에 매우 위험
