const form = document.getElementById("signup__form");
const signup = document.getElementsByClassName("signup")[0];
const success = document.getElementsByClassName("success")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = form.querySelector("input");
  const value = input.value;
  const inputHint = form.querySelector("#emailHint");
  inputHint.textContent = "";

  const liveError = form.querySelector("#signup__live");
  liveError.textContent = "";

  const enableError = (message) => {
    inputHint.textContent = message;
    liveError.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", "emailHint");
  };

  const disableError = () => {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  };

  if (value == "") enableError("The field is left empty");
  else if (!/^\S+@\S+\.\S+$/.test(value))
    enableError("The email is not formatted correctly");
  else {
    disableError();
    signup.classList.add("hidden");
    success.classList.remove("hidden");
    form.reset();
  }
});

document
  .getElementsByClassName("success__button")[0]
  .addEventListener("click", () => {
    signup.classList.remove("hidden");
    success.classList.add("hidden");
  });
