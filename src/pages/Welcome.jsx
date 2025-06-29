import { Link } from 'react-router-dom';
import './Welcome.css';
import illustration from '../assets/todo-illustration.svg'; // Ensure this image exists


function Welcome() {
  return (
    <div className="welcome-page">
      {/* Purple SVG shape on top */}
      <div className="svg-shape">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#6A5ACD"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,112C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="welcome-content">
        {/* Left Side Text */}
        <div className="welcome-text">
          <h1>Stay Organized. Get Things Done.</h1>
<p>Simplify your daily routine with our smart, minimal to-do list.<br />
Boost your productivity — effortlessly.</p>


          {/* CTA Buttons */}
          <div className="cta-buttons">
  <Link to="/signup" className="btn-blue">Get Started</Link>
  <Link to="/login" className="btn-white">Start free trial for 30 days</Link>

</div>

        </div>

        {/* Right Side Image */}
        <div className="welcome-image">
          <img src={illustration} alt="To-Do Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
