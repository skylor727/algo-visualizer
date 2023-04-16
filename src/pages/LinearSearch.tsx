import { useState } from "react";
import ArrayNumberBox from "~/components/ArrayNumberBox";

export const LinearSearch = () => {
  const array = [1, 2, 4, 5, 6, 7, 8, 9, 10];
  const target = 7;
  const [currentNumber, setCurrentNumber] = useState(null);
  const [searching, setSearching] = useState(false);
  return (
    <div className="container">
      <span className="mr-2 inline-block">Array: </span>
      <ul className="inline-block">
        {array.map((el, idx) => (
          <ArrayNumberBox key={idx} value={el} />
        ))}
      </ul>
      <h2>Target = {target}</h2>
      <button className="btn block">Search</button>
      {searching ?? (
        <div>
          <span className="inline-block">Searching for {target}</span>
          <span className="block">
            Current Number: <ArrayNumberBox value={currentNumber} />
          </span>
        </div>
      )}
    </div>
  );
};

export default LinearSearch;
