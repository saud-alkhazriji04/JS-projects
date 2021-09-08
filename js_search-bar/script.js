document.getElementById('input').addEventListener('keyup', function(event) {
    let search = event.target.value.toLowerCase();

    let allNames = document.getElementsByClassName('name');

    for (let i = 0; i < allNames.length; i++) {
        const name = allNames[i].textContent.toLocaleLowerCase();

        if (name.includes(search)) {
            allNames[i].style.display = 'block';
        } else {
            allNames[i].style.display = 'none';
        }
    }
})