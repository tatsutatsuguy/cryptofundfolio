import React, { useState, createContext } from "react";
import CoinTable from "./CoinTable";
import "./CoinSearch.css";

const coinPassed = createContext();

function CoinSearch() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="coinSearchCointainer">
        <div className="coinSearch">
          <h3 className="coinText">Search for a Coin</h3>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coinInput"
              onChange={handleChange}
            />
          </form>
        </div>
        <coinPassed.Provider value={search}>
          <CoinTable />
        </coinPassed.Provider>
      </div>
    </div>
  );
}

export default CoinSearch;
export { coinPassed };
