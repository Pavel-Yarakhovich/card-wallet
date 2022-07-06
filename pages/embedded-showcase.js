import React, { useState } from "react";
import styles from "../styles/Home.module.css";

// Components
import { Container } from "@chakra-ui/react";

export default function EmbeddedShocase() {
  const [showcaseUrl, setShowcaseUrl] = useState(
    // "https://devshowcase.prompto.com/JRFDD/tour?env=production"
    "https://showcase.prompto.com/G644O/tour"
  );

  return (
    <main style={staticPosition}>
      <iframe
        title="prompto"
        style={{ width: "100%", height: "100vh" }}
        src={showcaseUrl}
        allowFullScreen
        allowscripts="true"
      />
    </main>
  );
}

const fixedPosition = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "100%",
};

const staticPosition = {
  position: "static",
  height: "100vh",
  width: "100vw",
};
