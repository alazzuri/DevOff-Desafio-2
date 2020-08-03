const encrypt = require("../utils/encrypt");

const encryptTest = () => {
  const mensaje = "Devoff se puso ATR";
  const vueltas = 4;
  const req = { body: { mensaje, vueltas }, mode: "testing" };

  if (req) {
    const { encryptedMessage } = encrypt(req);
    encryptedMessage === "DfesTef oRv p  osuA "
      ? console.log("Test succedd")
      : console.error(" Someting went wrong");
  }
};

module.exports = encryptTest;
