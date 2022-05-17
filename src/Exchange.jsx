// write an appllication fetching a data from https://v6.exchangerate-api.com/v6/2b4a22f2934a0dc9f5c28854/latest/USD
import React, { useState, useEffect, useRef } from 'react';

function Exchange() {
  const [Exchange, setExchange] = useState({});
  useEffect(() => {
    const fetchExchange = async () => {
      const url =
        'https://v6.exchangerate-api.com/v6/2b4a22f2934a0dc9f5c28854/latest/USD';
      const res = await fetch(url);
      const data = await res.json();
      setExchange(data.conversion_rates);
      console.log(data.conversion_rates.USD);
    };
    fetchExchange();
  }, []);

  const exchangeHandler = (e) => {
    console.log(e.target.value);
    setExchange(e.target.value);
    console.log(element);
  };
  let element;
  return (
    <>
      <input name="exchange" type="number" />
      <select>
        {' '}
        <option value="USD" selected>
          USD
        </option>{' '}
      </select>
    </>
  );
}

export default Exchange;
