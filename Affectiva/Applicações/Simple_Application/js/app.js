document.querySelector('.start').addEventListener("click", () => init())
document.querySelector('#loading .reset').addEventListener("click", () => reset())
document.querySelector('#ongoing .reset').addEventListener("click", () => reset())
document.querySelector('#final .reset').addEventListener("click", () => reset())
document.querySelector('.finish').addEventListener("click", () => finish())

render('start')