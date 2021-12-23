const editSave = document.querySelector(".card-link");
const inputs = document.querySelectorAll("input");
const img = document.querySelector("img");
const nameInput = document.querySelector("input[name='name']");
const numberInput = document.querySelector("input[name='number']");
const emailInput = document.querySelector("input[name='email']");

editSave.addEventListener("click", () => {
  if (editSave.textContent === "Edit") {
    for (input of inputs) {
      input.removeAttribute("disabled");
      editSave.textContent = "Save";
    }
  } else if (editSave.textContent === "Save") {
    for (input of inputs) {
      input.setAttribute("disabled", "disabled");
      editSave.textContent = "Edit";
    }
  }
});

img.addEventListener("click", () => {
  if (editSave.textContent === "Save") {
    let url = prompt("Enter url for image: ");
    img.src = url;
  }
});

nameInput.addEventListener("change", () => {
  let nameI = nameInput.value;
  nameInput.value = nameI;
});

numberInput.addEventListener("change", () => {
  let numberI = numberInput.value;
  numberInput.value = numberI;
});

emailInput.addEventListener("change", () => {
  let emailI = emailInput.value;
  emailInput.value = emailI;
});
