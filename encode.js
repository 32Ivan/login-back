const encoder = require("./encoder/encoder.js");

module.exports = function encode(req, res) {
  const inputStr = req.body.str;

  if (!inputStr) {
    return res.status(400).json({ message: "Missing input string" });
  }

  const encodedStr = encoder(inputStr);

  res.json({ encoded: encodedStr });
};
