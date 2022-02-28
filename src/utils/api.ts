const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchTickers() {
  return await (await fetch(`${BASE_URL}/tickers`)).json();
}

// export async function fetchCoins() {
//   return await (await fetch(`${BASE_URL}/coins`)).json();
// }

export async function fetchCoinDetail(coinId: string | undefined) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

// export async function fetchCoinTickers(coinId: string) {
//   return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
// }

// export async function fetchAllCoinTickers() {
//   return await (await fetch(`${BASE_URL}/tickers`)).json();
// }
