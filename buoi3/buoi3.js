
const all = [
    { name: "Nguyen Van A", class: "C" },
    { name: "Nguyen Van B", class: "B" },
]
var lopA = all.filter(function (item) {
    var arrayA = [];
      return arrayA.push(item.class === "A")
   });

console.log(lopA);