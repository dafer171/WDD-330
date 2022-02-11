const form = document.getElementById("form");
const input = document.getElementById("input");
const todoList = document.getElementById("todoList");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();

let todo = {};
/*
document.addEventListener("DOMContentLoaded", () => {
  pintarTareas();
});
*/

todoList.addEventListener("click", (e) => {
  btnAccion(e);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("porcesing form");
  //console.log(input.value);
  setTarea(e);
});

const setTarea = (e) => {
  if (input.value.trim() === "") {
    //console.log("esta vacion");
    return;
  }

  const tarea = {
    id: Date.now(),
    text: input.value,
    estatus: false,
  };

  todo[tarea.id] = tarea;
  //console.log("diste click");
  //console.log(tarea);

  form.reset();
  input.focus();
  pintarTareas();
};

const pintarTareas = () => {
  todoList.innerHTML = "";
  Object.values(todo).forEach((tarea) => {
    const clone = template.cloneNode(true);
    clone.querySelector("p").textContent = tarea.text;
    clone.querySelectorAll(".fa-solid")[0].dataset.id = tarea.id;
    clone.querySelectorAll(".fa-solid")[1].dataset.id = tarea.id;
    fragment.appendChild(clone);
    //console.log(tarea);
  });
  todoList.appendChild(fragment);
};

const btnAccion = (e) => {
  //console.log(e.target.classList.contains("fa-solid fa-plus"))
  if (e.target.classList.contains("fa-solid fa-plus")) {
  }
  e.stopPropagation();
};
