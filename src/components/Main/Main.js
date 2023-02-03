import List from "../List/List.js";

function Main() {
  return (
    <main className="max-w-lg md:max-w-2xl mx-auto px-5 pb-2">
      <h2 className="text-xl md:text-3xl text-center font-bold text-gray-900 my-6">
        All Breweries
      </h2>
      <List />
    </main>
  );
}

export default Main;
