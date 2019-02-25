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
