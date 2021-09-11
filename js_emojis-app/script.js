const input = document.querySelector('#input');

const addStartBtn = document.querySelector('#add-start-btn');
const addEndBtn = document.querySelector('#add-end-btn');
const deleteStartBtn = document.querySelector('#delete-start-btn');
const deleteEndBtn = document.querySelector('#delete-end-btn');

const emojisContainer = document.querySelector('#emojis-div');

let localStorageEmojis = JSON.parse(localStorage.getItem('emojis'));

let emojis = ['👨‍💻', '👨‍🚀', '🧛‍♂️'];
let displayList = '';

if (localStorageEmojis) {
    emojis = localStorageEmojis;
    render(emojis);
}

function render(list) {
    localStorage.setItem('emojis', JSON.stringify(emojis));
    displayList = '';    // so it doesnt repeat the emojis on each click
    for (let i = 0; i < list.length; i++) {
        displayList += `
        <p>${list[i]}</p>
        `
    }
    emojisContainer.innerHTML = displayList;
}

addStartBtn.addEventListener('click', function() {
    if (input.value) {
        emojis.unshift(input.value);
        input.value = '';
        render(emojis);
    }
})

addEndBtn.addEventListener('click', function() {
    if (input.value) {
        emojis.push(input.value);
        input.value = '';
        render(emojis);
    }
})

deleteStartBtn.addEventListener('dblclick', function() {
    emojis.shift();
    render(emojis)
})

deleteEndBtn.addEventListener('dblclick', function() {
    emojis.pop();
    render(emojis)
})