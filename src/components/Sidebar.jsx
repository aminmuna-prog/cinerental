import React from "react";
import comingsoon from "../assets/icons/commingSoon.svg";
import favourite from "../assets/icons/favourite.svg";
import newrealese from "../assets/icons/newRelease.svg";
import trending from "../assets/icons/trending.svg";
import watchlater from "../assets/icons/watchLater.svg";

export default function Sidebar() {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={trending} width="24" height="24" alt="trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={newrealese} width="24" height="24" alt="newrealese" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={comingsoon} width="24" height="24" alt="comingsoon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={favourite} width="24" height="24" alt="favourite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={watchlater} width="24" height="24" alt="watchlater" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
