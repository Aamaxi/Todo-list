function addTask() {
  let divTask = document.createElement("div");
  divTask.classList.add('list-item');
  divTask.innerHTML = `
    <p class=\"list-item-p\">Do the dishes</p>
    <button>Finish this task</button>
  `;

  let container = document.querySelector('section');
  container.appendChild(divTask);
};
