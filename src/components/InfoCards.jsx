import { useState } from "react";

const infoItems = [
  {
    title: "Our Commitment",
    description:
      "We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.",
    id: 1,
    text: "Fostering Lasting Connections",
    image: "https://wyreflow.com/assets/images/about-image2.png",
  },
  {
    title: "Our Context",
    description:
      "We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.",
    id: 2,
    text: "Shaping Future-Focused Relationships",
    image: "https://wyreflow.com/assets/images/about-image2.png",
  },
  {
    title: "Our Beliefs",
    description:
      "Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.",
    id: 3,
    text: "Committed to the Impact We Have on Every Life",
    image: "https://wyreflow.com/assets/images/about-image2.png",
  },
  {
    title: "Our Roadmap",
    description:
      "Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization",
    id: 4,
    text: "Build and Share Knowledge Pathways",
    image: "https://wyreflow.com/assets/images/about-image2.png",
  },
];

const InfoCards = () => {
  const [tab, setTab] = useState(1);
  const activeItem = infoItems.find((item) => item.id === tab);
  const styles = {
    tabTitle: {
      paddingBottom: "10px",
      fontSize: "24px",
      fontWeight: "600",
      transition: "0.3s ease",
    },

    contentBox: {
      display: "flex",
      justifyContent: "space-between",
    //   alignItems: "center",
      backgroundColor: "black",
      color: "white",
      padding: "10px  70px",
      height: "100%",
      margin: "auto",
      gap: "70px",
    },
    left: {
      width: "30%",
    },
    right: {
      width: "50%",
    },
    text: {
      fontSize: "35px",
      fontWeight: "700",
      color: "white",
      marginBottom: "10px",
    },

    description: {
      fontSize: "20px",
      color: "white",
      lineHeight: "1.6",
    },
  };
  return (
    <section>
      <div className="info-cards">
        {infoItems.map((item) => (
          <h2
            key={item.id}
            onClick={() => setTab(item.id)}
            style={{
              ...styles.tabTitle,
              borderBottom: tab === item.id ? "3px solid #5C6AC4" : "",
              color: tab === item.id ? "#5C6AC4" : "white",
            }}
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* CONTENT SECTION */}
      <div style={styles.contentBox}>
        <div style={styles.left}>
          <div style={styles.text}>{activeItem.text}</div>
          <div style={styles.description}>{activeItem.description}</div>
        </div>

        <div style={styles.right}>
          <img src={activeItem.image} alt="active" />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
