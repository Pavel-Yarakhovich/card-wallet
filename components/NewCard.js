import React from "react";
import { useRouter } from "next/router";

import {
  Center,
  Box,
  Flex,
  Text,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";

import { useAppState } from "../stores/AppStore";

const emptyCard = {
  id: "",
  nickName: "",
  type: "",
  number: {},
  expiryMonth: "",
  expiryYear: "",
  cvv: "",
  cardHolder: "",
};

export default function NewCard() {
  const [cardData, setCardData] = React.useState(emptyCard);

  const router = useRouter();

  // App state
  const { AppState, AppStateDispatch } = useAppState();

  const updateCardData = (key, value) => {
    setCardData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateCardNumber = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      updateCardData("number", { ...cardData.number, [name]: value });
    },
    [cardData]
  );

  const addCard = React.useCallback(() => {
    const nextCardId = String(
      Math.max(...AppState.cards.map((c) => Number(c.id))) + 1
    );
    AppStateDispatch({
      type: "addCard",
      payload: {
        id: nextCardId,
        nickName: cardData.nickName,
        type: cardData.type.toLowerCase(),
        number: Object.values(cardData.number).reduce((a, c) => a + c, ""),
        expiryDate: `${cardData.expiryMonth}/${cardData.expiryYear}`,
        cvv: cardData.cvv,
        cardHolder: cardData.cardHolder,
      },
    });
    setCardData(emptyCard);
    router.push(`/card-details/${nextCardId}`);
  }, [AppState, AppStateDispatch, cardData, router]);

  return (
    <Flex flexDirection="column">
      <Center display="flex" flexDirection="column" alignItems="center">
        <Flex flexDirection="column" paddingBottom={["30px", "60px"]}>
          <Text fontSize="14px" letterSpacing="2px">
            CARD NICKNAME
          </Text>
          <Input
            fontSize="20px"
            backgroundColor="white"
            padding="4px 8px"
            value={cardData.nickName}
            onChange={(e) => updateCardData("nickName", e.target.value)}
          />
        </Flex>
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
            <Input
              width="60px"
              fontSize="18px"
              backgroundColor="white"
              padding="4px 8px"
              marginLeft="12px"
              value={cardData.cvv}
              onChange={(e) => updateCardData("cvv", e.target.value)}
              maxLength="3"
            />
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
            paddingRight="40px"
          >
            <Flex
              position="absolute"
              bottom="5px"
              right="5px"
              alignItems="center"
            >
              <Text fontSize="14px" letterSpacing="2px" whiteSpace="nowrap">
                CARD TYPE
              </Text>
              <Select
                height="30px"
                fontSize="14px"
                padding="4px 8px"
                backgroundColor="white"
                value={cardData.type}
                onChange={(e) => updateCardData("type", e.target.value)}
              >
                {["Visa", "MasterCard"].map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="14px" letterSpacing="2px">
                CARD NUMBER
              </Text>
              <Flex>
                <Input
                  name="0"
                  fontSize="20px"
                  backgroundColor="white"
                  padding="4px 8px"
                  value={cardData.number["0"]}
                  onChange={updateCardNumber}
                  maxLength="4"
                />
                <Input
                  name="1"
                  fontSize="20px"
                  backgroundColor="white"
                  padding="4px 8px"
                  value={cardData.number["1"]}
                  onChange={updateCardNumber}
                  maxLength="4"
                />
                <Input
                  name="2"
                  fontSize="20px"
                  backgroundColor="white"
                  padding="4px 8px"
                  value={cardData.number["2"]}
                  onChange={updateCardNumber}
                  maxLength="4"
                />
                <Input
                  name="3"
                  fontSize="20px"
                  backgroundColor="white"
                  padding="4px 8px"
                  value={cardData.number["3"]}
                  onChange={updateCardNumber}
                  maxLength="4"
                />
              </Flex>
            </Flex>

            <Flex alignItems="center">
              <Flex alignItems="center">
                <Text fontSize="10px" textTransform="uppercase">
                  Expiry month
                </Text>
                <Select
                  width="100px"
                  fontSize="16px"
                  padding="4px"
                  backgroundColor="white"
                  value={cardData.expiryMonth}
                  onChange={(e) =>
                    updateCardData("expiryMonth", e.target.value)
                  }
                >
                  {[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ].map((x) => (
                    <option fontSize="16px" key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </Select>
              </Flex>
              <Flex alignItems="center">
                <Text fontSize="10px" textTransform="uppercase">
                  Expiry year
                </Text>
                <Input
                  width="80px"
                  type="number"
                  fontSize="16px"
                  padding="4px 8px"
                  marginLeft="12px"
                  backgroundColor="white"
                  value={cardData.expiryYear}
                  onChange={(e) => updateCardData("expiryYear", e.target.value)}
                  maxLength="4"
                />
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="14px">CARD HOLDER NAME</Text>
              <Input
                fontSize="20px"
                padding="4px 8px"
                backgroundColor="white"
                value={cardData.cardHolder}
                onChange={(e) => updateCardData("cardHolder", e.target.value)}
              />
            </Flex>
          </Flex>
        </Box>
      </Center>
      <Button
        size="md"
        margin="0 12px"
        marginTop={["140px", "80px"]}
        onClick={addCard}
      >
        Add card
      </Button>
    </Flex>
  );
}
