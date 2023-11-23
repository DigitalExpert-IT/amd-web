import { Box, Card, Stack, HStack, Heading, Text, Img } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const MarketCard = () => {
  const { t } = useTranslation();

  return (
    <Card
      position={"relative"}
      top={"-7rem"}
      maxW={"80%"}
      marginX={"auto"}
      border={"0.5px solid #C3C3C7"}
      background={"#1D0F32"}
      borderRadius={"25px"}
      py={"8"}
      px={{ base: "2", sm: "12", md: "16" }}
    >
      <Stack
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={6}
      >
        <Box flex={2} mb={{ base: "8", sm: "unset" }}>
          <Heading
            color={"white"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "4xl", lg: "5xl" }}
            mb={4}
          >
            <Text as="span">Crypto </Text>
            <Text as="span" color="#985FB8">
              Now
            </Text>
            .
          </Heading>
          <Text
            as="h2"
            textTransform={"uppercase"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "xl", lg: "2xl" }}
          >
            {t("pages.home.market.growAndTrend")}
          </Text>
        </Box>

        <Box flex={1} px={{ base: "4", sm: "8" }}>
          <HStack mb={4}>
            <Img src={"/dummy/bitcoin.png"} maxW={12} />
            <Text fontSize={"xl"}>BITCOIN</Text>
          </HStack>
          <Text fontSize={"xs"} textTransform={"uppercase"}>
            {t("pages.home.market.lastDay", { day: 7 })}
          </Text>
          <Img src={"/dummy/graphic.png"} />
        </Box>

        <Box flex={1} px={{ base: "4", sm: "8" }}>
          <HStack mb={4}>
            <Img src={"/dummy/binance.png"} maxW={12} />
            <Text fontSize={"xl"}>BINANCE</Text>
          </HStack>
          <Text fontSize={"xs"} textTransform={"uppercase"}>
            {t("pages.home.market.lastDay", { day: 7 })}
          </Text>
          <Img src={"/dummy/graphic.png"} />
        </Box>

        <Box flex={1} px={{ base: "4", sm: "8" }}>
          <HStack mb={4}>
            <Img src={"/dummy/ethereum.png"} maxW={12} />
            <Text fontSize={"xl"}>ETHEREUM</Text>
          </HStack>
          <Text fontSize={"xs"} textTransform={"uppercase"}>
            {t("pages.home.market.lastDay", { day: 7 })}
          </Text>
          <Img src={"/dummy/graphic.png"} />
        </Box>
      </Stack>
    </Card>
  );
};
