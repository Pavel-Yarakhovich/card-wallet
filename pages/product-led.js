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

const showcaseUrl =
  "https://ds-9751-update-unit-list-card-layout-dot-prompto-showcase.appspot.com/ZDLLE?env=development";
const showcaseIframeId = "showcase-iframe";

export default function TestLocalization() {
  const [email, setEmail] = useState("");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Flex
          width="100%"
          height="40px"
          marginBottom="15px"
          borderRadius="4px"
          alignItems="center"
        >
          <Text whiteSpace="nowrap">Email</Text>
          <Input
            variant="outline"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="sm"
            marginLeft="15px"
          />
          <Button
            size="md"
            marginLeft="10px"
            onClick={() =>
              window.open(
                `http://ds-11079-story-add-new-register-form.vrtual-media-portal-dev.ew.r.appspot.com/product-led?email=${email}`
              )
            }
          >
            Submit
          </Button>
        </Flex>
      </main>
    </div>
  );
}
