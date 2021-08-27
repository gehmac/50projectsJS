const container = document.querySelector('#constiner-pokemons');


const creatContainer = () => {
  const isDiv = document.createElement('div')
  isDiv.append('ola')
  container.appendChild(isDiv)
}

creatContainer()