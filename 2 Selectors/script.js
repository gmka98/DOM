/*You can access any elements from the DOM using the querySelector and querySelectorAll methods.

    querySelector returns the first element that matches the selector
    querySelectorAll returns a list of elements that matches the selector

*/

/*Exercises

Without modifying the index.html file open the script.js to do the following tasks:

    Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
    Select all the img tags and loop through them. If they have no important class, turn their display property to none
    Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
    Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

Footer

*/
const title = document.querySelectorAll('p.important');
let say = document.createElement('title');
say.innerText= 'This is an important item';
title.appendChild('p');

const image = document.querySelectorAll('img');
image.forEach(element => {
document.getElementsByTagName("img")style.display = "none"
});

const par = document.querySelectorAll('p');
document.getElementsByTagName('p')style.color = "yellow";
console.log(par);