var btnOpen = document.getElementsByClassName("open-modal-btn")[0];
var hide = document.getElementsByClassName("hide");
var btnClose = document.getElementsByTagName("button")[1] 
var btnClose2 = document.getElementsByTagName("i")[0];

btnOpen.addEventListener("click", () => {
    hide[0].style.display = "block";
});
btnClose.addEventListener("click", () => {
    hide[0].style.display = "none";
});

btnClose2.addEventListener("click", () => {
    hide[0].style.display = "none";
});