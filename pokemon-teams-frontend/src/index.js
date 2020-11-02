window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    
    fetchTrainers(TRAINERS_URL)

});

function fetchTrainers(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
          data.forEach(e => {
            createCard(e.name, e.id)
            // console.log(e.id)
            //   console.log(e.pokemons[0].species)
          });
        }
      )
    }
        
function createCard(trainerName, trainerId) {
    const cardDiv = document.createElement('div')
    cardDiv.innerHTML = `<div class="card" data-id=${trainerId}>
        <p>${trainerName}</p>
        <button data-trainer-id=${trainerId}>Add Pokemon</button>
        <ul>
        <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
        </ul>
    `

    console.log(cardDiv)
}

function renderCard(trainer) {

}


// pseudocode

// When a user loads the page, they should see all trainers, with their current team of Pokemon.

// fetchTrainers()
// iterate through trainers - forEach
    // iterate through pokemon forEach trainer


// Suggested HTML
// A Pokemon Card can be placed within the <main> tags.

// Pokemon Trainer Card
//  <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>








// Whenever a user hits Add Pokemon and they have space on their team, they should get a new Pokemon.
// Whenever a user hits Release Pokemon on a specific Pokemon team, that specific Pokemon should be released from the team.