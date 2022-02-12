const form = document.getElementById("form");
const input = document.getElementById("input");
const listaTarea = document.getElementById("todoList");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();

let tareas = {};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }
  pintarTareas();
});

listaTarea.addEventListener("click", (e) => {
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

  tareas[tarea.id] = tarea;
  //console.log("diste click");
  //console.log(tarea);

  form.reset();
  input.focus();
  pintarTareas();
};

const pintarTareas = () => {
  localStorage.setItem("tareas", JSON.stringify(tareas));

  listaTarea.innerHTML = "";
  Object.values(tareas).forEach((tarea) => {
    const clone = template.cloneNode(true);
    clone.querySelector("p").textContent = tarea.text;

    if (tarea.estado) {
      clone
        .querySelectorAll(".fa-solid")[0]
        .classList.replace("fa-expand", "fa-check");

      clone.querySelector("p").style.textDecoration = "Line-through";
    }

    clone.querySelectorAll(".fa-solid")[0].dataset.id = tarea.id;
    clone.querySelectorAll(".fa-solid")[1].dataset.id = tarea.id;
    fragment.appendChild(clone);
    //console.log(tarea);
  });
  todoList.appendChild(fragment);
  //console.log(tareas);
};

const btnAccion = (e) => {
  if (e.target.classList.contains("fa-expand")) {
    console.log(e.target.dataset.id);
    tareas[e.target.dataset.id].estado = true;
    pintarTareas();
    //console.log(tareas);
  }

  if (e.target.classList.contains("fa-x")) {
    delete tareas[e.target.dataset.id];
    pintarTareas();
    //console.log(tareas);
  }

  if (e.target.classList.contains("fa-check")) {
    console.log(e.target.dataset.id);
    tareas[e.target.dataset.id].estado = false;
    pintarTareas();
    //console.log(tareas);
  }

  console.log(btnAccion);
  e.stopPropagation();
};
