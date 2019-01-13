function divideByX(currentWidth, number) {
  //funkcija dobi "52px" (vrednost v pikslih) ga deli z stevilom in ga pretvori nazaj v "52px"
  currentWidth = parseInt(currentWidth);
  currentWidth = currentWidth/number;
  return currentWidth + "px";
}

setInterval(function() {
  //wrapper
  wrapper = document.querySelector(".wrapper");
  width = getComputedStyle(wrapper).width; //velikost besedila je odvisna od trenutne širine zaslona
  wrapper.style.fontSize = (divideByX(width, 50));

  //boxes
  if (location.href.split("/").slice(-1) == "home.html" || location.href.split("/").slice(-1) == "domov.html") {
    nodeList = document.querySelectorAll(".box");
    height = getComputedStyle(document.querySelector(".box")).width; //width == hegiht
    nodeList.forEach(element => {
      element.style.fontSize = height;
      }
    );
  }
}, 10);
