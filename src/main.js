import anime from './anime.es.js';
//Stores the child elemnts of the text we want to animate
const text = document.querySelector('#letters').children;
var textArray = [];

//Seperate each row so I can retain format
for (let i = 0; i < text.length; i++) {
  textArray.push(text[i]);
}

//Seperate each letter with their own span tag using regex
for (let i = 0; i < textArray.length; i++) {
  textArray[i].innerHTML = textArray[i].textContent.replace(
    /./g,
    "<span class='letter'>$&</span>"
  );
  console.log("replaced")
}
console.log(document.querySelector('#letters').getBoundingClientRect().x)
//Changes the cursor height based on the text size;
document.querySelector('.cursor').style.height = document.querySelector('.letter').offsetHeight + "px";
//Moves the cursor to the starting position

//create keyframes for animation
let cursorPos = [];
let letters = textArray[1].children;
console.log(textArray)
for(let i = 1; i < letters.length; i++) {
  
  let frame = {
    translateX: letters[i].getBoundingClientRect().x,
    translateY: letters[i].getBoundingClientRect().y,
    duration: 0,
    delay: 50,
    easing: 'linear'
  };
  console.log(textArray[i]);
  cursorPos.push(frame);
}
cursorPos.push({
  translateX: letters[letters.length - 1].getBoundingClientRect().x + letters[letters.length - 1].offsetWidth,
  duration: 0,
  delay: 50,
  easing: 'linear'
});
console.log(cursorPos)
//Fades in the letters one by one.
anime.timeline()
  .add({
    targets: ".letter",
    opacity: [0, 1],
    delay: (el, i) => i * 50,
  })
  .add({
    targets: ".cursor",
    keyframes: cursorPos,
  }, 0)
  .add({
    targets: '.cursor',
    opacity: 0,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 1,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 0,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 1,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 0,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 1,
    duration: 300,
    endDelay: 200
  })
  .add({
    targets: '.cursor',
    opacity: 0,
    duration: 300,
    endDelay: 200
  });
