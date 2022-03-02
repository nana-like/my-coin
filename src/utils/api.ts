const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchTickers() {
  return await (await fetch(`${BASE_URL}/tickers`)).json();
}

export async function fetchCoinDetail(coinId: string | undefined) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinHistory(coinId: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return await (
    await fetch(
      `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    )
  ).json();
}

// export async function fetchCoinTickers(coinId: string) {
//   return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
// }

// export async function fetchAllCoinTickers() {
//   return await (await fetch(`${BASE_URL}/tickers`)).json();
// }
