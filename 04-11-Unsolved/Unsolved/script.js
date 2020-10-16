//create an event listener with a callback that increments the counter and displays the updated count on the webpage.
let count = document.querySelector("#count")
let incBtn = document.querySelector("#increment");

incBtn.addEventListener("click", 
function () {
    
document.body.style.backgroundColor = "red"
    count.textContent = count.textContent + 1;
}
);          