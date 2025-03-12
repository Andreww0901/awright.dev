function getCharArr(text) {
  charArr = [];
  for (let i = 0; i < text.length; i++) {
    charArr.push(text.charCodeAt(i));
  }
  return charArr;
}

function updateString(textArr, element) {
  var elemCharArr = [];
  for (let i = 0; i < textArr.length; i++) {
    if (currentTitlesDict.get(element)[i] < textArr[i]) {
      elemCharArr.push(
        currentTitlesDict.get(element)[i] + Math.round(Math.random() * 5),
      );
    } else if (currentTitlesDict.get(element)[i] > textArr[i]) {
      elemCharArr.push(
        currentTitlesDict.get(element)[i] - Math.round(Math.random() * 5),
      );
    } else {
      elemCharArr.push(titlesDict.get(element)[i]);
    }
  }
  currentTitlesDict.set(element, elemCharArr);
}

// ------------- Script starts here -------------

if (window.innerWidth >= 1200) {
  document.getElementById("Title").classList.add("left");
  document.getElementById("Navigation").classList.add("right");
} else {
  document.getElementById("Title").classList.add("center");
  document.getElementById("Navigation").classList.add("center");
}

let titlesDict = new Map();
titlesDict.set(1, getCharArr("andrew"));
titlesDict.set(2, getCharArr("wright"));
titlesDict.set(3, getCharArr(String(currentYear)));

let currentTitlesDict = new Map();
currentTitlesDict.set(
  1,
  getCharArr(document.getElementById("titleLine1").innerHTML),
);
currentTitlesDict.set(
  2,
  getCharArr(document.getElementById("titleLine2").innerHTML),
);
currentTitlesDict.set(
  3,
  getCharArr(document.getElementById("titleLine3").innerHTML),
);

var intervalID1 = setInterval(function () {
  if (
    JSON.stringify(currentTitlesDict.get(1)) ===
    JSON.stringify(titlesDict.get(1))
  ) {
    window.clearInterval(intervalID1);
  } else {
    updateString(titlesDict.get(1), 1);
    document.getElementById("titleLine1").innerHTML = String.fromCharCode(
      ...currentTitlesDict.get(1),
    );
  }
}, 50);

var intervalID2 = setInterval(function () {
  if (
    JSON.stringify(currentTitlesDict.get(2)) ===
    JSON.stringify(titlesDict.get(2))
  ) {
    window.clearInterval(intervalID2);
  } else {
    updateString(titlesDict.get(2), 2);
    document.getElementById("titleLine2").innerHTML = String.fromCharCode(
      ...currentTitlesDict.get(2),
    );
  }
}, 50);

var intervalID3 = setInterval(function () {
  if (
    JSON.stringify(currentTitlesDict.get(3)) ===
    JSON.stringify(titlesDict.get(3))
  ) {
    window.clearInterval(intervalID3);
  } else {
    updateString(titlesDict.get(3), 3);
    document.getElementById("titleLine3").innerHTML = String.fromCharCode(
      ...currentTitlesDict.get(3),
    );
  }
}, 50);
