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
import SmallCard from "../components/SmallCard";

import { useAppState } from "../stores/AppStore";

export default function CardList() {
  const { AppState } = useAppState();
  const { cards } = AppState;

  const [sortedCards, setSortedCards] = React.useState(cards);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const value = searchValue.toLowerCase();
    setSortedCards(
      cards.filter((card) => card.nickName.toLowerCase().includes(value))
    );
  }, [searchValue, cards]);

  return (
    <div className={styles.container}>
      <Head>
        <title>My cards</title>
        <meta name="description" content="The list of credit cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Heading as="h1" size="2xl" textAlign="center">
          My cards
        </Heading>
        <Flex
          alignItems="center"
          margin="0 auto"
          width="100%"
          justifyContent="center"
          padding="6px"
          boxSizing="border-box"
        >
          <Link href="/" passHref>
            <Button size="md" margin="0 12px">
              Add card
            </Button>
          </Link>
        </Flex>
      </header>

      <main className={styles.main}>
        <Container
          maxW="container.xl"
          flexGrow="1"
          width="100%"
          height="100%"
          paddingTop="15px"
          boxSizing="border-box"
        >
          <Flex
            width="100%"
            height="40px"
            marginBottom="15px"
            borderRadius="4px"
            alignItems="center"
          >
            <Text whiteSpace="nowrap">Find by nickname:</Text>
            <Input
              variant="outline"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter a card nickname"
              size="sm"
              marginLeft="15px"
            />
          </Flex>
          <Flex
            maxHeight="calc(100% - 60px)"
            overflow="auto"
            flexDirection="row"
            flexWrap="wrap"
            alignContent="center"
          >
            {sortedCards.map((card) => (
              <SmallCard key={card.id} card={card} />
            ))}
          </Flex>
        </Container>
      </main>
    </div>
  );
}
