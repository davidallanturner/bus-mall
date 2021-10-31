'use strict';

let allItems = [];
let clicks = 0;
let maxClicks = 25;



//DOM SELECTORS
// let main = document.getElementById('#main');
let image1 = document.querySelector('#main > section img:first-child');
let image2 = document.querySelector('#main > section > img:nth-child(2)');
let image3 = document.querySelector('#main > section > img:nth-child(3)');
let myButton = document.querySelector('#main > div')
const result = document.querySelector('#main > ul');


function Item(name, filetypeExt = 'jpg') {
 this.name = name
 this.src = `assets/${name}.${filetypeExt}`;
 this.alt = name;
 this.likes = 0;
 this.views = 0;
 allItems.push(this);
}

new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pen');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('sweep', 'png');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');

function selectRandomItem() {
 return Math.floor(Math.random() * allItems.length);
}

function renderItems() {
 let item1 = selectRandomItem();
 let item2 = selectRandomItem();
 let item3 = selectRandomItem();

 while (item1 === item2 || item2 === item3 || item1 === item3) {
  console.log(item1, item2, item3);
  item1 = selectRandomItem();
  item2 = selectRandomItem();
  item3 = selectRandomItem();
 }
 image1.src = allItems[item1].src;
 image1.alt = allItems[item1].name;
 allItems[item1].views++;
 image2.src = allItems[item2].src;
 image2.alt = allItems[item2].name;
 allItems[item2].views++;
 image3.src = allItems[item3].src;
 image3.alt = allItems[item3].name;
 allItems[item3].views++;
}
renderItems();

let section = document.querySelector('#main');
function eventHandler(event) {
 if (event.target == section) {
  return;
 }
 clicks++;
 console.log('clicks: '+clicks);
 let clickedItem = event.target.alt;
 console.log(clickedItem);
 for (let i = 0; i < allItems.length; i++) {
  if (clickedItem === allItems[i].name) {
   allItems[i].likes++;
   console.log(allItems[i].likes);
   break;
  }
 }
 renderItems();

 function buttonClick() {
  for (let i = 0; i < allItems.length; i++) {
   let li = document.createElement('li')
   li.textContent = `${allItems[i].name} had ${allItems[i].views} view and was clicked ${allItems[i].likes} times.`;
   result.appendChild(li);
  };
 }


 if (clicks === maxClicks) {
  section.removeEventListener('click', eventHandler);
  myButton.addEventListener('click', buttonClick);
  myButton.className = 'total';
 }

}
section.addEventListener('click', eventHandler);


// const thirdBorder = document.querySelector('#main');
// section.addEventListener('click', (event) => {
//  event.target.style.border = '1rem dotted blue'
//  event.stopPropagation();
// });