import './EaringsBusiness.css';
import BusinessImage from '../assets/e1.jpg';
import E1 from '../assets/e2.jpg';
import E2 from '../assets/e3.jpg';
import E3 from '../assets/e4.jpg';
import E4 from '../assets/e5.jpg';
import E5 from '../assets/e6.jpg';
import E6 from '../assets/e7.jpg';
import E7 from '../assets/e8.jpg';

function EaringsBusiness() {
  const products = [
    { title: "Golden Hoop", image: E1 },
    { title: "Pearl Drop", image: E2 },
    { title: "Crystal Bloom", image: E3 },
    { title: "Twilight Stone", image: E4 },
    { title: "Elegant Feather", image: E5 },
    { title: "Vintage Glam", image: E6 },
    { title: "Chic Orbit", image: E7 },
  ];

  return (
    <section className="earings-business" id="albatraoz">
      <div className="earings-container">
        {/* Main Image on left */}
        <div className="earings-image">
          <img src={BusinessImage} alt="Earings by Albatraoz LK" />
        </div>

        {/* Description text on right */}
        <div className="earings-text">
          <h2>Earings by Albatraoz LK</h2>
          <p>
            A bold extension of Angela Guruge’s creativity — "Earings by Albatraoz LK" delivers
            handcrafted, elegant, and trend-setting earrings that amplify every look.
            Inspired by fashion, made with passion.
          </p>
          <p>
            ✨ Custom Designs | 💎 Elegant Materials | 🚚 Island-wide Delivery
          </p>
        </div>
      </div>

      {/* Gallery Section - 4 items per row */}
      <div className="earings-gallery">
        {products.map((product, index) => (
          <div className="earings-item" key={index}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EaringsBusiness;
