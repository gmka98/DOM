/*
    Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
    If the background is dark the text should be white, if the background is light the text should be black
    Find a way so that everytime you load the page the order of the elements changes!
*/
var ajoute = document.querySelector('section');
var RGBColor1 = (Math.round, Math.random, 255)
var RGBColor2 = (Math.round, Math.random, 255)
var RGBColor3 = (Math.round, Math.random, 255)

var ajout = document.createElement("section").style.backgroundColor = rgb(RGBColor1,RGBColor2,RGBColor3)
ajout
;

if(backgroundColor = rgb(0,0,0)){
    var dark = document.getElementsByTagName("section"); 
section.setAttribute("style", "color:black");
}
console.log(dark);

else(){
    var light = document.getElementsByTagName("section"); 
section.setAttribute("style", "color:white");
}
console.log('light')