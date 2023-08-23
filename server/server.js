const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/src/App.js'));
});

app.get('*', (res, req) => {
  req.sendFile(path.join(__dirname, '/src/App.js'));
});

http.listen(5000, () => {
  console.log("Listening on 5000");
});
