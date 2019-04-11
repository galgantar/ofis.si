function setDisplay(value) {
  rows.forEach(function(element){
    element.style.display = value;
  });
}

function show_news() {
  if (rows[0].style.display == "none") {
    setDisplay("flex");
    if (lang="en"){
      button.innerHTML = "show less";
    }else{
      button.innerHTML = "pokaži manj";
    }
  }
  else {
    setDisplay("none");
    if (lang="en"){
      button.innerHTML = "show more";
    }else{
      button.innerHTML = "pokaži več";
    }
  }
}

button = document.querySelector(".show-news");
rows = Array.prototype.slice.call(document.querySelectorAll(".we-row")).slice(1);
lang = document.querySelector("html").getAttribute("lang");

setDisplay("none");
