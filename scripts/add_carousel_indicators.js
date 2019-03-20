carousels = document.querySelectorAll(".carousel");

carousels.forEach(function(element){
  indicators = element.childNodes[1];
  numberOfImages = element.childNodes[3].childElementCount;

  for(var i=0; i<numberOfImages; ++i) {
    listItem = document.createElement("li");

    listItem.setAttribute("data-target", "#"+element.id);
    listItem.setAttribute("data-slide-to", i);
    if (i==0) {
      listItem.className = "active";
    }
    indicators.appendChild(listItem)
  }
});
