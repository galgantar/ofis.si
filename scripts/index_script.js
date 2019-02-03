function getTheValues() {
  imageLocation = document.body.querySelector("#main-image");
  textLocation = document.body.querySelector("#links");
  logoLocation = document.body.querySelector("#logo-image");

  landscapeImages = {"pexels-photo-266691.jpeg":"white", "pexels-photo-414171.jpeg":"white"}; //seznam vseh slik (in barv teksta na njih), ki se bodo naključno prikazovale na naslovni strani
  landscapeKeys = Object.keys(landscapeImages);
  portraitImages = {"portrait.jpg":"white"};
  portraitKeys = Object.keys(portraitImages);
}
function insertRandomImage(isMobile) {
  if (isMobile) {
    index = Math.floor(Math.random()*portraitKeys.length)
    randomPhotoLocation = "portrait/" + portraitKeys[index];
    textColor = portraitImages[portraitKeys[index]];
  }
  else {
    index = Math.floor(Math.random()*landscapeKeys.length)
    randomPhotoLocation = "landscape/" + landscapeKeys[index];
    textColor = landscapeImages[landscapeKeys[index]];
  }

  imageLocation.setAttribute("src", "images/index/" + randomPhotoLocation);
  logoLocation.setAttribute("src", "images/index/logo/" + textColor + ".png");
  textLocation.style.color = textColor;
}
function alignTheText() {
  screenWidth = screen.width;
  if (screenWidth < 576) {
    textLocation.style.left = "50%";
    textLocation.style.transform = "translateX(-50%)";
    textLocation.style.fontSize = "400%";
  }
  else {
    textLocation.style.left = null;
    textLocation.style.transform = null;
    textLocation.style.fontSize = null;
  }
}

setInterval (function() {
  if (typeof wasMobile === 'undefined') {
    if (screen.width < 576) {
      insertRandomImage(true);
    }
    else {
      insertRandomImage(false);
    }
  }
  else if (wasMobile == (screen.width < 576)) {}
  else if (wasMobile || !(screen.width < 576)) {
    insertRandomImage(false);
  }
  else if (!wasMobile || (screen.width < 576)) {
    insertRandomImage(true);
  }

  if (screen.width < 576) {
    wasMobile = true;
  }
  else {
    wasMobile = false;
  }

  alignTheText();
}, 10)
