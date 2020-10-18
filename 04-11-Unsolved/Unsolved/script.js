<<<<<<< HEAD
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
=======
<<<<<<< HEAD
//create an event listener with a callback that increments the counter and displays the updated count on the webpage.
let count = document.querySelector("#count")
let incBtn = document.querySelector("#increment");

incBtn.addEventListener("click", 
function () {
    
document.body.style.backgroundColor = "red"
    count.textContent = count.textContent + 1;
}
=======
//create an event listener with a callback that increments the counter and displays the updated count on the webpage.
let count = document.querySelector("#count")
let incBtn = document.querySelector("#increment");

incBtn.addEventListener("click", 
function () {
    
document.body.style.backgroundColor = "red"
    count.textContent = count.textContent + 1;
}
>>>>>>> 356f3ce288e8d8d0eeca2ef070338b684fd7e59c
);          
>>>>>>> 59f825800c63ff5b302755064d521f442f433c7a
