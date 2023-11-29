import { Box, Card, Stack, HStack, Heading, Text, Img } from "@chakra-ui/react";
import { useCrypto } from "hooks/useCrypto";
import { useTranslation } from "react-i18next";
import { formatPrice } from "utils/formater";

export const MarketCard = () => {
  const { t } = useTranslation();
  const getCrypto = useCrypto();

  const highAndLow = (id: number) => {
    return getCrypto[id].prevPrice
      ? getCrypto[id].price > getCrypto[id].prevPrice
        ? "green.300"
        : "red.300"
      : "gray";
  };

  const graphImages = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
  ];

  const getRandomGraph = () => {
    const rndInt = Math.floor(Math.random() * 10) + 1;
    return graphImages[rndInt];
  };

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
        {getCrypto.slice(0, 3).map((item, idx) => (
          <Box flex={1} px={{ base: "4", sm: "8" }} key={idx}>
            <HStack mb={4}>
              <Img src={`/dummy/${idx}.png`} maxW={12} />
              <Text fontSize={"xl"}>{item.name}</Text>
            </HStack>
            <Text fontSize={"xs"} textTransform={"uppercase"}>
              {t("pages.home.market.lastDay", { day: 7 })}
            </Text>
            <Img src={getRandomGraph()} />
            <Text color={highAndLow(idx)} fontSize="xl">
              {formatPrice(item.price)}
            </Text>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};
