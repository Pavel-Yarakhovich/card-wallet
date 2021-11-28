import Link from "next/link";

import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function SmallCard({ card }) {
  const maskedCardNumber = `${card.number.slice(0, 4)} XXXX XXXX XXXX`;

  return (
    <Link href={`/card-details/${card.id}`} passHref>
      <a>
        <Flex
          width={["100%", "240px"]}
          maxWidth="220px"
          height="160px"
          padding="10px"
          borderRadius="6px"
          flexDirection="column"
        >
          <Box
            backgroundColor="fef5f7"
            width="100%"
            overflow="hidden"
            textOverflow="ellipsis"
            padding="4px"
            boxSizing="border-box"
            whiteSpace="nowrap"
            height="35px"
          >
            {card.nickName ?? "N/A"}
          </Box>
          <Flex
            width={["220px", "100%"]}
            height="100%"
            padding="6px"
            borderRadius="4px"
            backgroundColor="#dedede"
            flexDirection="column"
            justifyContent="center"
          >
            <Image
              width="40px"
              src={`/${card.type}-logo.png`}
              alt="card type logo"
            />
            <Text>{maskedCardNumber}</Text>
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
