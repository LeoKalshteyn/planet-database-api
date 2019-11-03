class Stars {
  constructor() {
    this.stars = []
    this.adapter = new StarsAdapter()
    //this.bindEventListeners()
    this.fetchAndLoadStars()
  }

  fetchAndLoadStars() {
    this.adapter
      .getStars()
      .then(stars => {
      // return console.log(stars)
      stars.forEach(star => this.stars.push(new Star(star)))
      // console.log(this.stars)
      })
      .then(() => {
      this.render()
    })
  }

  render() {
    // console.log(this.stars)
    const starsContainer = document.getElementById('star-data')
    starsContainer.innerHTML = this.stars.map(star => star.createStarBlock())
  }
}
