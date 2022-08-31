import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img from "react-cool-img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  const [gameCards, setgameCards] = useState([]);
  const [title, setTitle] = useState("");
  const getGameList = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=12`;

  const filterButtons = [
    "action",
    "Indie",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Playstation 4",
    "Playstation 5",
    "XBOX Series S/X",
    "PC",
  ];

  console.log(filterButtons);

  useEffect(() => {
    fetch(getGameList)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  }, []);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = () => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=12&search=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  };

  return (
    <>
      <NavBar />
      {/* div wrapper */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6"></div>
          {/* searchInput start */}
          <form onSubmit={handleSearch} className="m-6">
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    onClick={handleSearch}
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-100"
                    >
                      <FontAwesomeIcon icon={faSearchengin} />
                    </svg>
                  </button>
                </span>
                <input
                  onChange={handleChange}
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="py-2 pl-10 text-sm rounded-md sm:w-full first-letter:focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                />
              </div>
            </fieldset>
          </form>
          {/* search input ends */}

          {/* filter buttons starts here */}
          <div className="flex justify-start items-end gap-4 mb-6 flex-wrap">
            {/* Filter Buttons */}

            <button
              name="action"
              className="inline-block bg-indigo-500 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              ACTION
            </button>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              INDIE
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              RPG
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              STRATEGY
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              SHOOTER
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              CASUAL
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              SIMULATION
            </a>
          </div>

          <div className="flex justify-start items-end gap-4 mb-6 flex-wrap">
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              PLAYSTATION 4
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              PLAYSTATION 5
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              XBOX SERIES S/X
            </a>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              PC
            </a>
          </div>
          {/* filter buttons ends here */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {/* Start of array map and render */}
            {gameCards?.results?.map((r) => {
              console.log(r?.name);
              return (
                <div
                  key={r.id}
                  className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
                >
                  {/* Link Starts Here */}
                  <Link to={`/games/${r.id}`}>
                    <Img
                      src={r?.background_image}
                      key={r.id}
                      loading="lazy"
                      alt="game-background-image"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    ></Img>
                  </Link>

                  <span className="bg-indigo-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                    {r?.name}
                  </span>
                </div>
              );
            })}
            {/* End of array map and render */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
