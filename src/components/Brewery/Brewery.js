function Brewery({ breweryData }) {
  return (
    <li className={breweryData.id}>
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
    </li>
  );
}

export default Brewery;
