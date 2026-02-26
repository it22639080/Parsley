import './Pages.css';

function Mint() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Mint</h1>
        <div className="basic-info">
          <p><strong>Family:</strong> Lamiaceae</p>
          <p><strong>Scientific Name:</strong> <i>Mentha arvensis</i></p>
          <p>
           Mint is an important aromatic and medicinal herb grown for its essential oil (menthol). It is widely used in food, cosmetics, pharmaceuticals, and toothpaste industries.
          </p>
        </div>

        <div className="section">
          <h2>Varieties</h2>
          <p>Mentha arvensis (Japanese mint), Mentha piperita (Peppermint), Mentha spicata (Spearmint)</p>
        </div>

        <div className="section">
          <h2>Soil Requirements</h2>
          <p>Well-drained loamy soil, rich in organic matter. pH 6.0–7.5. Avoid waterlogging.</p>
        </div>

        <div className="section">
          <h2>Climatic Requirement</h2>
          <p>Warm, humid climate, temperature 20–30°C. Requires good sunlight and moderate rainfall.</p>
        </div>

        <div className="section">
          <h2>Spacing</h2>
          <p>Row to row: 45 cm. Plant to plant: 30 cm.</p>
        </div>

        <div className="section">
          <h2>Fertilizer Application</h2>
          <p>FYM (Farmyard manure): 10–15 tons/ha before planting
NPK: 100:50:50 kg/ha
Nitrogen applied in split doses</p>
        </div>

        <div className="section">
          <h2>Diseases</h2>
          <p>Leaf blight, Rust, Powdery mildew (Control by proper drainage and fungicide spray)</p>
        </div>

        <div className="section">
          <h2>Harvest </h2>
          <p>First harvest: 90–100 days after planting
Harvest at flowering stage for maximum oil content
2–3 harvests per year possible.
</p>
        </div>
        <div className="section">
          <h2>Post-Harvest Practices </h2>
          <p>Leaves are shade dried
Oil extracted by steam distillation
Store oil in cool, dark place
Proper drying to avoid fungal infection
</p>
        </div>
      </div>
      <div className="image-container">
        <img src="./mint.jpeg" alt="Mint plant" />
      </div>
    </div>
  );
}

export default Mint;