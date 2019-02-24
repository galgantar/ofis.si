function getMaxRatio(images) {
  let ratios = [];
  images.forEach(function(element) {
    let source = element.getAttribute("src");
    source = source.replace('url("', "");
    source = source.replace('")', "");
    img = new Image();
    img.src = source;
    ratios.push(parseInt(img.height) / parseInt(img.width));
  });

  return Math.max(...ratios); //"..." is a javaScript array sepatator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
}

setInterval(function() {
  carousels = document.querySelectorAll(".carousel");

  carousels.forEach(function(element) {
    let carouselItems = element.childNodes[3];
    let images = carouselItems.querySelectorAll(".carousel-item img");
    let maxImageRatio = getMaxRatio(images);

    let elementWidth = parseInt(getComputedStyle(element).width);
    element.style.height = (elementWidth * maxImageRatio) + "px";
  });

}, 10)
