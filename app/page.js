"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Bookmark from "./components/Bookmark";
import Converter from "./components/Converter";
import CPDF from "./components/CPDF";
import Footer from "./components/Footer";
const Page = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Navbar onsearch={handleSearch} />
      <Bookmark searchValue={searchValue} />
      <Converter searchValue={searchValue} />
      <CPDF searchValue={searchValue} />
      <Converter searchValue={searchValue} />
      <Footer />
    </>
  );
};

export default Page;
