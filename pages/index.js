import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// Components
import { Heading, Center, Flex, Button } from "@chakra-ui/react";
import NewCard from "../components/NewCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add New Card</title>
        <meta name="description" content="Add new card to your wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Heading as="h1" size="2xl" textAlign="center">
          Add new card
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
        </Flex>
      </header>

      <main className={styles.main}>
        <Center>
          <NewCard />
        </Center>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
