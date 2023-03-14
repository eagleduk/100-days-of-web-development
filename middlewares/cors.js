function allowCORS(req, res, next) {
  // 허용하는 상대의 도메인 주소
  res.setHeader("Access-Control-Allow-Origin", "*");

  // 허용하는 REST API의 메소드 타입
  // 실질적인 클라이언트의 요청 전, OPTIONS 메서드를 통해 발생한다.
  // 실질적인 요청 전 OPTIONS 메소드를 통해 사전에 요청이 안전한지 확인하는 방법이다.
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PATCH,OPTIONS"
  );

  // 허용하는 REST API의 헤더 키
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}

module.exports = allowCORS;
