import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { GifGrid } from "./components/GifGrid/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  const onAddGif = (newGif) => {
    if (categories.includes(newGif)) return;
    setCategories([newGif, ...categories]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <SearchBar onNewSearch={onAddGif}></SearchBar>
      {categories.map((category) => (
        <section key={category}>
          <h3>"{category}"</h3>
          <GifGrid category={category}></GifGrid>
        </section>
      ))}
    </>
  );
};
