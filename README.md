Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## 웹 서비스 & 사용자 지정(REST) API 구축

616. 모듈 소개
617. API & 서비스: 무엇과 왜?
618. JS 패키지 & URL 기반 API: 여기에서 구축할 것
     - JS 패키지: npm 및 library 기반
     - API: URL 기반
619. API vs "전동적인 웹 사이트"
620. REST API 소개

     - 엔트 포인트(REST API URL) 에서는 이미 무슨일이 일어날지에 대한 단서, 추측이 가능해야 한다.

     - SOAP API
     - GraphGL API: 페이스북에서 개발한 패턴

621. 첫 번째 기본 REST API 구축

     - 우리가 얻고 사용하는 데이터와 다시 보내는 데이터에 관한 기능

622. API 향상 & 더 현실감 있게 만들기

     - Database(mongoDB) 에 저장된 languages 랜덤 뽑기

623. 더 복잡한 REST API: 첫번째 단계

     - todo 데이터(CRUD) get, post, patch, delete

624. 첫 번째 API 엔드포이트 완료
625. Postman으로 API 테스트
626. PATH & DELETE 경로/엔드포인트 추가
627. 분리된 프런트엔드 웹 사이트(SPA) 추가
628. 분리된 프런트엔드/SPA 를 사용하는 이유는 무엇일까요
629. CORS 오류 이해하기

     - 교차 출처 리소스 공유
     - 도메인을 의미하는 어떤 출처가 서버에서 제공하는 리소스에 엑세스 할 수 있는지 서버가 표시할 수 있도록 하는 브라우저 메커니즘
     - 사이트를 구축하는 경우에 다른 사이트에서 사용하기 위해 API와 서비스를 잠금해제 하지 않는 한 다른 사용자와 다른 개발자가 제공하는 웹 API 또는 서비스를 사용할 수 없다.
     - 백엑드에서 변경 가능
     - 브라우저에서 다른 사이트가 해당 개발자의 허가없이 다른 개발자의 API 사용을 시작할 수 없도록 보장하기 때문
     - 다른 응답헤더를 설정해야만 변경 가능

     > 1. Access-Control-Allow-Origin: 허용하고자 하는 도메인
     > 2. Access-Control-Allow-Methods: [GET],[POST],[PATCH] 등 허용하려는 HTTP 메서드 설정
     > 3. Access-Control-Allow-Headers: 기본 헤더 외에 백엔드에서 허용하려는 추가 헤더 키

630. CORS 오류 수정 & 프런트엔드 SPA를 REST API에 연결하기
