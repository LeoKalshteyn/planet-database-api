class Stars {
  constructor() {
    this.stars = []
    this.adapter = new StarsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadStars()
//    this.sorting()
  }

  initBindingsAndEventListeners() {
    this.sortButton = document.querySelector('#sort-star')
    this.filterButton = document.querySelector('#filter-star')
    this.newStarForm = document.getElementById('new-star-form')
    this.newStarName = document.getElementById('new-star-name')
    this.newStarDistance = document.getElementById('new-star-distance')
    this.newStarMagnitude = document.getElementById('new-star-magnitude')
    this.newStarMass = document.getElementById('new-star-mass')
    this.newStarImage = document.getElementById('new-star-image')
    this.newStarForm.addEventListener('submit', this.createNewStar.bind(this))
    this.sortButton.addEventListener('click', this.sorting.bind(this))
    this.filterButton.addEventListener('click', this.filterStars.bind(this))
    //when the star is submitted, bind the Stars object as this, or the this will become the form itself
  }

  // creates/forms star and sets all the attributes to value.
  formStar(nameValue, distanceValue, magnitudeValue, massValue, imageValue) {
  //  debugger
    const star = {
      name: nameValue,
      distance: distanceValue,
      magnitude: magnitudeValue,
      mass: massValue,
      image: imageValue
    };

    return fetch(this.adapter.baseUrl, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // stringify converts the star's params to JSON string
      body:JSON.stringify(star)
    })
    .then(res => res.json())
    .catch(error => console.log("Error: " + error))
  }

  createNewStar(e) {
  //  console.log(this)
    e.preventDefault(); //pass in event object and prevents the default of page refresh on form submit
    const nameValue = this.newStarName.value;
    const distanceValue = this.newStarDistance.value;
    const magnitudeValue = this.newStarMagnitude.value;
    const massValue = this.newStarMass.value;
    const imageValue = this.newStarImage.value;

    this.formStar(nameValue,distanceValue,magnitudeValue,massValue,imageValue)
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

  filterStars() {
    document.getElementById("stars-data").innerHTML = "";
    this.filteredStars = []
    fetch(this.adapter.baseUrl).then(res => res.json())
    .then(stars => {
    //  console.log(stars)
      const result = stars.filter(star => star.name == "Barnard's Star");
    //  console.log(result)
      result.forEach(star => this.filteredStars.push(new Star(star)))
    //  debugger
      this.filteredStars.map(star => star.renderStarBlock())
    //  debugger
    })
  }

  sorting() {
    document.getElementById("stars-data").innerHTML = "";
    this.sortedStars = [] //empties the array so that it doesn't add on to previous array
    fetch(this.adapter.baseUrl).then(res => res.json())
    .then(stars => {
    //  console.log(stars)
       stars.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      stars.forEach(star => this.sortedStars.push(new Star(star)))
    //  console.log(stars)
    //  this.stars.map(star => star.renderStarBlock())
      this.renderStars()
    })

  }

  fetchAndLoadStars() {
    this.adapter
      .getStars()
      .then(stars => {
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
