function update_caret() {
  if (document.getElementById("caret").innerHTML == "|") {
    document.getElementById("caret").innerHTML = "&nbsp;";
  } else {
    document.getElementById("caret").innerHTML = "|";
  }
}

function particles_load(file_path) {
  if (window.location.pathname.startsWith("/posts")) {
    particlesJS.load("particles-js", "../" + file_path, function () {});
  } else {
    particlesJS.load("particles-js", file_path, function () {});
  }
}

function appeearance_mode() {
  var body_element = document.body;
  body_element.classList.toggle("dark-mode");
  try {
    if (sessionStorage.getItem("darkmode") == 1) {
      document.getElementsByClassName("iconLink")[0].style.color = "white";
    } else {
      document.getElementsByClassName("iconLink")[0].style.color = "black";
    }
  } catch (e) {
    return;
  }
}

function night_shift() {
  if (document.getElementById("appearance_mode").innerHTML == "light_mode") {
    document.getElementById("appearance_mode").innerHTML = "dark_mode";
    sessionStorage.setItem("darkmode", 1);
    particles_load("scripts/particles-dark.json");
  } else {
    document.getElementById("appearance_mode").innerHTML = "light_mode";
    sessionStorage.setItem("darkmode", 0);
    particles_load("scripts/particles-light.json");
  }
  appeearance_mode();
}

function type() {
  document.getElementById("title").innerHTML = document
    .getElementById("title")
    .innerHTML.concat(andrew.charAt(i));
  if (i++ == 13) {
    window.clearInterval(intervalID);
  }
}

// ------------- Script starts here -------------

if (sessionStorage.getItem("darkmode") == 1) {
  document.getElementById("appearance_mode").innerHTML = "dark_mode";
  particles_load("scripts/particles-dark.json");
  appeearance_mode();
} else if (sessionStorage.getItem("darkmode") == 0) {
  document.getElementById("appearance_mode").innerHTML = "light_mode";
  particles_load("scripts/particles-light.json");
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.getElementById("appearance_mode").innerHTML = "dark_mode";
    sessionStorage.setItem("darkmode", 1);
    particles_load("scripts/particles-dark.json");
    appeearance_mode();
  } else {
    document.getElementById("appearance_mode").innerHTML = "light_mode";
    sessionStorage.setItem("darkmode", 0);
    particles_load("scripts/particles-light.json");
  }
}

if (window.innerWidth < 1200) {
  document.getElementsByClassName("left")[0].remove();
  document.getElementsByClassName("right")[0].remove();
}
