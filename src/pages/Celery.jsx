import './Pages.css';

function Celery() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Celery</h1>
        <div className="basic-info">
          <p><strong>Family:</strong> Apiaceae (Umbelliferae)</p>
          <p><strong>Scientific Name:</strong> <i>Apium graveolens</i></p>
          <p>
            Celery is a leafy vegetable grown mainly for its long, crunchy stalks. 
            It is commonly used in salads, soups, and cooking for flavor.
          </p>
        </div>

        <div className="section">
          <h2>Soil Requirements</h2>
          <p>Well-drained, fertile soil. Rich in organic matter. Loamy soil is best. pH: 6.0–7.0</p>
        </div>

        <div className="section">
          <h2>Climatic Requirements</h2>
          <p>Cool-season crop, ideal temperature 15–21°C. Requires high humidity.</p>
        </div>

        <div className="section">
          <h2>Spacing</h2>
          <p>Row to row: 45–60 cm. Plant to plant: 20–30 cm.</p>
        </div>

        <div className="section">
          <h2>Fertilizer Application</h2>
          <p>Apply well-decomposed compost or farmyard manure before planting. Nitrogen fertilizer is important for good stalk growth. </p>
          <p>Apply NPK fertilizer as recommended (split application is better). Regular watering is necessary.</p>
        </div>

        <div className="section">
          <h2>Control methods:</h2>
          <p>Use disease-free seeds, proper spacing, avoid waterlogging, apply recommended fungicides if necessary.</p>
        </div>

        <div className="section">
          <h2>Diseases</h2>
          <p>Leaf blight, Downy mildew, Root rot, Bacterial leaf spot</p>
        </div>

        <div className="section">
          <h2>Harvest & Post-Harvest</h2>
          <p>Ready for harvest in 3–4 months after planting.
            Harvest when stalks are thick and firm.
            Cut at the base of the plant.
            Remove damaged leaves.
            Store in a cool place (0–5°C).
            Can be stored for 2–3 weeks in refrigeration.</p>
        </div>
      </div>
      <div className="image-container">
        <img src="./celery.jpeg" alt="Celery plant" />
      </div>
    </div>
  );
}

export default Celery;