const decode = (req, res, next) => {
  const { mensaje, vueltas } = req.body;
  const parsedInput = mensaje.split("");
  const L = vueltas;
  const N = Math.ceil(parsedInput.length / L);
  let message = [];
  let counterN = 0;

  parsedInput.map((letter) => {
    if (counterN < N) {
      !message[counterN]
        ? (message[counterN] = [letter])
        : message[counterN].push(letter);

      counterN++;
    } else {
      counterN = 0;
      message[counterN].push(letter);
      counterN++;
    }
  });

  req.decodedMessage = message.join("").replace(/,/g, "");

  if (req.mode === "testing") return req;

  next();
};

module.exports = decode;
