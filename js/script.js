const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['text1', 'text2', 'text3']

let letterIndex = -15;
let wordIndex = 0;

// Implementacja
const addLetter = () => {

  if (letterIndex >= 0) {
    spnText.textContent += txt[wordIndex][letterIndex];
  }
  letterIndex++;
  if (letterIndex === txt[wordIndex].length) {
    wordIndex++;
    if (wordIndex === txt.length) return;

    return setTimeout(() => {
      letterIndex = -15;
      spnText.textContent = '';
      addLetter();
    }, 2000)
   
  }

  setTimeout(addLetter, 100);
}


addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);