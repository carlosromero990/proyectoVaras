const changingWord = document.querySelector(".letra-cambio");

const words = ["varas", "familia", "dedicación", "esfuerzo", "equipo", "éxito"];
let index = 0;

function updateWord() {
  changingWord.textContent = words[index];
  changingWord.style.color = "yellow";
  index = (index + 1) % words.length;
}

updateWord();
setInterval(updateWord, 3000);
