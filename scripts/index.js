// ------------- Script starts here -------------

setInterval(update_caret, 500);

var i = 0;
var andrew = "\xa0Andrew Wright";
var intervalID = setInterval(function () {
  window.setTimeout(type, 100 + Math.random() * 100);
}, 100);

document.addEventListener("keydown", function (event) {
  if (event.key == "Backspace") {
    var titleLen = document.getElementById("title").innerHTML.length;
    document.getElementById("title").innerHTML = document
      .getElementById("title")
      .innerHTML.slice(0, titleLen - 1);
  } else if (event.key == "Enter") {
    var cmd = document.getElementById("title").innerHTML;
    if (cmd.startsWith("&nbsp;")) {
      cmd = cmd.slice(6, cmd.length);
    }
    document.getElementById("title").innerHTML = "";
    if (cmd == "Coin Flip") {
      if (Math.round(Math.random()) == 0) {
        alert("Heads!");
      } else {
        alert("Tails!");
      }
    } else if (cmd == "TicTacToe") {
      alert(
        '"The only winning move is not to play..."\n\nhttps://www.youtube.com/watch?v=MpmGXeAtWUw',
      );
    }
  } else if (event.key.length == 1) {
    document.getElementById("title").innerHTML = document
      .getElementById("title")
      .innerHTML.concat(event.key);
  }
});
