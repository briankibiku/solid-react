<<<<<<< HEAD
export function getCryptoRates() {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(data => data.json())
}
=======
export async function getCryptoRates() {
  return await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(
    (data) => data.json()
  );
}
>>>>>>> 670d6aa4e968d9d82f494f46237490faf7bff845
