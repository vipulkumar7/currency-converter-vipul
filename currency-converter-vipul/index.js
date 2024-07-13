import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_M8Gq1lPOcFmg6xGXKDiy2q2XzSktDnhWZSdKYlMm"
);

export const currencyCoverter = async (fromCurrency, toCurrency, units) => {
  const result = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const convertedCurrency = result.data[toCurrency];
  return convertedCurrency * units;
};
