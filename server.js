var express = require("express"),
  path = require("path"),
  session = require("express-session");
(flash = require("express-flash")),
  (methodOverride = require("method-override")),
  (app = express()),
  (con = require("./config/db.js")),
  (expressValidator = require("express-validator"));

const pembelianController = require("./controller/pembelianController");

/*Set EJS template Engine*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// connecting route to database
app.use(function (req, res, next) {
  req.con = con;
  next();
});

//RESTful route
var router = express.Router();

// parsing body request
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride("_method"));
app.use(session({ secret: "secretpass123456" }));
app.use(flash());

// include router
const pembelianRouter = require("./routes/pembelianRouter");

//now we need to apply our router here
app.use("/api", router);
app.get("/", function (req, res) {
  res.render("index", { name: "Home" });
});

// routing
app.use("/pembelian", pembelianRouter);

//start Server
var server = app.listen(3000, function () {
  console.log("Listening to port %s", server.address().port);
});
