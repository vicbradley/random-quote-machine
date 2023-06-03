function generateColor() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
    return color;
}

function changeColor() {
  let body =  document.querySelector("body");
  const quote = document.querySelector(".quote");
  const btn = document.querySelector(".btn");
  const color = generateColor();
  body.style.backgroundColor = color;
  quote.style.color = color;
  btn.style.backgroundColor = color
}

export  {generateColor,changeColor};