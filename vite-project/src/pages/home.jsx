import Converter from "../components/Converter";
import React, { useEffect, useState } from "react";
import Chart from "../components/chart";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;


function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [symbols, setSymbols] = useState([])
  const [error, setError] = useState("");
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("EUR");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("SEK");
  const [selectedValue, setSelectedValue] = useState("0");


  useEffect(() => {
    const fetchSymbols = async () => {
      const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setSymbols(response.data)
        console.log(response.data)

      } catch (error) {
        setError(error);
      }
    };
    fetchSymbols()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
        params: {
          from: 'USD',
          to: 'EUR,GBP'
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setCurrencies(response.data)
        console.log(response.data)

      } catch (error) {
        setError(error);
      }
    };
    fetchData()
  },[])


  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-5 bg-customPurple">
      <div className="flex items-center flex-col bg-customGreen mt-10 mb-5">
        <Converter
          currencies={currencies}
          setSelectedCurrencyFrom={setSelectedCurrencyFrom}
          selectedCurrencyFrom={selectedCurrencyFrom}
          setSelectedCurrencyTo={setSelectedCurrencyTo}
          selectedCurrencyTo={selectedCurrencyTo}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
        />
      </div>
      <div className="flex items-center flex-col mb-10">
      <Chart 
        currencies={currencies}
        setSelectedCurrencyFrom={setSelectedCurrencyFrom}
        selectedCurrencyFrom={selectedCurrencyFrom}
        setSelectedCurrencyTo={setSelectedCurrencyTo}
        selectedCurrencyTo={selectedCurrencyTo}
        symbols={symbols}
        setSymbols={setSymbols}
        />
      </div>
    </div>
  );
}

export default Home;

console.log("rerender Home")
