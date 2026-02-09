"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import "./landing.scss";
import stickers from "../data/stickers";
import { useBreakpoint } from "../utils/useBreakpoint";

const Home = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);
  const breakpoint = useBreakpoint();

  return (
    <div className="landing-container">
      <div className="book-container">
        <img src="/landing/book.png" alt="MGTE 29 Class Profile book" />
        <img src="/landing/corner_book_purple.png" alt="Book corner decoration" />
        <img src="/landing/corner_paper.png" alt="Paper decoration" />

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

            const stickerLabel = sticker.className.replace('-sticker', '').replace('-', ' ');

            return (
              <Link
                href={sticker.href}
                key={sticker.className}
                className={sticker.className}
                onMouseEnter={() => setHovered(sticker.className)}
                onMouseLeave={() => setHovered(null)}
                onMouseDown={() => setClicked(sticker.className)}
                onMouseUp={() => setClicked(null)}
                onBlur={() => setClicked(null)}
              >
                <img src={src} alt={stickerLabel} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;