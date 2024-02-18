import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Chart({
  currencies,
  selectedCurrencyTo,
  selectedCurrencyFrom,
  symbols,
}) {
  const [chart, setChart] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setChart(
      currencies.rates ? (
        Object.entries(currencies.rates).map(([currency, rates]) => (
          <li key={currency} className="w-full mb-5 rounded-md ">
            <button
              onClick={() => navigate(`/currency/${currency}`)}
              className="hover:text-blue-500 flex items-center justify-center"
            >
              <div className="flex gap-24">
                <p>
                  {symbols.symbols?.[currency] ?? ""} ({currency})
                </p>
              </div>
              <div>
                <p>{rates}</p>
              </div>
            </button>
          </li>
        ))
      ) : (
        <li>Loading or no data available</li>
      )
    );
  }, [selectedCurrencyFrom, selectedCurrencyTo, currencies]);

  return (
    <div className="flex flex-col border-4 border-customRed rounded-md text-xl w-full items-center">
      <div className="flex flex-col items-center border-black bg-customGreen w-full">
        <p className="mt-5">Click on a currency for more info</p>
        <p>1 EUR = </p>
        <hr className="border-t border-customRed w-[70%] my-4" />
      </div>
      <div className="bg-customGreen p-5">
        <ul className="max-h-64 overflow-y-auto w-full list-none">{chart}</ul>
      </div>
    </div>
  );
}

export default Chart;

console.log("rerender Chart");
