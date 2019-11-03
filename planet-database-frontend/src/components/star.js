class Star {
  constructor(starJSON) {
    // console.log(Star) // logs Star class correctly.
    // console.log(starJSON) // logs
    this.id = starJSON.id
    this.name = starJSON.name
    this.image = starJSON.image
    this.planets = starJSON.planets
  }

  createStarBlock() {
  const starsContainer = document.getElementById('stars-data')

    const starBlock = document.createElement('div')
    starBlock.className = "star-quarter-container"

    const image = document.createElement('img')
    image.src = this.image
    starBlock.appendChild(image)

    const name = document.createElement('h3')
    name.innerHTML = this.name
    starBlock.appendChild(name)

    const planets = document.createElement('ul')
    starBlock.appendChild(planets)
    planets.innerHTML = this.planets.map(planet => `<li><p>${planet.label}</p></li>`).join('')

    starsContainer.appendChild(starBlock)
  }
}
