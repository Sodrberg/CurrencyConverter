import React from 'react'
import { useParams } from "react-router-dom";


function CurrencyInfo() {
  const {currency} = useParams()

  return (
    <div>CurrencyInfo: {currency}</div>
  )
}

export default CurrencyInfo

console.log("rerender CurrencyInfo")