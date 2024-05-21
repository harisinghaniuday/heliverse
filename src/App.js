import './App.css';

import Navbar from './Components/Navbar';
import logo from './Components/Assets/MotionArtEffect-logo.png';
import stars from './Components/Assets/stars.png';
import rating_icon_1 from './Components/Assets/rating-icon-1.png';
import rating_icon_2 from './Components/Assets/rating-icon-2.png';
import rating_icon_3 from './Components/Assets/rating-icon-3.png';
import magic_stick from './Components/Assets/magic-stick.png';
import browsers from './Components/Assets/browsers.png';
import ui from './Components/Assets/ui.png';
import responsive from './Components/Assets/responsive.png';
import light_weight from './Components/Assets/light-weight.png';
import section from './Components/Assets/section.png';
import page from './Components/Assets/page.png';

function App() {
  return (
    <>
    <Navbar/>
    <body>
      <div className="logo-button">
          <div className="logo">
              <img src={logo}/>
          </div>
          <div className="button">
          Purchase Now
          </div>
      </div>
      <div className="title">
          <div className="left-title">
            <div className="transform">
              <p>Transform Your Website</p>
            </div>
            <div className="with">
              <p>With Motion Art Effect</p>
            </div>
          </div>
          <div className="center-title">
            <div className="attract">
              <p>Attract Your Visitors Attention With Colorful</p>
            </div>
            <div className="motion">
              <p>Motion Art Effect</p>
            </div>
            <div className="unleash">
              <p>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
            </div>
          </div>
      </div>
      <div className="trusted">
        <p>Trusted by thousands of users around the world</p>
      </div>
      <div className="rating">
        <div className="ratings">
          <div className="icon"><img src={rating_icon_1}/></div>
          <div className="rating-content">
            <div className="stars"><img src={stars} alt="" /></div>
            <div className="reviews"><p><b>4.5</b> Score, 9 Reviews</p></div>
          </div>
        </div>
        <div className="ratings">
          <div className="icon"><img src={rating_icon_2} /></div>
          <div className="rating-content">
            <div className="stars"><img src={stars} alt="" /></div>
            <div className="reviews"><p><b>4.5</b> Score, 9 Reviews</p></div>
          </div>
        </div>
        <div className="ratings">
          <div className="icon"><img src={rating_icon_3} /></div>
          <div className="rating-content">
            <div className="stars"><img src={stars} alt="" /></div>
            <div className="reviews"><p><b>4.5</b> Score, 9 Reviews</p></div>
          </div>
        </div>
      </div>
      <div className="text-img">
        <div className="text-width">
          <div className="text">
            <div className="text-title">
              <p>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            </div>
            <div className="text-content">
              <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            </div>
            <div className="text-button">
              Purchase from Envato
            </div>
          </div>
        </div>
        <div className="pointer-img">
          <img src={magic_stick}/>
        </div>
      </div>
      <div className="apply">
        <p>Apply On Any Section Or Enable For Whole Page</p>
      </div>
      <div className="two-containers">
        <div className="container-1">
          <div className="container1-title">
            <p>Apply On Section</p>
          </div>
          <div className="container1-content">
            <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
          </div>
          <div className="container1-img">
            <img src={section} />
          </div>
        </div>
        <div className="container-2">
          <div className="container2-title">
            <p>Apply On Page</p>
          </div>
          <div className="container2-content">
            <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          </div>
          <div className="container2-img">
            <img src={page}/>
          </div>
        </div>
      </div>
      <div className="browser-main-container">
        <div className="browser-container">
          <div className="browser-container-title">
            <p>Supported by All Popular Browsers</p>
          </div>
          <div className="browser-container-content">
            <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
          </div>
          <div className="browser-container-img">
            <img src={browsers}/>
          </div>  
        </div>     
      </div>
      <div className="plugins">
        <div className="plugins-width">
          <div className="plugins-title">
            <p>An All-Round Plugin With Powerful Features</p>
          </div>
          <div className="plugins-content">
            <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="features-container">
          <div className="feature-img">
            <img src={light_weight} />
          </div>
          <div className="feature-title">
            <p>Light Weight</p>
          </div>
          <div className="feature-content">
            <p>Motion Art for Elementor is designed to be lightweight.</p>
          </div>
        </div>
        <div className="features-container">
          <div className="feature-img">
            <img src={responsive} />
          </div>
          <div className="feature-title">
            <p>100% Responsive</p>
          </div>
          <div className="feature-content">
            <p>Create a consistent visual experience across all devices.</p>
          </div>
        </div>
        <div className="features-container">
          <div className="feature-img">
            <img src={ui} />
          </div>
          <div className="feature-title">
            <p>User Friendly Interface</p>
          </div>
          <div className="feature-content">
            <p>Ensure a smooth experience for both applicants and administrators.</p>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>©2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
    </body>
    </>
  );
}

export default App;


