import { ReactNode } from 'react';
import './profilelayout.scss';

interface ProfileLayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="profile-layout">
      <body>{children}</body>
    </div>
  );
}