const API_TOKEN = "cbe364327a49b1c86ffcc7c688737058"

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}


export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }


