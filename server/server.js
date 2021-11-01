const express = require("express");
const app = express();
const cors = require("cors");
const client_id = "pBvWS88MLAIzeY4ipPMo";
const client_secret = "SXTgCmDVdF";
app.use(cors());

app.get("/search/movie", function (req, res) {
  const api_url =
    "https://openapi.naver.com/v1/search/movie?display=100&query=" +
    encodeURI(req.query.query); // json 결과
  const request = require("request");
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 응답 성공 시
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      // 응답 실패 시
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
