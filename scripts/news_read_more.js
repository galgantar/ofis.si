function show_news() {
  if (sections[0].style.display == "" || sections[0].style.display == "none") {
    sections.forEach(function(element){
      element.style.display = "block";
    });
    archive.style.display = "inline-block";

    if (lang == "en") {
      button.innerHTML = "show less";
    }else {
      button.innerHTML = "pokaži manj";
    }
  }
  else {
    sections.forEach(function(element){
      element.style.display = "none";
    });
    archive.style.display = "none";

    if (lang == "en") {
      button.innerHTML = "show more";
    }else {
      button.innerHTML = "pokaži več";
    }
  }

}

sections = Array.prototype.slice.call(document.querySelectorAll(".news-section")).slice(5);
archive = document.querySelector("#show-more");
button = document.querySelector(".show-news");
lang = document.querySelector("html").getAttribute("lang");
