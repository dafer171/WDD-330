const foreURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=39.8885&lon=4.2658&exclude={part}&appid=33033af6ab98d426efd2c19223b9729c&units=imperial";

fetch(foreURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("current").textContent =
      jsObject.current.weather[0].description;
    document.getElementById("current-temp").textContent = jsObject.current.temp;
    document.getElementById("humidity").textContent = jsObject.current.humidity;
  });

fetch(foreURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const list = jsObject.daily;
    //console.log(list);

    for (let i = 0; i < 3; i++) {
      let timestamp = list[i].dt;
      let date = new Date(timestamp * 1000);
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let image = document.createElement("img");

      h2.textContent = dayofWeek[date.getDay()];
      card.appendChild(h2);

      h3.textContent = list[i].temp.day;
      card.appendChild(h3);

      image.setAttribute(
        "src",
        "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png"
      );
      card.appendChild(image);

      document.querySelector("div.forecast").appendChild(card);
    }
  });
