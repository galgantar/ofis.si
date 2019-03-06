setInterval(function() {
  image = document.querySelector("#main-image");
  imageWidth = getComputedStyle(image).width;
  windowWidth = window.innerWidth;

  difference = parseInt(imageWidth) - parseInt(windowWidth);

  if (difference > 0) {
    image.style.marginLeft = -difference/2 + "px";
  }

}, 10)
