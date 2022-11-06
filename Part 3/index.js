function buttonHandling() {
  var numberarea = document.getElementById("numberarea");

  numberlist = [1, 2, 3, 4, 5, 6, 7, 8];

  numberlist.map(adddesign);
}

function adddesign(value) {
  var box = document.createElement("div");
  box.classList.add("numbercard");
  box.id = value;
  box.innerHTML = value;
  numberarea.appendChild(box);
}
