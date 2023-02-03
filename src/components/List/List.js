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
          setBreweries(response);
        });
    };
    fetchBreweries();
  }, []);

  const addBrewery = (newBrewery) => {
    setBreweries([...breweries, newBrewery]);
  };

  const updateBrewery = (updatedBrewery) => {
    setBreweries(
      breweries.map((brewery) =>
        brewery.id === updatedBrewery.id
          ? { ...brewery, ...updatedBrewery }
          : brewery
      )
    );
  };

  const deleteBrewery = (id) => {
    setBreweries(breweries.filter((brewery) => brewery.id !== id));
  };

  return (
    <>
      <ul className="list-none">
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
      <button
        className="block mx-auto bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded m-5"
        onClick={() =>
          addBrewery({
            id: uuidv4(),
            name: "New Brewery",
            brewery_type: "Example Type",
            city: "Example City",
            state: "Example State",
          })
        }
      >
        Add Brewery
      </button>
    </>
  );
}

export default List;
