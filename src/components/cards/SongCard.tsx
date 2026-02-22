'use client';

import React from 'react';
import './SongCard.scss';

interface SongCardProps {
  title: string;
  artist: string;
  image: string;
  spotifyTrackId: string;
  rotation: number;
}

export default function SongCard({ title, artist, image, spotifyTrackId, rotation }: SongCardProps) {
  return (
    <a
      className="song-card"
      style={{ '--hover-rotation': `${rotation}deg` } as React.CSSProperties}
      href={`https://open.spotify.com/track/${spotifyTrackId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="song-card__image"
        src={image}
        alt={`${title} by ${artist}`}
        draggable={false}
      />
    </a>
  );
}
