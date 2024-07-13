// Remove the <main> element with id 'main'
const element = document.getElementById("main");
element.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new <h1> element to 'victory'
newHeader.id = "victory";

// Set the text content of the new <h1> element
newHeader.textContent = "Kipchumba Brian is the champion";

// Append the new <h1> element to the body of the document
document.body.append(newHeader);
