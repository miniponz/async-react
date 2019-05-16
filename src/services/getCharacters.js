export default function getCharacters() {
  return fetch('//rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(json => json.results);
}
