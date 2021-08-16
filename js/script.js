const headerDetails = document.getElementById('header-detail');
console.log(headerDetails);

// button event handler
const buttonHandler = document.getElementById('buy-now-btn');
let count = 0;
buttonHandler.addEventListener('click', function () {
    const sectionTitle = document.getElementById('section-title');
    count++;
    if (count % 2 == 1) {
        sectionTitle.innerText = 'I AM PENGUIN';
    }
    else {
        sectionTitle.innerText = 'BE THE PENGUIN';
    }
});

