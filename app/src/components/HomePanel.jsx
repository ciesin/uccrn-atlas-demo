import React, { useEffect } from 'react';
import './Components.css';

const HomePanel = ({ isOpen, onClose }) => {
  // Add effect to handle UI position changes
  useEffect(() => {
    // Function to adjust UI elements when panel opens/closes
    const adjustUI = () => {
      const topRightUI = document.querySelector('.esri-ui-top-right');
      const bottomRightUI = document.querySelector('.esri-ui-bottom-right');
      
      if (topRightUI) {
        if (isOpen) {
          topRightUI.classList.add('shifted-for-panel');
        } else {
          topRightUI.classList.remove('shifted-for-panel');
        }
      }
      
      if (bottomRightUI) {
        if (isOpen) {
          bottomRightUI.classList.add('shifted-for-panel');
        } else {
          bottomRightUI.classList.remove('shifted-for-panel');
        }
      }
      
      // Also adjust logo and other custom UI elements
      const logoContainer = document.querySelector('.logo-container');
      const infoDiv = document.querySelector('.infoDiv');
      
      if (logoContainer) {
        logoContainer.classList.toggle('shifted-for-panel', isOpen);
      }
      
      if (infoDiv) {
        infoDiv.classList.toggle('shifted-for-panel', isOpen);
      }
    };
    
    // Call the function whenever the panel state changes
    adjustUI();
    
    // Small timeout to ensure UI is updated after DOM changes
    const timeoutId = setTimeout(adjustUI, 50);
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  // Make sure there are no transforms or 3D effects applied to elements that might 
  // affect the home button by class inheritance

  useEffect(() => {
    // Find the home button and remove any box shadow
    const removeBoxShadow = () => {
      const homeButton = document.querySelector('[data-button-id="home-panel-toggle"]');
      
      if (homeButton) {
        // Apply inline styles to override any CSS box shadow
        homeButton.style.boxShadow = 'none';
        homeButton.style.webkitBoxShadow = 'none';
        homeButton.style.mozBoxShadow = 'none';
        homeButton.style.transform = 'none';
        homeButton.style.border = 'none';
        
        // Also remove any classes that might be adding box shadow
        homeButton.classList.forEach(className => {
          if (className.includes('shadow') || className.includes('3d')) {
            homeButton.classList.remove(className);
          }
        });
        
        // Check parent elements too
        let parent = homeButton.parentElement;
        while (parent && parent.classList.contains('esri-component')) {
          parent.style.boxShadow = 'none';
          parent.style.webkitBoxShadow = 'none';
          parent.style.mozBoxShadow = 'none';
          parent = parent.parentElement;
        }
      }
    };
    
    // Execute immediately
    removeBoxShadow();
    
    // Also set up an interval to keep checking (in case of dynamic UI changes)
    const intervalId = setInterval(removeBoxShadow, 500);
    
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [isOpen]);

  return (
    <div className={`side-panel home-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <h2>Welcome to UCCRN City Solutions Case Study Atlas</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close panel">×</button>
      </div>
      
      <div className="panel-content">
        <section className="panel-section">
          <h3>Welcome to the Climate Atlas</h3>
          <p>
            The Urban Climate Change Research Network (UCCRN) Climate Atlas is an interactive 
            platform for exploring climate data and projections for cities around the world.
          </p>

          <div className="hero-image">
            <img 
              src="/images/climate-map-preview.jpg" 
              alt="Climate Atlas Map Preview" 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </section>

        <section className="panel-section">
          <h3>Getting Started</h3>
          <p>Use the map tools to explore climate data:</p>
          <ul className="feature-list">
            <li>
              <span className="feature-icon">🔍</span>
              <span className="feature-text">Toggle between 2D and 3D views</span>
            </li>
            <li>
              <span className="feature-icon">📊</span>
              <span className="feature-text">Explore different climate datasets</span>
            </li>
            <li>
              <span className="feature-icon">📅</span>
              <span className="feature-text">Use the time slider for temporal data</span>
            </li>
            <li>
              <span className="feature-icon">🌐</span>
              <span className="feature-text">Compare data across different regions</span>
            </li>
          </ul>
        </section>

        <section className="panel-section">
          <h3>Featured Cities</h3>
          <div className="featured-cities">
            <button className="city-button" onClick={() => console.log("Navigate to New York")}>
              New York
            </button>
            <button className="city-button" onClick={() => console.log("Navigate to London")}>
              London
            </button>
            <button className="city-button" onClick={() => console.log("Navigate to Tokyo")}>
              Tokyo
            </button>
            <button className="city-button" onClick={() => console.log("Navigate to Paris")}>
              Paris
            </button>
            <button className="city-button" onClick={() => console.log("Navigate to Shanghai")}>
              Shanghai
            </button>
            <button className="city-button" onClick={() => console.log("Navigate to São Paulo")}>
              São Paulo
            </button>
          </div>
        </section>
        
        <section className="panel-section action-section">
          <button className="primary-btn">Explore All Data</button>
          <button className="secondary-btn">Learn More</button>
        </section>
        
        <footer className="panel-footer">
          <p>UCCRN Climate Atlas <span className="version">v1.0 Beta</span></p>
          <p className="copyright">© 2025 Urban Climate Change Research Network</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePanel;