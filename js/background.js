const images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];

const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${choseImage}`;

document.body.appendChild(bgImage);