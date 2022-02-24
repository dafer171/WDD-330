let requestURL = "https://swapi.dev/api/people?page=1";

function showPeople() {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject);
      const people = jsonObject["results"];
      //console.table(people);

      for (let i = 0; i < people.length; i++) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");

        h2.textContent = people[i].name;
        card.appendChild(h2);

        h3.textContent = "Height: " + people[i].height;
        card.appendChild(h3);

        document.querySelector("div.cards").appendChild(card);
      }
      return requestURL;

      //let a = document.createElement("a");

      //let link = document.createTextNode("Next page");
      //a.appendChild(link);
      //document.querySelector("div.cards").appendChild(a);
      //a.href = nextPage;
      //console.log(nextPage);
    });
}

function changePage(requestURL) {
  //let nextPage = jsonObject.next;
  //let requestURL = nextPage;
  //return nextPage;
  console.log(requestURL);
}

//document.getElementById("showPeople").onclick = showPeople();
