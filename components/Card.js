import { Center, Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Card({ card }) {
  const maskedCardNumber = `${card.number.slice(0, 4)} XXXX XXXX XXXX`;

  return (
    <Center>
      <Box
        width="400px"
        maxWidth="95vw"
        height="250px"
        position="relative"
        top={["100px", "40px"]}
        left={["0", "70px"]}
        bg="#dedede"
        borderRadius="12px"
      >
        <Flex
          position="absolute"
          bottom="20px"
          right="20px"
          alignItems="center"
        >
          CVV
          <Box
            fontSize="18px"
            backgroundColor="white"
            padding="4px 8px"
            marginLeft="12px"
          >
            {card.cvv}
          </Box>
        </Flex>
        <Flex
          width="100%"
          height="100%"
          position="absolute"
          zIndex="0"
          bottom={["100px", "80px"]}
          right={["0", "140px"]}
          bg="#efefef"
          borderRadius="12px"
          boxShadow="0px 10px 12px rgba(0, 0, 0, 0.2), 0px 6px 22px rgba(0, 0, 0, 0.12),
    0px 8px 16px rgba(0, 0, 0, 0.14)"
          flexDirection="column"
          justifyContent="center"
          padding="26px"
          boxSizing="border-box"
        >
          <Image
            width="80px"
            src={`/${card.type}-logo.png`}
            alt="card type logo"
            position="absolute"
            bottom="5px"
            right="5px"
          />
          <Text fontSize={["22px", "28px"]} letterSpacing="2px">
            {maskedCardNumber}
          </Text>
          <Flex alignItems="center">
            <Text fontSize="10px" textTransform="uppercase">
              Good thru
            </Text>
            <Box fontSize="18px" padding="4px 8px" marginLeft="12px">
              {card.expiryDate}
            </Box>
          </Flex>
          <Text fontSize="24px">{card.cardHolder}</Text>
        </Flex>
      </Box>
    </Center>
  );
}
