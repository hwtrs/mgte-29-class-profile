'use client';

import React from 'react';
import './TeamMember.scss';

interface TeamMemberProps {
  name: string;
  image: string;
  linkedinUrl?: string;
  rotation: number;
  style: React.CSSProperties;
}

export default function TeamMember({ name, image, linkedinUrl, rotation, style }: TeamMemberProps) {
  const combinedStyle = {
    ...style,
    '--hover-rotation': `${rotation}deg`,
  } as React.CSSProperties;

  if (!linkedinUrl) {
    return (
      <span className="team-member team-member--no-link" style={combinedStyle}>
        <img src={image} alt={name} className="team-member__image" draggable={false} />
      </span>
    );
  }

  return (
    <a
      className="team-member"
      style={combinedStyle}
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={name} className="team-member__image" draggable={false} />
    </a>
  );
}
