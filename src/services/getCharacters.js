export default function getCharacters(page) {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json());
}
