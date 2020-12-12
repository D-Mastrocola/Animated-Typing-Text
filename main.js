//Stores the child elemnts of the text we want to animate
const text = document.querySelector('#letters').children;
var textArray = [];

//Seperate each row so I can retain format
for(let i = 0; i < text.length; i++) {
  textArray.push(text[i]);
}

//Seperate each letter with their own span tag using regex
for(let i = 0; i < textArray.length; i++) {
  textArray[i].innerHTML = textArray[i].textContent.replace(
    /./g,
    "<span class='letter'>$&</span>"
  );
  console.log("replaced")
}

//Changes the cursor height based on the text size;
//document.querySelector('.cursor').style.height = document.querySelector('.message').offsetHeight + "px";

//Fades in the letters one by one with a small variance in timing to create a human feel.
  anime({
    targets: ".letter",
    opacity: [0, 1],
    duration: 1000,
    delay: (el, i) => i * 150 + (Math.random() * 150),
    loop: true
  });
  