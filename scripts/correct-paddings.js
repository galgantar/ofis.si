function getMeta(url){
    img = new Image();
    img.src = url;
    return [img.width, img.height];
}

setInterval(function() {
  images = document.querySelectorAll(".news-image-small");
  images = Array.from(images);

  visibleImages = images.filter((image) => {
    return getComputedStyle(image).display != "none";
  })

  visibleImages.forEach(function(image) {
    var url = image.style.backgroundImage;
    url = url.replace('url("', "");
    url = url.replace('")', "");

    var dimensions = getMeta(url);

    image.style.paddingTop = (dimensions[1] / dimensions[0])*100 + "%";
  });

}, 10);
