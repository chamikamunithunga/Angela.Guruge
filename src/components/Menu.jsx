import './AboutHer.css';
import ProfileImage from '../assets/4.jpg'; // Use one elegant image

function AboutHer() {
  return (
    <section className="about-hero" id="about">
      <div className="about-container">
        {/* Left Side - 3D Image */}
        <div className="about-image">
          <img src={ProfileImage} alt="Angela Guruge" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h2>About Angela Guruge</h2>
          <p>
            Angela Guruge is a passionate and confident model known for her unique sense of style
            and graceful presence. With creativity at her core and elegance in every frame,
            she turns ordinary moments into timeless visuals. Her work reflects not just fashion,
            but a story of boldness, inspiration, and artistic expression.
          </p>

          <ul>
            <li><strong>Grace:</strong> Effortless elegance in every pose.</li>
            <li><strong>Passion:</strong> Driven by love for the art of modeling.</li>
            <li><strong>Style:</strong> A fashion sense that captivates and leads trends.</li>
            <li><strong>Creativity:</strong> Bringing imagination to life through every shoot.</li>
            <li><strong>Confidence:</strong> Owning the camera with strength and poise.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutHer;
