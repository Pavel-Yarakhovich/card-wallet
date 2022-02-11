import React, { useState } from "react";
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
const showcaseUrl =
  "https://ds-9751-update-unit-list-card-layout-dot-prompto-showcase.appspot.com/ZDLLE?env=development";
const showcaseIframeId = "showcase-iframe";

const devShowcaseUrl = "http://localhost:3001/ZDLLE";
const devShowcaseIframeId = "devshowcase-iframe";

export default function TestLocalization() {
  const [lang, setLang] = React.useState("");
  const [showcaseUrl, setShowcaseUrl] = useState();
  const [showIframe, setShowIframe] = useState(false);

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
        <Flex
          width="100%"
          height="40px"
          marginBottom="15px"
          borderRadius="4px"
          alignItems="center"
        >
          <Text whiteSpace="nowrap">Showcase URL</Text>
          <Input
            variant="outline"
            value={showcaseUrl}
            onChange={(e) => {
              setShowIframe(false);
              setShowcaseUrl(e.target.value);
            }}
            size="sm"
            marginLeft="15px"
          />
          <Button
            size="md"
            marginLeft="10px"
            onClick={() => setShowIframe(true)}
          >
            Show
          </Button>
        </Flex>
        <Container maxW="container.xl" width="100%" height="70vh">
          {showIframe ? (
            <iframe
              id={showcaseIframeId}
              title="prompto"
              style={{ width: "100%", height: "100%" }}
              src={showcaseUrl}
            />
          ) : (
            "No URL provided"
          )}
        </Container>
      </main>
    </div>
  );
}
