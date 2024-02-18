import React from "react";

function Test(props) {
  const { currencies } = props;

  if (!currencies.rates) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Conversion Rates</h2>

      <select onChange={(e) => {
        console.log(e.target.value)
      }}>
        {Object.entries(currencies.rates).map(([currency]) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Test;
