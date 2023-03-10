const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterValueSpan: document.querySelector("#value"),
};

let counterValue = 0;
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  refs.counterValueSpan.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counterValueSpan.textContent = counterValue;
}
