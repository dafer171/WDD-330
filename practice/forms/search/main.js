const form = document.forms["search"];
//const form = document.forms[0];
//const form = document.getElementsByTagname('form')[0];
//const form = document.forms.search;

const input = form.elements.searchInput;
//const [input,button] = form.elements;
//const input = form["searchInput"];
//const input = form.searchInput

form.action = "/an/other.url";

//input.addEventListener("focus", () => alert("focused"), false);

//input.addEventListener("blur", () => alert("blurred"), false);

//input.addEventListener("change", () => alert("changed"), false);

form.addEventListener("submit", search, false);

function search() {
  alert(" Form Submitted");
  event.preventDefault();
}

function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}

input.value = "Search Here";

input.addEventListener(
  "focus",
  function () {
    if (input.value === "Search Here") {
      input.value = "";
    }
  },
  false
);
input.addEventListener(
  "blur",
  function () {
    if (input.value === "") {
      input.value = "Search Here";
    }
  },
  false
);
