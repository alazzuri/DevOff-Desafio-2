const encrypt = (req, res, next) => {
  const { mensaje, vueltas } = req.body;
  const parsedInput = mensaje.split("");
  const L = vueltas;
  const N = Math.ceil(parsedInput.length / L);
  let message = [];
  let counterL = 0;

  for (let i = parsedInput.length; i < L * N; i++) {
    parsedInput.push(" ");
  }

  parsedInput.map((letter) => {
    if (counterL < L) {
      !message[counterL]
        ? (message[counterL] = [letter])
        : message[counterL].push(letter);

      counterL++;
    } else {
      counterL = 0;
      message[counterL].push(letter);
      counterL++;
    }
  });

  req.encryptedMessage = message.join("").replace(/,/g, "");

  if (req.mode === "testing") return req;

  next();
};

module.exports = encrypt;
