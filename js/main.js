// Nasa APOD API hitter

document.querySelector('.nasaButton').addEventListener('click', getNasa)


function getNasa() {
  const choice = document.querySelector('.nasaDateInput').value;
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=I0Az7cvwTWNeVWlfyDmHNN2dphVpFO0u6GJBL5tT&date=${choice}`
  console.log('got this far')
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data);
    if (data.media_type === 'image') {
      document.querySelector('.nasaImg').src = data.hdurl;
      document.querySelector('.nasah2').innerText = data.title;
      document.querySelector('.explanation').innerText = data.explanation;
    }
    else if (data.media_type === 'video') {
      document.querySelector('.nasah2').appendChild('iframe').src = data.url
    }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
