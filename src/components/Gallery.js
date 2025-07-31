import React from 'react';
import './Gallery.css'; // We'll style it here

const images = [
  '/images/aloo.jpg',
  '/images/paneer.jpg',
  '/images/restaurant.jpg',
  '/images/hotel.jpg',
  '/images/Hara.jpg',
  '/images/image2.jpg',
  '/images/restaurant.jpg',
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
