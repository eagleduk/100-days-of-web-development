Udemy

# 100일 Web Development 부트캠프

[<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/academind/100-days-of-web-development/)

## Ajax & 비동기식 JS 기반 Http 요청

#### [42 Days]

478. 모듈 소개
479. Ajax란? 그리고 왜 필요할까요?
480. 'Ajax'란 무엇입니까?

     > - XMLHttpRequest
     >   > - 브라우저에서 사용할 수 있는 내장 객체
     >   > - Axios
     >   > - XML 형식에서 JSON 형식으로 데이터 형식이 변경됨으로 인해 사용이 줄어듬
     > - fetch
     >   > - 브라우저에서 사용할 수 있는 내장 객체
     >   > - XMLHttpRequest 보다 현대적
     >   > - Promise 지원
     >   > - XMLHttpRequest 보다 사용하기 쉽다.

481. 프로젝트 시작 & 문제
482. Get Ajax 요청 보내기 & 처리
483. 응답을 기반으로 DOM 업데이트
484. POST 요청 데이터 준비
485. POST Ajax 요청 보내기 & 처리

> - 요청하는 데이터가 json 형식인지 파악. `headers` 의 `Content-Type` 으로 파악하고 express 미들웨어에 해당 형식을 추가한다.
>
> ```javascript
> // Content-Type: application/json 형식일 때
> app.use(express.json());
> ```

486. 사용자 경험(UX) 개선
487. 오류 처리(서버 측 & 기술)
