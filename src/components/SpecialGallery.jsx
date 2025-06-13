import './SpecialGallery.css';

import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';
import Img6 from '../assets/6.jpg';
import Img7 from '../assets/9.jpg';
import Img8 from '../assets/10.jpg';
import Img9 from '../assets/11.jpg';
import Img10 from '../assets/ 21.jpg';
import Img11 from '../assets/12.jpg';
import Img12 from '../assets/13.jpg';
import Img13 from '../assets/ 16.jpg';
import Img14 from '../assets/ 14.jpg';
import Img15 from '../assets/ 15.jpg';
import Img16 from '../assets/7.jpg';
import Img17 from '../assets/ 22.jpg';
import Img18 from '../assets/7.jpg';



import { useState } from 'react';

function SpecialGallery() {
  const galleryItems = [
    { title: "Elegant Sunset", image: Img1, description: "A breathtaking view capturing the golden hour glow." },
    { title: "Mystic Forest", image: Img2, description: "Whispers of nature in the heart of untouched woods." },
    { title: "Urban Vibes", image: Img3, description: "The city’s soul shines through the neon lights." },
    { title: "Serene Waters", image: Img4, description: "Calm waves reflecting a peaceful twilight." },
    { title: "Golden Fields", image: Img5, description: "Sun-kissed fields glowing with warmth." },
    { title: "Crystal Cavern", image: Img6, description: "Shimmering crystals carved by time." },
    { title: "Night Glow", image: Img7, description: "Stars lighting up the serene night." },
    { title: "Ocean Breeze", image: Img8, description: "Gentle waves kissing the shore." },
    { title: "Winter Chill", image: Img9, description: "Frosty mornings wrapped in silence." },
    { title: "Spring Bloom", image: Img10, description: "Flowers bursting with fresh life." },
    { title: "Desert Mirage", image: Img11, description: "Heat waves dancing on golden sand." },
    { title: "Mountain Peaks", image: Img12, description: "Majestic peaks touching the sky." },
    { title: "Autumn Glow", image: Img13, description: "Leaves ablaze in warm, fiery hues." },
{ title: "Misty Morning", image: Img14, description: "Soft fog wrapping the quiet landscape." },
{ title: "Starry Night", image: Img15, description: "A cosmic dance above silent hills." },
{ title: "Golden Hour", image: Img16, description: "Sunlight bathing the world in gold." },
{ title: "Frozen Lake", image: Img17, description: "A crystal mirror of winter's calm." },
{ title: "Tropical Escape", image: Img18, description: "Lush palms swaying in gentle breeze." },

  ];

  const [tiltStyles, setTiltStyles] = useState(Array(galleryItems.length).fill({ transform: 'rotateX(0) rotateY(0)' }));

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxRotate = 15;

    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;

    setTiltStyles(prev => {
      const newStyles = [...prev];
      newStyles[index] = { transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(5deg) scale(1.05)` };
      return newStyles;
    });
  };

  const handleMouseLeave = (index) => {
    setTiltStyles(prev => {
      const newStyles = [...prev];
      newStyles[index] = { transform: 'rotateX(0) rotateY(0) rotateZ(0) scale(1)' };
      return newStyles;
    });
  };

  return (
    <section className="special-gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            className="gallery-card"
            key={index}
            style={tiltStyles[index]}
            onMouseMove={e => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-credit">
        <p><strong>Photography by:</strong> Kaushika Moonwake</p>
        <p><strong>Designer:</strong> Thimayya Tiiiekerathne,Shehani Guruge</p>
        <p><strong>HMU:</strong> malkis miracle makeover</p>
      </div>
    </section>
  );
}

export default SpecialGallery;
