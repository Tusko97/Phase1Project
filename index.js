fetch('https://github.com/Gianna18/Project-wrestling-API/blob/master/db.json', {    
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
data:JSON.stringify(post)
})
.then(response => response.json())
.then(data => console.log(data))


document.addEventListener("submit", e => {
    fetch('https://github.com/Gianna18/Project-wrestling-API/blob/master/db.json') (index+1)
    if(addVotes)return;
    const voteFor = document.querySelectorAll(form)
    btn.addEventListeners('submit', )
    'voteFor';parseInt(form)+1;

})


 //const submit= document.querySelectorAll(form)
 //submit.addEventListener('submit',function(event){
    //event.preventDefault()
 //})

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

        const btn = document.getElementById('buy-ticket')
        btn.addEventListener('click', function(event){
            let remainingTickets = document.querySelector('#ticket-number').textContent
            event.preventDefault()
            if(remainingTickets > 0){
                document.querySelector('#ticket-number').textContent  = remainingTickets-1
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })