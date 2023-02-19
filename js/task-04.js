const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};

refs.counterValue.textContent = 0;
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  refs.counterValue.textContent -= 1;
}

function onIncrementBtnClick() {
  refs.counterValue.textContent += 1;
}
