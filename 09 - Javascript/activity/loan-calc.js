let loanForm = document.querySelector("#loanForm");
let loanAmountInput = document.querySelector("#loanAmount");
let interestRateInput = document.querySelector("#interestRate");
let loanTermInput = document.querySelector("#loanTerm");

let result = document.querySelector("#result")

loanForm.addEventListener("submit", handleSubmit);

loanAmountInput.addEventListener("change", resetResult);
interestRateInput.addEventListener("change", resetResult);
loanTermInput.addEventListener("change", resetResult);

function handleSubmit(event) {
  event.preventDefault();
  let loanAmountValue = loanAmountInput.value;
  let interestRateValue = interestRateInput.value;
  let loanTermValue = loanTermInput.value;

  let value = loanAmountValue * interestRateValue/100 * loanTermValue / 12;

  result.textContent = `Monthly Payment is USD ${value.toFixed(2)}`;
  result.setAttribute("class", "success");
}

function resetResult(event) {
  result.textContent = `Waiting for your Input!`;
  result.setAttribute("class", "");
}