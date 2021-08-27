// dom
const container = document.querySelector('#constiner-pokemons');

// create element
const isDiv = document.createElement('div')
const namePokemon = document.createElement('h2')
const imgPokemon = document.createElement('img')
const miniText = document.createElement('p')

const creatContainer = (pokeName, pokeImag, pokeText) => {
  isDiv.setAttribute('class', 'poke-pop-up')
  isDiv.append(namePokemon)
  namePokemon.setAttribute('class', 'nm-pk')
  namePokemon.append(pokeName)
  isDiv.append(imgPokemon)
  imgPokemon.setAttribute('class', 'img-pk')
  imgPokemon.setAttribute('src', pokeImag)
  isDiv.append(miniText)
  miniText.setAttribute('class', 'text-pk')
  miniText.append(pokeText)
  container.appendChild(isDiv)
}


creatContainer('Charmander', './img/poke-01.01.png', `Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.` )