var container = document.querySelector(".container");
var note = document.querySelector(".note-box");
var circle = document.querySelector(".circle");
var textKey = document.getElementsByClassName("option-box__text")[0];
var textCode = document.getElementsByClassName("option-box__text")[1];
var text = document.createElement('p');

document.addEventListener("keydown", function (e) {
  
  console.log(e.which, e.keyCode, e.key, e.charCode, e.srcElement);
  console.log(textKey);
  container.classList.remove("hide");
  note.classList.add("hide");
  console.log(text);
  var keySpace = e.keyCode === 32 ? "Space" : e.key;
  console.log(e.keyCode);
  circle.innerText = e.keyCode;
  textCode.innerText = e.keyCode;
  textKey.innerText = e.keyCode === 32 ? "Space" : e.key;
});
