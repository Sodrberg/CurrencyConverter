import axios from "axios";
import { useEffect, useState } from "react";
import SelectMenu from "./SelectMenu";
import InputForm from "./inputForm";

const apiKey = import.meta.env.VITE_API_KEY;

function Converter({
  currencies,
  selectedCurrencyFrom,
  setSelectedCurrencyFrom,
  selectedCurrencyTo,
  setSelectedCurrencyTo,
  selectedValue,
  setSelectedValue,
}) {
  const [conversionResult, setConversionResult] = useState();

  useEffect(() => {
    if (selectedValue && !isNaN(selectedValue) && Number(selectedValue) > 0) {
      handleConversion();
    }
  }, [selectedValue, selectedCurrencyFrom, selectedCurrencyTo]);

  async function handleConversion() {
    const result = await convertCurrency(
      selectedCurrencyFrom,
      selectedCurrencyTo,
      selectedValue
    );
    setConversionResult(result.result);
  }

  const handleFlip = () => {
    setSelectedCurrencyFrom(selectedCurrencyTo);
    setSelectedCurrencyTo(selectedCurrencyFrom);
  };

  const convertCurrency = async (
    selectedCurrencyFrom,
    selectedCurrencyTo,
    selectedValue
  ) => {
    const options = {
      method: "GET",
      url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
      params: {
        from: selectedCurrencyFrom,
        to: selectedCurrencyTo,
        amount: selectedValue,
      },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center border-4 border-customRed rounded-md ">
      <h1 className="text-3xl mt-5">Currency converter</h1>
      <hr className="border-t border-customRed w-[70%]" />
      <div className="flex flex-col gap-20 mx-24 mt-24 mb-24">
        <div className="flex flex-col gap-20">
          <div className="sm:flex gap-12 ">
            <div>
              <span>From</span>
              <SelectMenu
                currencies={currencies}
                selectedCurrency={selectedCurrencyFrom}
                setSelectedCurrency={setSelectedCurrencyFrom}
              />
            </div>
            <div className="flex mt-4 bg-slate-200 justify-center items-center rounded-full w-12 h-12 border border-black">
              <button
                onClick={handleFlip}
                className="flex justify-center items-center b"
              >
                <img
                  src="https://img.icons8.com/pastel-glyph/64/sorting-arrows-horizontal--v2.png"
                  alt="sorting-arrows-horizontal--v2"
                  className="w-8 h-auto"
                />
              </button>
            </div>
            <div>
              <span>To</span>
              <SelectMenu
                currencies={currencies}
                selectedCurrency={selectedCurrencyTo}
                setSelectedCurrency={setSelectedCurrencyTo}
              />
            </div>
          </div>
          <div className="">
            <span>Amount</span>
            <InputForm
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </div>
        </div>
        <div className="flex gap-20 justify-center">
          <span className="text-xl">
            {selectedValue} {selectedCurrencyFrom} ={" "}
          </span>
          <span className="text-xl">
            {conversionResult} {selectedCurrencyTo}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Converter;
