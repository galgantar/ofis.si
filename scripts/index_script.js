function insertRandomImage() {
  let images = {"NASLOVNA_RANDOM.jpg":"white", "pexels-photo-266691.jpeg":"white", "pexels-photo-414171.jpeg":"white"}; //seznam vseh slik (in barv teksta na njih), ki se bodo naključno prikazovale na naslovni strani
  let keys = Object.keys(images);

  index = Math.floor(Math.random()*keys.length)
  randomPhoto = keys[index];
  textColor = images[keys[index]];

  imageLocation = document.querySelector("#main-image");
  imageLocation.setAttribute("src", "images/index/" + randomPhoto);

  textLocationsList = document.querySelectorAll(".links, a");
  textLocationsList.forEach(element => {
    element.style.color = textColor;
    element.style.fontFamily = "Verdana";
    }
  );
}
