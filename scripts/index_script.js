function getTheValues() {
  //seznama vseh slik (in barv teksta na njih), ki se bodo naključno prikazovale na naslovni strani
  //LANDSCAPE SLIKE
  landscapeImages = {'OFIS_COVER_LANDSCAPE_01.jpg': 'white', 'OFIS_COVER_LANDSCAPE_02.jpg': 'white', 'OFIS_COVER_LANDSCAPE_03.jpg': 'white', 'OFIS_COVER_LANDSCAPE_04.jpg': 'white', 'OFIS_COVER_LANDSCAPE_05.jpg': 'white', 'OFIS_COVER_LANDSCAPE_06.jpg': 'white', 'OFIS_COVER_LANDSCAPE_07.jpg': 'white', 'OFIS_COVER_LANDSCAPE_08.jpg': 'white', 'OFIS_COVER_LANDSCAPE_09.jpg': 'white', 'OFIS_COVER_LANDSCAPE_10.jpg': 'white', 'OFIS_COVER_LANDSCAPE_11.jpg': 'white', 'OFIS_COVER_LANDSCAPE_12.jpg': 'white', 'OFIS_COVER_LANDSCAPE_13.jpg': 'white', 'OFIS_COVER_LANDSCAPE_14.jpg': 'white', 'OFIS_COVER_LANDSCAPE_15.jpg': 'white', 'OFIS_COVER_LANDSCAPE_16.jpg': 'white', 'OFIS_COVER_LANDSCAPE_17.jpg': 'white', 'OFIS_COVER_LANDSCAPE_18.jpg': 'white', 'OFIS_COVER_LANDSCAPE_19.jpg': 'white', 'OFIS_COVER_LANDSCAPE_20.jpg': 'white', 'OFIS_COVER_LANDSCAPE_21.jpg': 'white', 'OFIS_COVER_LANDSCAPE_22.jpg': 'white', 'OFIS_COVER_LANDSCAPE_23.jpg': 'white', 'OFIS_COVER_LANDSCAPE_24.jpg': 'white', 'OFIS_COVER_LANDSCAPE_25.jpg': 'white', 'OFIS_COVER_LANDSCAPE_26.jpg': 'white', 'OFIS_COVER_LANDSCAPE_27.jpg': 'white', 'OFIS_COVER_LANDSCAPE_28.jpg': 'white', 'OFIS_COVER_LANDSCAPE_29.jpg': 'white', 'OFIS_COVER_LANDSCAPE_30.jpg': 'white', 'OFIS_COVER_LANDSCAPE_31.jpg': 'white', 'OFIS_COVER_LANDSCAPE_32.jpg': 'white', 'OFIS_COVER_LANDSCAPE_33.jpg': 'white', 'OFIS_COVER_LANDSCAPE_34.jpg': 'white', 'OFIS_COVER_LANDSCAPE_35.jpg': 'white', 'OFIS_COVER_LANDSCAPE_36.jpg': 'white', 'OFIS_COVER_LANDSCAPE_37.jpg': 'white', 'OFIS_COVER_LANDSCAPE_38.jpg': 'white', 'OFIS_COVER_LANDSCAPE_39.jpg': 'white', 'OFIS_COVER_LANDSCAPE_40.jpg': 'white', 'OFIS_COVER_LANDSCAPE_41.jpg': 'white', 'OFIS_COVER_LANDSCAPE_42.jpg': 'white', 'OFIS_COVER_LANDSCAPE_43.jpg': 'white', 'OFIS_COVER_LANDSCAPE_44.jpg': 'white', 'OFIS_COVER_LANDSCAPE_45.jpg': 'white', 'OFIS_COVER_LANDSCAPE_46.jpg': 'white', 'OFIS_COVER_LANDSCAPE_47.jpg': 'white', 'OFIS_COVER_LANDSCAPE_48.jpg': 'white', 'OFIS_COVER_LANDSCAPE_49.jpg': 'white', 'OFIS_COVER_LANDSCAPE_50.jpg': 'white', 'OFIS_COVER_LANDSCAPE_51.jpg': 'white', 'OFIS_COVER_LANDSCAPE_52.jpg': 'white', 'OFIS_COVER_LANDSCAPE_53.jpg': 'white', 'OFIS_COVER_LANDSCAPE_54.jpg': 'white', 'OFIS_COVER_LANDSCAPE_55.jpg': 'white', 'OFIS_COVER_LANDSCAPE_56.jpg': 'white', 'OFIS_COVER_LANDSCAPE_57.jpg': 'white', 'OFIS_COVER_LANDSCAPE_58.jpg': 'white', 'OFIS_COVER_LANDSCAPE_59.jpg': 'white', 'OFIS_COVER_LANDSCAPE_60.jpg': 'white', 'OFIS_COVER_LANDSCAPE_61.jpg': 'white', 'OFIS_COVER_LANDSCAPE_62.jpg': 'white', 'OFIS_COVER_LANDSCAPE_63.jpg': 'white'};

  //PORTRAIT SLIKE
  portraitImages = {'OFIS_COVER_PORTRAIT_01.jpg': 'white', 'OFIS_COVER_PORTRAIT_02.jpg': 'white', 'OFIS_COVER_PORTRAIT_03.jpg': 'white', 'OFIS_COVER_PORTRAIT_04.jpg': 'white', 'OFIS_COVER_PORTRAIT_05.jpg': 'white', 'OFIS_COVER_PORTRAIT_06.jpg': 'white', 'OFIS_COVER_PORTRAIT_07.jpg': 'white', 'OFIS_COVER_PORTRAIT_08.jpg': 'white', 'OFIS_COVER_PORTRAIT_09.jpg': 'white', 'OFIS_COVER_PORTRAIT_10.jpg': 'white', 'OFIS_COVER_PORTRAIT_11.jpg': 'white', 'OFIS_COVER_PORTRAIT_12.jpg': 'white', 'OFIS_COVER_PORTRAIT_13.jpg': 'white', 'OFIS_COVER_PORTRAIT_14.jpg': 'white', 'OFIS_COVER_PORTRAIT_15.jpg': 'white', 'OFIS_COVER_PORTRAIT_16.jpg': 'white', 'OFIS_COVER_PORTRAIT_17.jpg': 'white', 'OFIS_COVER_PORTRAIT_18.jpg': 'white', 'OFIS_COVER_PORTRAIT_19.jpg': 'white', 'OFIS_COVER_PORTRAIT_20.jpg': 'white', 'OFIS_COVER_PORTRAIT_21.jpg': 'white', 'OFIS_COVER_PORTRAIT_22.jpg': 'white', 'OFIS_COVER_PORTRAIT_23.jpg': 'white', 'OFIS_COVER_PORTRAIT_24.jpg': 'white', 'OFIS_COVER_PORTRAIT_25.jpg': 'white', 'OFIS_COVER_PORTRAIT_26.jpg': 'white', 'OFIS_COVER_PORTRAIT_27.jpg': 'white', 'OFIS_COVER_PORTRAIT_28.jpg': 'white', 'OFIS_COVER_PORTRAIT_29.jpg': 'white', 'OFIS_COVER_PORTRAIT_30.jpg': 'white', 'OFIS_COVER_PORTRAIT_31.jpg': 'white', 'OFIS_COVER_PORTRAIT_32.jpg': 'white', 'OFIS_COVER_PORTRAIT_33.jpg': 'white', 'OFIS_COVER_PORTRAIT_34.jpg': 'white', 'OFIS_COVER_PORTRAIT_35.jpg': 'white', 'OFIS_COVER_PORTRAIT_36.jpg': 'white', 'OFIS_COVER_PORTRAIT_37.jpg': 'white', 'OFIS_COVER_PORTRAIT_38.jpg': 'white', 'OFIS_COVER_PORTRAIT_39.jpg': 'white', 'OFIS_COVER_PORTRAIT_40.jpg': 'white', 'OFIS_COVER_PORTRAIT_41.jpg': 'white', 'OFIS_COVER_PORTRAIT_42.jpg': 'white', 'OFIS_COVER_PORTRAIT_43.jpg': 'white', 'OFIS_COVER_PORTRAIT_44.jpg': 'white', 'OFIS_COVER_PORTRAIT_45.jpg': 'white', 'OFIS_COVER_PORTRAIT_46.jpg': 'white', 'OFIS_COVER_PORTRAIT_47.jpg': 'white', 'OFIS_COVER_PORTRAIT_48.jpg': 'white', 'OFIS_COVER_PORTRAIT_49.jpg': 'white', 'OFIS_COVER_PORTRAIT_50.jpg': 'white', 'OFIS_COVER_PORTRAIT_51.jpg': 'white', 'OFIS_COVER_PORTRAIT_52.jpg': 'white', 'OFIS_COVER_PORTRAIT_53.jpg': 'white', 'OFIS_COVER_PORTRAIT_54.jpg': 'white', 'OFIS_COVER_PORTRAIT_55.jpg': 'white', 'OFIS_COVER_PORTRAIT_56.jpg': 'white', 'OFIS_COVER_PORTRAIT_57.jpg': 'white'};

  landscapeKeys = Object.keys(landscapeImages);
  portraitKeys = Object.keys(portraitImages);

  imageLocation = document.body.querySelector("#background");
  textLocation = document.body.querySelector("#links");
  logoLocation = document.body.querySelector("#logo-image");
}

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
