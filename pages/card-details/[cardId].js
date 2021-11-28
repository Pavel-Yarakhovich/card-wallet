import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

// Components
import { Heading, Flex, Button } from "@chakra-ui/react";
import Card from "../../components/Card";

import { useAppState } from "../../stores/AppStore";

export default function CardDetails() {
  const router = useRouter();
  const { cardId } = router.query;

  // App state
  const { AppState } = useAppState();
  const { cards } = AppState;

  const card = cards?.find((card) => card.id === cardId);

  if (!card) return <p>No card details available</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Card details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Heading as="h1" size="2xl" textAlign="center">
          Card details
        </Heading>
        <Flex
          alignItems="center"
          margin="0 auto"
          width="100%"
          justifyContent="center"
          padding="6px"
          boxSizing="border-box"
        >
          <Link href="/card-list" passHref>
            <Button size="md" margin="0 12px">
              Show all cards
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button size="md" margin="0 12px">
              Add card
            </Button>
          </Link>
        </Flex>
      </header>

      <main className={styles.main}>
        <Card card={card} />
      </main>
    </div>
  );
}
