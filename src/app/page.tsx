"use client";

import React, { useState } from 'react';
import "./landing.scss";
import stickers from "../data/stickers";

const Home = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);

  // TODO: fix stickers absolute positioning on screen resize, sticker hover not correct

  return (
    <div className="landing-container">
      <div className="book-container">
        <img src="/landing/book.png" />
        <img src="/landing/corner_book_purple.png"/>
        <img src="/landing/corner_paper.png"/>

        <div className="stickers">
          {Object.values(stickers).map((sticker) => {
            let src = sticker.src;
            if (clicked === sticker.className && sticker.activeSrc) {
              src = sticker.activeSrc;
            } else if (hovered === sticker.className && sticker.hoverSrc) {
              src = sticker.hoverSrc;
            }

            return (
              <a
                href={sticker.href}
                key={sticker.className}
                onMouseEnter={() => setHovered(sticker.className)}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setClicked(sticker.className)}
                onMouseUp={() => setClicked(null)}
                onBlur={() => setClicked(null)}
              >
                <img src={src} className={sticker.className} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;