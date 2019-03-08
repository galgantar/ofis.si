let mapboxMapGlobal = document.querySelector(".map-row");
mapboxMapGlobal.classList.add("map-row-hidden");

function hideMap() {
  mapboxMap = document.querySelector(".map-row");
  button = document.querySelector(".show-map-image");

  if (mapboxMap.classList.contains("map-row-hidden")) {
    mapboxMap.classList.remove("map-row-hidden");
    button.style.transform = "rotate(180deg)";
  }
  else {
    mapboxMap.classList.add("map-row-hidden");
    button.style.transform = "none";
  }
}

function showMoreText() {
  let hiddenTexts = document.querySelectorAll(".project-read-more");
  let button = document.querySelector(".read-more-button");
  if (getComputedStyle(hiddenTexts[0]).display == "none") {
    button.innerHTML = "Read less";
    hiddenTexts.forEach(function(element){
      element.style.display =  "inline";
    });
  }
  else {
    button.innerHTML = "Read more";
    hiddenTexts.forEach(function(element){
      element.style.display =  null;
    })
  }
}
