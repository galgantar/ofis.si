function divideByX(currentWidth, number) {
  //funkcija dobi "52px" (vrednost v pikslih) ga deli z stevilom in ga pretvori nazaj v "52px"
  currentWidth = parseInt(currentWidth);
  currentWidth = currentWidth/number;
  return currentWidth + "px";
}
function checkFontSize() {
  try {
    body = document.querySelector("body");
    width = screen.width; //velikost besedila je odvisna od trenutne širine zaslona
    body.style.fontSize = (divideByX(width, 50));
  }
  catch(error) {}
}
function getTheValues() {
  imageLocation = document.body.querySelector("#background");
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

  imageLocation.style.backgroundImage = 'url("images/index/'+ randomPhotoLocation + '")';
  logoLocation.setAttribute("src", "images/index/logo/" + textColor + ".png");
  textLocation.style.color = textColor;
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

  checkFontSize();
}, 10)
