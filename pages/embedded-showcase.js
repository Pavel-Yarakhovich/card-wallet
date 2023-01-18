import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

// Components
import { Container } from "@chakra-ui/react";

export default function EmbeddedShocase() {
  const [showcaseUrl, setShowcaseUrl] = useState();

  useEffect(() => {
    setTimeout(
      () => setShowcaseUrl("http://localhost:3001/G644O/tour?env=production"), //http://localhost:3001/G644O/tour?env=production
      200
    ); //https://showcase.prompto.com/G644O
  }, []);

  return (
    <main style={staticPosition}>
      {/* {showcaseUrl && ( */}
      <div>DIV</div>
      <iframe
        title="prompto"
        style={{ width: "80%", height: "80vh" }}
        src={"https://showcase.prompto.com/G644O"}
        allowFullScreen
        allowscripts="true"
        onLoad={() => console.log("LOADED")}
        onAbort={(err) => console.log("ABORTED ", err)}
        onError={(err) => console.log("ERROR ", err)}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      {/* )} */}
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
