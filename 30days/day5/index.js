var input = document.querySelector(".input_search");
var btn = document.querySelector(".btn_search");
var isShow = false;
btn.addEventListener("click", function () {
  if (!isShow) {
    input.classList.toggle("show");
    input.classList.remove("unshow");
    btn.classList.toggle("show_button");
    btn.classList.remove("unshow_button");

    btn.style.borderRadius = "0 10px 10px 0";
    input.focus();
    input.style.width = "80%";
    input.style.padding = "0 20px";
    isShow = !isShow;
  } else {
    input.classList.remove("show");
    input.classList.toggle("unshow");
    btn.classList.remove("show_button");
    btn.classList.toggle("unshow_button");

    btn.style.borderRadius = "10px";
    input.style.width = "0%";
    input.style.padding = "0px";
    isShow = !isShow;
  }
});
