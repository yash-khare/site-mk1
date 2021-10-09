var count = 0;
var icount = document.getElementById("counting");

function increment() {
  count++;
  icount.innerText = count;
}

var saveEl=document.getElementById("save-el");

function save() {
  var countStr=count + " - ";
  saveEl.textContent+=countStr;
  console.log(count);
  count=0;
  icount.innerText=0;
}
