"use client";
import React, { useState } from "react";
import Link from "next/link";
const Navbar = ({ onsearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
    onsearch(event.target.value);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar flex-2">
            <div className="logo">
              <i className="fa-solid fa-gear text-light"></i>
              <span>ZinTools</span>
            </div>

            <form>
              <div className="search-bar">
                <input
                  type="text"
                  name="search"
                  className="search"
                  placeholder="Search for Movie, TV Shows, Themes & Cast"
                  value={searchValue}
                  onChange={handleSearchInputChange}
                />
                <button type="submit" className="search-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>

            <div className="btns">
              <button className="btn bg-light">Login</button>
              <button className="btn purple bg-primary">Sign Up</button>
            </div>
            <i className="fa-solid fa-bars" id="menu"></i>
          </nav>

          <section className="crumber">
            <ul className="list">
              <li>
                <Link href="#">Stock Video</Link>
              </li>
              <li>
                <Link href="#">Video template</Link>
              </li>
              <li>
                <Link href="#">Music</Link>
              </li>
              <li>
                <Link href="#">Sound Effect</Link>
              </li>
              <li>
                <Link href="#">Graphic Template</Link>
              </li>
              <li>
                <Link href="#">Graphic</Link>
              </li>
              <li>
                <Link href="#">Presentation Tempalte</Link>
              </li>
              <li>
                <Link href="#">Photo</Link>
              </li>
              <li>
                <Link href="#">Fonts</Link>
              </li>
              <li>
                <Link href="#">Add ons</Link>
              </li>
              <li>
                <Link href="#">More</Link>
              </li>
            </ul>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
