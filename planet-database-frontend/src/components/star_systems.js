class StarSystems {
  constructor() {
    this.star_systems = []
    this.adapter = new StarSystemsAdapter()
    this.fetchAndLoadStarSystems()
  }

  fetchAndLoadStarSystems() {
    this.adapter
      .getStarSystems()
      .then(star_systems => {
      star_systems.forEach(star_system => this.star_systems.push(new star_system))
      })
      .then(() => {
      this.render()
    })
  }

  render() {
    const starsystemsContainer = document.getElementById('test')
    starsystemsContainer.innerHTML = 'working'
    console.log ('systems ', this.star_systems)
  }
}
