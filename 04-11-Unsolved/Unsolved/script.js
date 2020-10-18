//create an event listener with a callback that increments the counter and displays the updated count on the webpage.
let count = 0;
let countEl = document.querySelector("#count")
let incBtn = document.querySelector("#increment");
let decBtn = document.querySelector("#decrement");

incBtn.addEventListener("click", function () {
    countEl.textContent = count++;
});   

decBtn.addEventListener("click", function () {
    if (count > 0) {
        countEl.textContent--;
    }
})

// function setCounterText () {
//     countEl.textContent = count;
// }

// incBtn.addEventListener("click", function () {
//     count++;
//     setCounterText();
// });   

// decBtn.addEventListener("click", function () {
//     if (count > 0) {
//         count--;
//     }
//     setCounterText();
// })