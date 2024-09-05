function addTask() {
  let divTask = document.createElement("div");

  let input = document.querySelector("#list-text");
  let inputValue = input.value;

  divTask.classList.add('list-item');
  divTask.innerHTML = `
    <p class=\"list-item-p\">${inputValue}</p>
    <button onclick="finishTask(this)">Finish this task</button>
  `;

  let container = document.querySelector('section');
  container.appendChild(divTask);
};


function finishTask(element) {
  element.parentElement.remove()
  emptyChecker()
}

function emptyChecker() {
  container = document.querySelector("section")
  if (!container.hasChildNodes() == True) {
    // Lägg till text som säger att det finns inga tasks
  }
}