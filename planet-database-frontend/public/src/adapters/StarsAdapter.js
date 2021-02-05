class StarsAdapter{
  constructor() {
    this.baseUrl = 'https://planet-database-api.herokuapp.com/stars'
  }

  getStars() {
    // function which fetchs the stars url and sends response
    return fetch(this.baseUrl).then(res => res.json())
  }

}
