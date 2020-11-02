window.addEventListener('DOMContentLoaded', (event) => {
  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`
  const pokemonContainer = document.querySelector('main')
  fetchTrainers(TRAINERS_URL)

  function fetchTrainers(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(e => {
              createCard(e.name, e.id, e.pokemons)
            });
          }
        )
      }
          
  function createCard(trainerName, trainerId, pokemonArray) {
      const cardDiv = document.createElement('div')
      cardDiv.innerHTML = `<div class="card" data-id=${trainerId}>
          <p>${trainerName}</p>
          <button class="add" data-trainer-id=${trainerId}>Add Pokemon</button>
          <ul> 
          </ul>
      `
      pokemonArray.forEach(e => {
        const innerLi = document.createElement('li')
        innerLi.innerHTML = `<li>${e.nickname} (${e.species}) <button class="release" data-pokemonid=${e.id}>Release</button></li>`
        cardDiv.querySelector('ul').append(innerLi)
      })
      pokemonContainer.append(cardDiv)
}

  document.addEventListener('click', (event) => {
    if (event.target.className === "release") {
      deletePokemon(event)

    } else if (event.target.className === "add") {
        addPokemon(event)
        // console.log(event.target.parentElement.querySelector('p'))
    }
  })

  function addPokemon(event) {

    fetch(`${POKEMONS_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "trainer_id": parseInt(event.target.dataset.trainerId, 10)
        }),
    })
    .then(response => response.json())
    .then(newPokemonObj => {
      createCard(event.target.parentElement.querySelector('p').innerText, newPokemonObj.trainer_id, [newPokemonObj]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function deletePokemon(event){

    fetch(`${POKEMONS_URL}/${event.target.dataset.pokemonid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(console.log(event.target))
    .catch((error) => {
      console.error('Error:', error);
    });
    }


});


// find li and do li.remove()
