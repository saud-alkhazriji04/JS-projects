const input = document.querySelector('#input');

const addStartBtn = document.querySelector('#add-start-btn');
const addEndBtn = document.querySelector('#add-end-btn');
const deleteStartBtn = document.querySelector('#delete-start-btn');
const deleteEndBtn = document.querySelector('#delete-end-btn');

const emojisContainer = document.querySelector('#emojis-div');

let emojis = ['👨‍💻', '👨‍🚀', '🧛‍♂️'];
let displayList = '';

if (emojis) {
    render();
}

function render() {
    displayList = '';    // so it doesnt repeat the emojis on each click
    for (let i = 0; i < emojis.length; i++) {
        displayList += `
        <p>${emojis[i]}</p>
        `
    }
    emojisContainer.innerHTML = displayList;
}

addStartBtn.addEventListener('click', function() {
    if (input.value) {
        emojis.unshift(input.value);
        input.value = '';
        render();
    }
})

addEndBtn.addEventListener('click', function() {
    if (input.value) {
        emojis.push(input.value);
        input.value = '';
        render();
    }
})

deleteStartBtn.addEventListener('dblclick', function() {
    emojis.shift();
    render()
})

deleteEndBtn.addEventListener('dblclick', function() {
    emojis.pop();
    render()
})