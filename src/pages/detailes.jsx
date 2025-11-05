"use client";
import * as motion from "motion/react-client";

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {cards.map(({ img, name }, i) => (
        <Card i={i} img={img} name={name} key={name} />
      ))}
    </div>
  );
}

function Card({ img, name, i }) {
  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
    >
      <motion.div style={card} variants={cardVariants}>
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "75%",
            objectFit: "cover",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <div
          style={{
            padding: "1rem",
            textAlign: "center",
            background: "#fff",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{name}</h3>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Legendary Misfit Crew Member
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// 🔥 Card animation
const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// 🎨 Styles
const container = {
  margin: "100px auto",
  maxWidth: "1100px",
  paddingBottom: "100px",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "3rem",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  width: 300,
  height: 420,
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 2px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
};

// 🧠 NFT / Character Data
const cards = [
  { img: "/assets/ch01.avif", name: "Captain Blaze" },
  { img: "/assets/ch02.avif", name: "Iron Vibe" },
  { img: "/assets/ch03.avif", name: "Neon Fang" },
//   { img: "/assets/ch04.avif", name: "Ghost Pixel" },
];
