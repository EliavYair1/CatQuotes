import { useState, useEffect } from 'react';
import './Quote.css';
const Quote = () => {
  const [Quote, setQuote] = useState([]);
  let [Counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchText = async () => {
      const url = 'https://cat-fact.herokuapp.com/facts';
      const res = await fetch(url);
      const data = await res.json();
      let result = data.map((item) => item.text);
      setQuote(result);
    };
    fetchText();
  }, []);

  const nextQuote = () => {
    Counter < Quote.length - 1 ? setCounter(++Counter) : setCounter(0);
  };

  const prevQuote = () => {
    Counter === 0 ? setCounter(Quote.length - 1) : setCounter(0);
  };

  return (
    <>
      <div className="wrapper">
        {Quote && (
          <blockquote className="quoteText">"{Quote[Counter]}"</blockquote>
        )}
        <button className="quoteBtns" onClick={() => prevQuote()}>
          prev
        </button>{' '}
        <button className="quoteBtns" onClick={() => nextQuote()}>
          next
        </button>
      </div>
    </>
  );
};

export default Quote;
