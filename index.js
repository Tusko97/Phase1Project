const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
// Use fetch to get the fake API created 
fetch('https://mocki.io/v1/259e3b67-24d9-4b36-a3a2-16361eee6f7b', {    

method: 'GET',
headers: {
    'Content-Type': 'application/json'
},
// added stringify 
data:JSON.stringify('GET')
})
.then(response => response.json())
.then(data => console.log(data))

// to add the votes for each wrestler, we select the document and use fetch to get the API plus an if statement for the condition.
document.addEventListener("submit", e => {
    fetch('https://mocki.io/v1/259e3b67-24d9-4b36-a3a2-16361eee6f7b') (index+1)
    if(addVotes)return;
    const voteFor = document.querySelectorAll(form)
    btn.addEventListeners('submit', )
    'voteFor';parseInt(form)+1;

});
});
}

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
    */