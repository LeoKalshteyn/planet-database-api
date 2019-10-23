class StarSystem {
  constructor(star_systemJSON) {
    this.id = star_systemJSON.id
    this.name = star_systemJSON.name
    this.distance = star_systemJSON.distance
    this.mass = star_systemJSON.mass
    this.apparent_magnitude = star_systemJSON.apparent_magnitude
    this.image = star_systemJSON.image
    this.planets = star_systemJSON.planets
  }

  createStarSystemBlock() {
    const starsystemsContainer = document.getElementById('star-system-data')

      const starsystemBlock = document.createElement('div')
      starsystemBlock.className = "star-system-quarter-container"

      const image = document.createElement('img')
      image.src = this.image
      starsystemBlock.appendChild(image)

      const name = document.createElement('h3')
      title.innerHTML = this.name
      starsystemBlock.appendChild(name)

      const planets = document.createElement('p')
      planets.innerHTML = this.planets
      starsystemBlock.appendChild(planets)

      starsystemsContainer.appendChild(starsystemBlock)
    }
  }
