var currentYear = new Date().getFullYear();
document.getElementsByTagName("footer")[0].innerHTML = document
  .getElementsByTagName("footer")[0]
  .innerHTML.concat(String(currentYear));
