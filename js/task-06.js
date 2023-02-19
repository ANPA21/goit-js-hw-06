const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === 0) {
    refs.input.classList.remove("valid");
    refs.input.classList.remove("valid");
  } else if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
    refs.input.classList.replace("invalid", "valid");
  } else {
    refs.input.classList.add("valid", "invalid");
  }
}
