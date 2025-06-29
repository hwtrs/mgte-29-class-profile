"use client";

import React, { useState } from 'react';
import "./landing.scss";
import stickers from "../data/stickers";
import { useBreakpoint } from "../utils/useBreakpoint";

const Home = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);
  const breakpoint = useBreakpoint();

  // TODO: 
  // fix hover and active sizing for stickers
  // test responsiveness

  return (
    <div className="landing-container">
      <div className="book-container">
        <img src="/landing/book.png" />
        <img src="/landing/corner_book_purple.png"/>
        <img src="/landing/corner_paper.png"/>

        <div className="stickers">
          {Object.values(stickers).map((sticker) => {
            let src = sticker.src;
            if (
              (sticker.className === "about-sticker" || sticker.className === "demographics-sticker") 
              && breakpoint !== "lg" && 'smallSrc' in sticker && sticker.smallSrc
            ) {
              src = sticker.smallSrc;
            } else if (clicked === sticker.className && sticker.activeSrc) {
              src = sticker.activeSrc;
            } else if (hovered === sticker.className && sticker.hoverSrc) {
              src = sticker.hoverSrc;
            }

            return (
              <a
                href={sticker.href}
                key={sticker.className}
                className={sticker.className}
                onMouseEnter={() => setHovered(sticker.className)}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setClicked(sticker.className)}
                onMouseUp={() => setClicked(null)}
                onBlur={() => setClicked(null)}
              >
                <img src={src} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;