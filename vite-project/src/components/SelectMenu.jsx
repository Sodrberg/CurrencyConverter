import React, { useEffect } from "react";

function SelectMenu({ currencies, selectedCurrency, setSelectedCurrency }) {
  if (!currencies.rates) {
    return <div>Loading...</div>;
  }

  const currencyOptions = Object.entries(currencies.rates).map(([currency]) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));

  return (
    <div className="border border-black w-full overflow-hidden rounded-lg">
      <select
        className="w-full py-2 pl-3 pr-10 text-sm text-gray-900"
        value={selectedCurrency}
        onChange={(e) => {
          setSelectedCurrency(e.target.value);
        }}
      >
        <option>select a currency</option>
        {currencyOptions}
      </select>
    </div>
  );
}

export default SelectMenu;
