const list = document.querySelector('ol')
const first = ol.children[0]
const last = ol.children[1]
last.appendChild(first);

const head = document.querySelector('h2')
const trois = h2.children[2] 
const deux = h2.children[1]
trois.appendChild(deux);
deux.appendChild(trois);

const dead = document.querySelector('section')
dead.remove(section[2]);