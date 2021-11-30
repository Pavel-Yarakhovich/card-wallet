import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// Components
import {
  Heading,
  Button,
  Flex,
  Container,
  Text,
  Input,
} from "@chakra-ui/react";

const languages = ["en", "fr", "de", "nl"];
const showcaseUrl = "http://devshowcase.prompto.com/ZDLLE";
const showcaseIframeId = "showcase-iframe";

const devShowcaseUrl = "http://localhost:3001/ZDLLE";
const devShowcaseIframeId = "-devshowcase-iframe";

export default function TestLocalization() {
  const [lang, setLang] = React.useState("");

  React.useEffect(() => {
    setLang(languages[0]);
  }, []);

  React.useEffect(() => {
    const embeddedShowcase = document.getElementById(showcaseIframeId);
    if (embeddedShowcase && lang) {
      embeddedShowcase.contentWindow.postMessage(
        JSON.stringify({
          type: "SYNC_LOCALIZATION",
          language: lang,
        }),
        showcaseUrl
      );
    }
  }, [lang]);

  React.useEffect(() => {
    const embeddedShowcase = document.getElementById(devShowcaseIframeId);
    if (embeddedShowcase && lang) {
      embeddedShowcase.contentWindow.postMessage(
        JSON.stringify({
          type: "SYNC_LOCALIZATION",
          language: lang,
        }),
        devShowcaseUrl
      );
    }
  }, [lang]);

  return (
    <div className={styles.container}>
      <header>
        <Flex
          alignItems="center"
          margin="0 auto"
          width="100%"
          justifyContent="center"
          padding="6px"
          boxSizing="border-box"
        >
          {languages.map((l) => (
            <Button
              key={l}
              size="md"
              margin="0 12px"
              backgroundColor={l === lang ? "salmon" : "gray"}
              onClick={(e) => {
                e.preventDefault();
                setLang(l);
              }}
            >
              {l.toUpperCase()}
            </Button>
          ))}
        </Flex>
      </header>

      <main className={styles.main}>
        <iframe
          id={showcaseIframeId}
          title="prompto"
          width="900"
          height="600"
          src={showcaseUrl}
        />
        <Text>LOCALHOST TEST</Text>
        <iframe
          id={devShowcaseIframeId}
          title="prompto"
          width="900"
          height="600"
          src={devShowcaseUrl}
        />
      </main>
    </div>
  );
}
