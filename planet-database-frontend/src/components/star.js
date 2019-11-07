class Star {
  constructor(starJSON) {
    // console.log(Star) // logs Star class correctly.
    // console.log(starJSON) // logs
    this.id = starJSON.id
    this.name = starJSON.name
    this.distance = starJSON.distance
    this.magnitude = starJSON.magnitude
    this.mass = starJSON.mass
    this.image = starJSON.image
    this.planets = starJSON.planets
  }

  renderStarBlock() {
  const starsContainer = document.getElementById('stars-data')

    const starBlock = document.createElement('div')
    starBlock.className = "star-container"
    starsContainer.appendChild(starBlock)

    const deleteButton = document.createElement("BUTTON")
    deleteButton.setAttribute("id", `delete-button-${this.id}`)
    deleteButton.innerHTML = "Delete Star"
    starBlock.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
      starBlock.remove()
      this.deleteStar(`${this.id}`)
    })

    const name = document.createElement('h3')
    name.innerHTML = this.name
    starBlock.appendChild(name)

    const distance = document.createElement('h3')
    distance.innerHTML = this.distance
    starBlock.appendChild(distance)

    const magnitude = document.createElement('h3')
    magnitude.innerHTML = this.magnitude
    starBlock.appendChild(magnitude)

    const mass = document.createElement('h3')
    mass.innerHTML = this.mass
    starBlock.appendChild(mass)

    const image = document.createElement('img')
    image.src = this.image
    starBlock.appendChild(image)

    const planetStats = document.createElement('div')
    planetStats.className = "planet-stats"
    starBlock.appendChild(planetStats)

    const planets = document.createElement('div')
    planetStats.appendChild(planets)
    planets.innerHTML = this.planets.map(planet => this.planetDetails(planet)).join('')

  }

  planetDetails(planet){
  // console.log(planet)
  return `<p>Planet Label: ${planet.label}
          <p>Mass: ${planet.planet_mass}
          <p>Radius: ${planet.radius}
          <p>Semimajor-Axis (AU): ${planet.semimajor_axis}
          <p>Orbital-Period (Days): ${planet.orbital_period}
          <p>Eccentricity: ${planet.eccentricity}
          <p>Discovery-Year: ${planet.discovery_year}</p>`
}

  deleteStar(id){
  //  console.log(`star is ID: ${id}`)
    return fetch('http://localhost:3000/stars' + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      }
    })
  }

}
