const express = require("express");

const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
const passportConfig = require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const app = express();

app.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
