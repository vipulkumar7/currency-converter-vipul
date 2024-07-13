import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const freecurrencyapi = process.env.FREQUENCY_API_KEY;

export const currencyCoverter = async (fromCurrency, toCurrency, units) => {
  const result = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const convertedCurrency = result.data[toCurrency];
  return convertedCurrency * units;
};
