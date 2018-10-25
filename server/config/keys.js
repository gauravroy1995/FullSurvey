//to fig out whether prod or dev

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  //return dev
  module.exports = require("./dev");
}
