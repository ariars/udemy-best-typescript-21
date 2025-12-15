const userName = "Max";
console.log(userName);

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log(message);
}

button?.addEventListener("click", clickHandler.bind(null, "message"));