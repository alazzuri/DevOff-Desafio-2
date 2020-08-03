const decode = require("../utils/decode");

const decodeTest = () => {
  const mensaje = "DfesTef oRv p  osuA ";
  const vueltas = 4;
  const req = { body: { mensaje, vueltas }, mode: "testing" };

  if (req) {
    const { decodedMessage } = decode(req);
    decodedMessage === "Devoff se puso ATR  "
      ? console.log("Test succedd")
      : console.error(" Someting went wrong");
  }
};

module.exports = decodeTest;
