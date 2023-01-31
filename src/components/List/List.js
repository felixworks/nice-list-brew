import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config.js";
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
  return (
    <ul>
      {breweries.length > 0
        ? breweries.map((item, index) => {
            return <Brewery key={item.id} breweryData={item} />;
          })
        : "No results"}
    </ul>
  );
}

export default List;
