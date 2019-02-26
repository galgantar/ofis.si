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
  let hiddenText = document.querySelector(".project-read-more");
  let button = document.querySelector(".read-more-button");
  if (getComputedStyle(hiddenText).display == "none") {
    hiddenText.style.display =  "inline";
    button.innerHTML = "Read less";
  }
  else {
    hiddenText.style.display =  null;
    button.innerHTML = "Read more";
  }
}
