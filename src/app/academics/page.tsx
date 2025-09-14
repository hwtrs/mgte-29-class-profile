import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import "./academics.scss"
import GenericChart from '../../components/charts/GenericChart';

export default function AcademicsPage() {
  return (
    <ProfileLayout>
      <div className="academics-container">
        <section className="background">
          <span className="bg-banner" />
          <span className="bg-lockers" />
          <span className="bg-title" />
        </section>

      </div>
    </ProfileLayout>
  );
}
