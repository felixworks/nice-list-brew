function Brewery({breweryData}) {
  return <li className={breweryData.id}>{breweryData.name}</li>;
}

export default Brewery;
