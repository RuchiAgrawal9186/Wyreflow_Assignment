import React from "react";

const SocialSection = () => {
  return (
    <section className="social-section">
      <h2 style={{ textAlign: "left", fontSize: "20px" }}>Social</h2>
      <h3 style={{ textAlign: "left", fontSize: "17px" }}>
        Follow us for the latest update
      </h3>
      <div
        className="social-icons"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          paddingTop: "20px",
        }}
      >
        <span>Facebook</span>
        <span>Instagram</span>
        <span>YouTube</span>
        <span>LinkedIn</span>
      </div>
    </section>
  );
};

export default SocialSection;
