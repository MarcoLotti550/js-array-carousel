const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];


let itemsContent = '';
let elementActive = 0;

for (let i=0; i< imagesArray.length; i++) {
    itemsContent += `
        <div class="item" id="item-${i}">
            <img src="${imagesArray[i]}">
        </div>`;
}

const itemsContainer = document.querySelector('.item-container');
itemsContainer.innerHTML = itemsContent;

let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
    elementActive--;
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.add('active');
});
next.addEventListener('click', function() {
    elementActive++;
    itemActive.classList.remove('active');
    itemActive = document.getElementById('item-'+elementActive);
    itemActive.classList.add('active');
});