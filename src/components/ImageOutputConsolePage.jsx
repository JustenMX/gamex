/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";

function ImageOutputConsolePage() {
  const [consoleList, setConsoleList] = useState([]);
  const [console, setConsole] = useState([]);
  const getConsoleList = `https://api.rawg.io/api/platforms?key=9165d834ffc64009b09c43f0a1ed0f67`;

  useEffect(() => {
    fetch(getConsoleList)
      .then((response) => response.json())
      .then((data) => setConsoleList(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {/* console cards to start here */}
        {consoleList?.results?.map((r) => {
          return (
            <div
              className="group h-20 md:h-40 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              key={r.id}
            >
              <Link to={`/consoles/${r.id}`}>
                <Img
                  key={r.id}
                  src={r?.image_background}
                  loading="lazy"
                  alt="genres"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </Link>

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="bg-indigo-700 text-white text-sm font-semibold tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                {r?.name}
              </span>
              <span className="text-gray-200 text-xs md:text-sm backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
                {r?.games_count}
              </span>
            </div>
          );
        })}
        {/* console cards to end here */}
      </div>
    </>
  );
}

export default ImageOutputConsolePage;
