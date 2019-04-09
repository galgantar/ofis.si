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
  let button = document.querySelector(".read-more-button");
  let paragraphs = document.querySelectorAll(".project-description-row .col-12 .project-description");

  if (paragraphs[0].style.webkitLineClamp == "") {
    if (document.querySelector("html").getAttribute("lang") == "en"){
      button.innerHTML = "Read less";
    }else{
      button.innerHTML = "Preberi manj";
    }
    paragraphs.forEach(function(element){
      element.style.webkitLineClamp = "unset";
    });
  }
  else {
    if (document.querySelector("html").getAttribute("lang") == "en"){
      button.innerHTML = "Read more";
    }else{
      button.innerHTML = "Preberi več";
    }
    paragraphs.forEach(function(element){
      element.style.webkitLineClamp = "";
    })
  }
}

//Main script
descriptions = document.querySelectorAll(".project-description");

descriptions.forEach(function(element){
  element.innerHTML = element.innerHTML.replace(new RegExp('\r?\n','g'), '<br>').substr(4);
});
