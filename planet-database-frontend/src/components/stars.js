class Stars {
  constructor() {
    this.stars = []
    this.adapter = new StarsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadStars()
  }

  initBindingsAndEventListeners() {
    this.newStarForm = document.getElementById('new-star-form')
    this.newStarName = document.getElementById('new-star-name')
    this.newStarDistance = document.getElementById('new-star-distance')
    this.newStarMagnitude = document.getElementById('new-star-magnitude')
    this.newStarMass = document.getElementById('new-star-mass')
    this.newStarImage = document.getElementById('new-star-image')
    this.newStarForm.addEventListener('submit', this.createStar.bind(this))
    //when the star is submitted, bind the Stars object as this, or the this will become the form itself
  }

  createStar(e) {
  //  console.log(this)
    e.preventDefault(); //pass in event object and prevents the default of page refresh on form submit
    const nameValue = this.newStarName.value;
    const distanceValue = this.newStarDistance.value;
    const magnitudeValue = this.newStarMagnitude.value;
    const massValue = this.newStarMass.value;
    const imageValue = this.newStarImage.value;

    this.adapter.createStar(nameValue,distanceValue,magnitudeValue,massValue,imageValue)
      .then(star => {
      // console.log(star)
      const newStar = new Star(star)
      this.stars.push(newStar)
      this.newStarName.value = ' '
      this.newStarDistance.value = ' '
      this.newStarMagnitude.value = ' '
      this.newStarMass.value = ' '
      this.newStarImage.value = ' '

      newStar.renderStarBlock()

      // return console.log(this.stars)
      })
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
      this.renderStars()
    })
  }

  renderStars() {
    // console.log(this.stars)
    this.stars.map(star => star.renderStarBlock())
  }
}
