setInterval(function() {
  nodeList = document.querySelectorAll(".box")
  height = getComputedStyle(document.querySelector(".box")).width //width == hegiht
  nodeList.forEach(element => {
    element.style.fontSize = height;
  })
}, 10);
