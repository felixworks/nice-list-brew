import React, { useState } from "react";

function Brewery({ breweryData, updateBrewery, deleteBrewery }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: breweryData.id,
    name: breweryData.name,
    brewery_type: breweryData.brewery_type,
    city: breweryData.city,
    street: breweryData.street,
    website_url: breweryData.website_url,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBrewery(formData);
    setEditing(false);
  };

  return (
    <li className={breweryData.id}>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="brewery_type"
            value={formData.brewery_type}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          <input
            type="text"
            name="website_url"
            value={formData.website_url}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h3>
            <a href={breweryData.website_url} target="_blank">
              {breweryData.name}
            </a>
          </h3>
          <div>Brewery Type: {breweryData.brewery_type}</div>
          <div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                breweryData.name
              )}%20${encodeURIComponent(breweryData.street)}`}
            >
              {breweryData.city}
            </a>
          </div>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteBrewery(breweryData.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Brewery;