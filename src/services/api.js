export function getCryptoRates() {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(data => data.json())
}
