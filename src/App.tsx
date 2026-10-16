/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricelistCatalog } from './components/PricelistCatalog';
import { ReservationSection } from './components/ReservationSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndFacilities } from './components/LocationAndFacilities';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';
import { Treatment } from './data/treatments';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (treatmentName?: string) => {
    const el = document.getElementById('reservasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    const el = document.getElementById('reservasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePricelist = () => {
    const el = document.getElementById('layanan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearSelectedTreatment = () => {
    setSelectedTreatment(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-pink-100 selection:text-pink-700">
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplorePricelist={handleExplorePricelist}
        />

        {/* Treatment Catalog & Pricelist */}
        <PricelistCatalog
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Online Reservation & WhatsApp Section */}
        <ReservationSection
          selectedTreatment={selectedTreatment}
          onClearSelectedTreatment={handleClearSelectedTreatment}
        />

        {/* Real Clinic Photo Gallery */}
        <GallerySection />

        {/* Customer Google Reviews (5.0 / 374 reviews) */}
        <ReviewsSection />

        {/* Clinic Location, Map & Facilities */}
        <LocationAndFacilities />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
