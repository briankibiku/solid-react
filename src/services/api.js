export async function getCryptoRates() {
  return await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(
    (data) => data.json()
  );
}
