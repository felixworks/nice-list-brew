import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config.js";
import { v4 as uuidv4 } from "uuid";
import Brewery from "../Brewery/Brewery.js";

function List() {
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {
    const fetchBreweries = async () => {
      const result = await fetch(`${API_BASE_URL}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("response of fetchBreweries", response);
          setBreweries(response);
        });
    };
    fetchBreweries();
  }, []);
  console.log("state of breweries", breweries);

  const addBrewery = (newBrewery) => {
    setBreweries([...breweries, newBrewery]);
  };

  const updateBrewery = (updatedBrewery) => {
    console.log("updating brewery", updatedBrewery);
    setBreweries(
      breweries.map((brewery) =>
        brewery.id === updatedBrewery.id ? {...brewery, ...updatedBrewery} : brewery
      )
    );
  };

  const deleteBrewery = (id) => {
    setBreweries(breweries.filter((brewery) => brewery.id !== id));
  };

  return (
    <>
      <ul>
        {breweries.length > 0
          ? breweries.map((item, index) => {
              return (
                <Brewery
                  key={item.id}
                  breweryData={item}
                  updateBrewery={updateBrewery}
                  deleteBrewery={deleteBrewery}
                />
              );
            })
          : "No results"}
      </ul>
      <button onClick={() => addBrewery({ id: uuidv4(), name: "New Brewery" })}>
        Add Brewery
      </button>
    </>
  );
}

export default List;
