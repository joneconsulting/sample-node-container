const express = require('express');
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
const PORT = 4000;

const helloRouter = require("./routes/hello");

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use("/hello", helloRouter);