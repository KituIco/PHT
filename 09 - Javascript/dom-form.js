let form = document.querySelector("#myForm");
let nameInput = document.querySelector("#name");
let nameError = document.querySelector("#nameError");
let emailInput = document.querySelector("#email");
let emailError = document.querySelector("#emailError");


// handle form submission
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // validate form input
  const isValid = validateForm();
  if(isValid) {
    console.log("Form was Submitted successfully");
    form.reset();
    nameError.textContent = "";
    emailError.textContent = "";
  }
}

// validate inputs
function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  
  let isValid = true;
  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  return isValid;
}