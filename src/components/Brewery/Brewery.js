import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

function Brewery({ breweryData, updateBrewery, deleteBrewery }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: breweryData.id,
    name: breweryData.name,
    brewery_type: breweryData.brewery_type,
    city: breweryData.city,
    state: breweryData.state,
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

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <li
      className={`brewery ${
        editing ? "brewery-editing" : ""
      } bg-slate-700 rounded-md p-6 my-4`}
      data-id={breweryData.id}
    >
      {editing ? (
        <form className="p-6 rounded-lg" onSubmit={handleSubmit}>
          <label className="text-yellow-500 font-bold" htmlFor="name">
            *Name:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="name"
            value={formData.name ?? ""}
            onChange={handleChange}
            autoFocus
            onFocus={handleFocus}
            required
          />
          <label className="text-yellow-500 font-bold" htmlFor="brewery_type">
            *Brewery Type:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="brewery_type"
            value={formData.brewery_type ?? ""}
            onChange={handleChange}
            required
          />
          <label className="text-yellow-500 font-bold" htmlFor="city">
            *City:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="city"
            value={formData.city ?? ""}
            onChange={handleChange}
            required
          />
          <label className="text-yellow-500 font-bold" htmlFor="state">
            *State:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="state"
            value={formData.state ?? ""}
            onChange={handleChange}
            required
          />
          <label className="text-yellow-500 font-bold" htmlFor="street">
            Street:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="street"
            value={formData.street ?? ""}
            onChange={handleChange}
          />
          <label className="text-yellow-500 font-bold" htmlFor="website_url">
            Website URL:
          </label>
          <input
            className="bg-slate-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
            type="text"
            name="website_url"
            value={formData.website_url ?? ""}
            onChange={handleChange}
          />
          <button
            className="block g-transparent hover:bg-blue-300 text-sm text-blue-200 font-semibold hover:text-white border border-blue-200 hover:border-transparent rounded py-1 px-2"
            type="submit"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <h3
            className={`text-lg md:text-2xl font-bold text-yellow-500 ${
              breweryData.website_url ? "hover:text-yellow-400" : ""
            } leading-6`}
          >
            {breweryData.website_url ? (
              <a
                className=""
                href={breweryData.website_url}
                target="_blank"
                rel="noreferrer"
              >
                {breweryData.name}
                &nbsp;
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </a>
            ) : (
              breweryData.name
            )}
          </h3>
          <div className="">
            <a
              className="text-sm md:text-xl text-yellow-600 hover:text-yellow-500"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                breweryData.name
              )}%20${
                breweryData.street ? encodeURIComponent(breweryData.street) : ""
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {breweryData.city}, {breweryData.state}{" "}
              <FontAwesomeIcon icon={faMap} />
            </a>
          </div>
          <div className="text-yellow-600 text-sm md:text-lg capitalize">
            Type: {breweryData.brewery_type}
          </div>
          <div className="flex justify-end gap-1">
            <button
              className="bg-transparent hover:bg-blue-300 text-sm md:text-lg text-blue-200 font-semibold hover:text-white border border-blue-200 hover:border-transparent rounded py-1 px-2"
              onClick={() => {
                setEditing(true);
              }}
            >
              Edit
            </button>
            <button
              className="bg-transparent hover:bg-red-500 text-sm md:text-lg text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded py-1 px-2"
              onClick={() => deleteBrewery(breweryData.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Brewery;
