var input = document.querySelector("input");
var tags = document.querySelector(".contain-tag");
var remove = document.querySelector(".fa-times");
var removeAll = document.querySelector(".remove");

var data = ["HTML", "CSS", "JavaScript", "React", "Node"];
render();
input.addEventListener("keypress", function (e) {
  if (e.keyCode == 13 && input.value != "") {
    data.push(input.value);
    input.value = "";
    render();
  }
});

function render() {
  var html = "";
  data.forEach(function (item, index) {
    html += `
        <div class="tag">
        <div class="tag-text">${item}</div>
        <i id=${index} class="fas fa-times"></i>
        </div>
      `;
  });
  tags.innerHTML = html;
  data.length == 0 ? tags.classList.add("hide") : tags.classList.remove("hide");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-times")) {
    data.splice(e.target.id, 1);
  }
  render();
});

removeAll.addEventListener("click", function () {
  data = [];
  render();
});
