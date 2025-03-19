// Write your code here!
const element = document.getElementById("main")
 element.remove()
 
 // Create a new <h1> element
 const newHeader = document.createElement("h1")
 
 // Set the id of the new <h1> element to 'victory'
 newHeader.id = "victory"
 
 //set the text content of new <h1> element
 newHeader.textContent = "Kipchumba Brian  N'getich is the champion";
 
 //Append the new <h1> element to the body of the document
 
 document.body.append(newHeader)
