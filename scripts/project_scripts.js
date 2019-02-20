let mapboxMapGlobal = document.querySelector(".map-row");
mapboxMapGlobal.classList.add("map-row-hidden");

function hideMap() {
  mapboxMap = document.querySelector(".map-row");

  if (mapboxMap.classList.contains("map-row-hidden")) {
    mapboxMap.classList.remove("map-row-hidden");
  }
  else {
    mapboxMap.classList.add("map-row-hidden");
  }
}
