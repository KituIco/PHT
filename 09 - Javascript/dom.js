// Document Object Model
// Accessing elements
// by ID
let heading = document.getElementById('heading');
console.log(heading);

// by className
let textElements = document.getElementsByClassName('text');
console.log(textElements);

// by tagName
let listItems = document.getElementsByTagName('li');
console.log(listItems);


// querySelector
let containerElement = document.querySelector('#container');
console.log(containerElement);

// parent node
let listParent = document.querySelector('#list').parentNode;
console.log(listParent);

// children
let containerChildren = document.getElementById('container').children;
console.log(containerChildren);

// previous sibling
let firstListItem = document.querySelector('li').previousSibling;
console.log(firstListItem);


// Modifying elements
// heading.innerHTML = "<h6>Leaning DOM Manipulation<h6>";
textElements[0].textContent = "This is a new paragraph."; // better to use


// setting attributes
heading.setAttribute("class", "highlight");

// chaing style properties
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue";

// creating elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is another paragraph.";
containerElement.appendChild(newParagraph); 

// remove element
let listItem = document.querySelector('li'); // only choose the first
listItem.remove();



// Event Handling
button.addEventListener("click", addListItem);

function addListItem() {
  let newListItem = document.createElement("li");
  newListItem.textContent = "Another Task";
  document.getElementById("list").appendChild(newListItem); 
}