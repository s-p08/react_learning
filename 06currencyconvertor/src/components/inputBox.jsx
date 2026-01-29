import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountinputid = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex gap-3 items-end ${className}`}>
      {/* Left Side - Amount */}
      <div className="w-1/2">
        <label htmlFor={amountinputid} className="text-black/40 mb-2 inline-block">
          {label}
        </label>

        <input
          id={amountinputid}
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5 border-b border-gray-300"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmmountChange && onAmmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right Side - Currency */}
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-black/40 mb-2 w-full text-right">Currency Type</p>

        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
