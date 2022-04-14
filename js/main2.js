const url = `https://www.breakingbadapi.com/api/character/random`
  const url2 = `https://www.breakingbadapi.com/api/quotes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data[0].name
        document. querySelector('img').src = data[0].img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    let i = Math.ceil(Math.random()*70)

  fetch(url2)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data[i].quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });