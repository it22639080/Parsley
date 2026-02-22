import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div className="container">
      {/* Left Content */}
      <div className="content">
        <h1 className="title">Parsley</h1>

        <div className="basic-info">
          <p><strong>Family:</strong> Umbelliferae</p>
          <p><strong>Scientific Name:</strong> <i>Petroselinum crispum</i></p>
          <p>
            Parsley is a herb belonging to the carrot family. It grows up to 45cm
            in height and has aromatic, curved or flat pinnate leaves. The plant
            produces delicate, open clusters of yellow flowers.
          </p>
        </div>

        <div className="section">
          <h2>Soil Requirement</h2>
          <p>Grows best in moist, well-drained, loamy soil with pH 6–7.</p>
        </div>

        <div className="section">
          <h2>Climatic Requirement</h2>
          <p>Best growth between 22–30°C. Requires full sunlight with partial shading.</p>
        </div>

        <div className="section">
          <h2>Spacing</h2>
          <p>15–25 × 20 cm</p>
        </div>

        <div className="section">
          <h2>fertilizer Aplication </h2>
          <p>Mix in compost or a general, slow-release fertilizer into the soil before planting to provide essential nutrients, as parsley benefits from nutrient-rich soil.</p>
        </div>

        <div className="section">
          <h2>Diseases</h2>
          <p>Leaf spot, Stem rot</p>
        </div>

        <div className="section">
          <h2>Harvesting & Post-Harvest Practices</h2>
          <p>
            Harvest when leaf stems have three segments. Cut leaves from the outer
            portions of the plant. Harvest continuously throughout the growing period.
          </p>
        </div>
        <div className="section presentation">
          <h2>Presentation</h2>
          <p>
            View my presentation here:{" "}
            <a 
              href="https://docs.google.com/presentation/d/1OCXrAvkbYBeTn3u2oEvd2V4Od41_WoPF/edit?usp=drive_link&ouid=114584261488117709248&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Google Slides Presentation
            </a>
          </p>
        </div>
        
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img
          src="./back.jpeg"
          alt="Parsley plant"
        />
      </div>
    </div>
  )
}

export default App
