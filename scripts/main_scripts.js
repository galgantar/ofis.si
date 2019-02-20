function divideByX(currentWidth, number) {
  //funkcija dobi "52px" (vrednost v pikslih) ga deli z stevilom in ga pretvori nazaj v "52px"
  currentWidth = parseInt(currentWidth);
  currentWidth = currentWidth/number;
  return currentWidth + "px";
}

setInterval(function() {
  try {
    body = document.querySelector("body");
    wrapper = document.querySelector(".wrapper");
    width = getComputedStyle(wrapper).width; //velikost besedila je odvisna od trenutne širine wrapperja
    body.style.fontSize = (divideByX(width, 50));
  }
  catch(error) {}
}, 10);
