var btnCreate = document.querySelector(".btnCreate");
var input = document.querySelector("input");
var rows = document.querySelector(".row");
console.log(rows);
data = [];

btnCreate.addEventListener("click", function () {
  data.push(input.value);

  render();
});

function render() {
  var html = document.createElement("tr");
  console.log(html);
  for (var i = 0; i < data.length; i++) {
    html.innerHTML = `
        <tr>
            <td>${i + 4}</td>
            <td>${data[i]}</td>
        <tr>
    `;
    console.log(html);
    rows.appendChild(html);
  }
}
