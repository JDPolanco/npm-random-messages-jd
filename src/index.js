const messages = [
  "oscar",
  "Martigo",
  "Maruancho",
  "Garisito",
  "Tata"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()*messages.length)];
  console.log(message);
}

module.exports = { randomMsg } 