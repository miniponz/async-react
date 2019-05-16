export default function getQuotes(count) {
  return fetch(`//futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.json());
}
