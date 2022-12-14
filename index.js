document.addEventListener("DOMContentLoaded", ()=> {
})

function clickAlert() {
    return "I was clicked"
}

function voteForFavorite() {
const votes = document.querySelector(form);
form.addEventListener('submit', (clickAlert) => {
    e.preventDefault ();

})
}

/*
function barDetails(character) {
    const bar = document.querySelector("#character-bar");
    const barSpan = document.createElement('span');
    barSpan.innerHTML= character.name;
    bar.appendChild(barSpan);
    barSpan.style.cursor = "pointer";
    barSpan.addEventListener('click',() => { 
        currentAnimal = character;
        showAnimal(character);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(currentAnimal);
            currentAnimal.votes += parseInt(e.target.votes.value, 10);
            showAnimal(currentAnimal);
            form.reset();
        });
        */