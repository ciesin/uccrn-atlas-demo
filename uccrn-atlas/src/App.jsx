import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

function App() {

  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3YyMzI1IiwiYSI6ImNtN3FzbDN6MjA2aTMyam85Mm9lem1kNHAifQ.voRKPMKXlQKnTsZKiNFcSA'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      zoom: 2,
      attributionControl: false,
      logoPosition: 'top-left'
    });
    
    // Add attribution control with compact setting
    mapRef.current.addControl(new mapboxgl.AttributionControl({
      compact: true
    }));

    // Add navigation controls (zoom buttons and rotation) to the right side
    mapRef.current.addControl(
      new mapboxgl.NavigationControl({ 
        showCompass: true,
        showZoom: true,
        visualizePitch: true
      }), 
      'right'
    );

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div className="app-header">
        <div className="logo-container">
          <div className="beta-badge">Beta</div>
          <h1 className="logo-text">UCCRN Atlas</h1>
        </div>
      </div>
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App