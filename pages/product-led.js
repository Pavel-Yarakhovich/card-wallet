import React, { useState } from "react";
import styles from "../styles/Home.module.css";

// Components
import { Button, Flex, Text, Input, Heading } from "@chakra-ui/react";

export default function ProductLed() {
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  return (
    <div className={styles.container}>
      <header>
        <Heading as="h1" size="2xl" textAlign="center">
          Mock Product Led
        </Heading>
      </header>
      <main className={styles.main}>
        <Flex
          width="100%"
          maxW="500px"
          height="40px"
          marginBottom="15px"
          borderRadius="4px"
          alignItems="center"
        >
          <Text whiteSpace="nowrap" w="120px">
            Email
          </Text>
          <Input
            variant="outline"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="lg"
            marginLeft="15px"
          />
        </Flex>
        <Flex
          width="100%"
          maxW="500px"
          height="40px"
          marginBottom="15px"
          borderRadius="4px"
          alignItems="center"
        >
          <Text whiteSpace="nowrap" w="120px">
            Source
          </Text>
          <Input
            variant="outline"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
            }}
            size="lg"
            marginLeft="15px"
          />
        </Flex>
        <Button
          size="md"
          marginLeft="10px"
          onClick={() =>
            window.open(
              `https://devapp.prompto.com/product-led?email=${encodeURIComponent(
                email
              )}&utm_source=${encodeURIComponent(source)}`,
              "_blank"
            )
          }
        >
          Submit
        </Button>
      </main>
    </div>
  );
}
