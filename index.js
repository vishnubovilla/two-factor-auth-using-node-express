// https://www.youtube.com/watch?v=SBsx4Lhfw9s
// https://learn.vonage.com/blog/2020/07/17/how-to-add-two-factor-authentication-with-node-js-and-express/

const app = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const Nexmo = require("nexmo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
nunjucks.configure("views", { express: app });

const nexmo = new Nexmo({
  apiKey: "API-KEY-FROM-DASHBOARD",
  apiSecret: "API-SECRET-FROM-DASHBOARD",
});

//Other code will go here
app.get("/get", (request, response) => {
  response.render("index.html", { message: "Hello World" });
});

app.listen(3000);
