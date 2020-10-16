// Create your HTML Page via DOM Methods here!
let body = document.body;

//create elements
let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let img = document.createElement("img");
let imgInfo = document.createElement("div");
let listTitle = document.createElement("div");
let listEl = document.createElement("ol");
let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");

let items = document.getElementsByTagName("li");

h1El.textContent = "With an exclamation mark!";
h2E1.textContent = "Second header.";
imgInfo.textContent = "Huge Caribou";
listTitle.textContent = "Here are some of my fav animals:";

body.appendChild(h1El);
body.appendChild(h2E1);
body.appendChild(img);
body.appendChild(imgInfo);
body.appendChild(listTitle);
body.appendChild(listEl);
listEl.appendChild(item1);
listEl.appendChild(item2);
listEl.appendChild(item3);


//styling and attributes
img.setAttribute("src", "imglink");
h1El.setAttribute("style", "text-align: center; width: 50%; margin: auto");
