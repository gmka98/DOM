// Display the document title in the console
document.getElementById("content").style.display ="block";

//Change the document title to Modifying the DOM
var title = document.querySelector("title").innerHTML = "Modifying the DOM";

//Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
var x = (Math.floor, Math.random()* 256) 
var y = (Math.floor, Math.random()* 256) 
var z = (Math.floor, Math.random() * 256) 
var RGBColor = "rgb("+x+", "+y+", "+z+")";
document.body.style.backgroundColor = (RGBColor)
//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)

const child = querySelectorAll("body")
for(let i = 1; i < child.lenght; i++){
    child[1].style.display = "block"
}
