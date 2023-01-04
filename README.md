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

514. XSS 공격으로부터 보호

     1. 이스케이프된 사용자 컨텐츠 출력

        - 원시 HTML 코드를 원시 텍스트로 처리 => 템플릿 엔진을 사용하는 경우 템플릿 엔진 자체적으로 이스케이프 처리를 할 수 있다.

     2. 사용자 입력을 처리하거나 저장하기 전에 처리

        - express snitize user input
        - [npm i xss](https://www.npmjs.com/package/xss)
        - html 에서 사용되는 특수문자를 이스케이프 문자로 변경해서 데이터화 한다.(eg. `<` => \&lt;, `>` => \&gt; 등)

     3. 두 가지 보호 방법을 동시에 사용하면 버그가 발생 할 수 있다. 출력을 이스케이프화를 우선적으로 수행

515. SQL 주입 공격 이해하기

     - 데이터를 삭제 또는 변형 시키는 SQL 문은 입력하여 실행 시킨다. 보통 SQL 문을 사용하는 서버에서 사용

516. SQL 주입 공격으로부터 보호

     - 실행하려는 SQL문을 이스케이프 처리

517. NoSQL 주입에 대해 한마디 하기

     - NoSQL 을 사용하는 경우에서는 직접 SQL 문을 작성하지 않고 메소드를 이용하여 고급 쿼리를 구현하기 때문에 보호 기능이 뛰어나다

518. 모듈 요약

     - <strong> 사용자의 입력을 신뢰해서는 안된다. </strong>
     - <strong> CSRF 토큰을 모든 양식 페이지에 추가 </strong>

519. 실수로 서버 측 코드 또는 데이터를 노출하지 마십시오!

     - 정적으로 제공되어서는 안되는 폴더를 제공
     - 방문자에게 원시 오류 메세지 전송
