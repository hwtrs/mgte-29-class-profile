import { ReactNode } from 'react';
import '../styles/profileLayout.scss';

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