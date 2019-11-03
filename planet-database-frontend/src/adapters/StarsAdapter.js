class StarsAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/stars'
  }

  getStars() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}
