class Star {
  constructor(starJSON) {
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

    const planetButton = document.createElement("BUTTON")
    planetButton.setAttribute("id", `planet-button-${this.id}`)
    planetButton.setAttribute("onclick", "openForm()")
    planetButton.innerHTML = "Add Exo Planet"
    starBlock.appendChild(planetButton)
    planetButton.addEventListener('click', this.getNewStarForm.bind(this))

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
    planets.setAttribute("id", `planet-${this.id}`)
    planetStats.appendChild(planets)
    planets.innerHTML = this.planets.map(planet => this.planetDetails(planet)).join('')

  }

  planetDetails(planet){
  // console.log(planet)
  return `<p>Planet Label: ${planet.label}</p>
          <p>Mass: ${planet.planet_mass}</p>
          <p>Radius: ${planet.radius}</p>
          <p>Semimajor-Axis (AU): ${planet.semimajor_axis}</p>
          <p>Orbital-Period (Days): ${planet.orbital_period}</p>
          <p>Eccentricity: ${planet.eccentricity}</p>
          <p>Discovery-Year: ${planet.discovery_year}</p>`
}

  deleteStar(id){
    return fetch('http://localhost:3000/stars' + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      }
    })
  }

  getNewStarForm(event){
    // console.log(this)
    event.preventDefault();
    const newPlanetForm = document.getElementById('new-planet-form')
    newPlanetForm.name = this.id
    const submitButton = document.createElement("button")
    submitButton.innerHTML = "Add"
    submitButton.id = "planet-submit"
    submitButton.type = "submit"
    const buttonDiv = document.getElementById("buttons")
    buttonDiv.appendChild(submitButton)
    submitButton.addEventListener('click', this.submitPlanet.bind(this))
  }

  submitPlanet(event){
    event.preventDefault();
    const buttonDiv = document.getElementById("buttons")
    const submitButton = document.getElementById("planet-submit")
    const form = document.getElementById('new-planet-form')
    const newPlanetLabel = document.getElementById('new-planet-label')
    const newPlanetMass = document.getElementById('new-planet-mass')
    const newPlanetRadius = document.getElementById('new-planet-radius')
    const newPlanetSemimajorAxis = document.getElementById('new-planet-semimajor-axis')
    const newPlanetOrbitalPeriod = document.getElementById('new-planet-orbital-period')
    const newPlanetEccentricity = document.getElementById('new-planet-eccentricity')
    const newPlanetDiscoveryYear = document.getElementById('new-planet-discovery-year')

    const planetBox = document.getElementById(`planet-${form.name}`)
    const pDiv = document.createElement('p')
    planetBox.appendChild(pDiv)

    const planetAddition = {
        star_id: form.name,
        label: newPlanetLabel.value,
        planet_mass: newPlanetMass.value,
        radius: newPlanetRadius.value,
        semimajor_axis: newPlanetSemimajorAxis.value,
        orbital_period: newPlanetOrbitalPeriod.value,
        eccentricity: newPlanetEccentricity.value,
        discovery_year: newPlanetDiscoveryYear.value
    };

    fetch('http://localhost:3000/planets', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(planetAddition)
    })
    .then(res => res.json())
      .then(planet => {
      // console.log(planet)
      pDiv.innerHTML = planet.label

      newPlanetLabel.value = ' '
      newPlanetMass.value = ' '
      newPlanetRadius.value = ' '
      newPlanetSemimajorAxis.value = ' '
      newPlanetOrbitalPeriod.value = ' '
      newPlanetEccentricity.value = ' '
      newPlanetDiscoveryYear.value = ' '
      buttonDiv.removeChild(submitButton)
      closeForm()
      })
   }

}
