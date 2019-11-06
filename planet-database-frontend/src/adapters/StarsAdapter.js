class StarsAdapter{
  constructor() {
    this.baseUrl = 'http://localhost:3000/stars'
  }

  getStars() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createStar(nameValue, distanceValue, magnitudeValue, massValue, imageValue) {
    const star = {
      name: nameValue,
      distance: distanceValue,
      magnitude: magnitudeValue,
      mass: massValue,
      image: imageValue

    };
    return fetch(this.baseUrl, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(star)
    })
    .then(res => res.json())
  }
}
