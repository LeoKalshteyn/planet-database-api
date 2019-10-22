class StarSystemsAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/star_systems'
  }

  getStarSystems() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}
