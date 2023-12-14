import { useEffect, useState } from "react";
import { useCrypto } from "hooks/useCrypto";
import { formatPrice } from "utils/formater";
import { useTranslation } from "react-i18next";
import { Box, Card, Stack, HStack, Heading, Text, Img } from "@chakra-ui/react";
import LineChart from "components/LineChart";

export const MarketCard = () => {
  const { t } = useTranslation();
  const getCrypto = useCrypto();

  // console.info("api datas", getCrypto[10])

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

  const data = [
    { y: 0 },
    {   y: 400 },
    {   y: 300 },
    {   y: 100 },
    {   y: 400 },
    {   y: 500 },
    {   y: 400 },
  ];

  const raw_prices = [
    234.898767411582, 235.06438522012053, 235.0462695246973, 234.61063603368441,
    234.36008480869148, 235.07835674826498, 233.10642396860058,
    233.29436911835947, 232.6577872856747, 232.8937378786427,
    233.39248890209754, 232.52625203833955, 233.1824776503338,
    232.86133711676447, 233.78808010925766,
  ];

  const min = Math.min(...raw_prices);
  const max = Math.max(...raw_prices);

  let normalised_prices: [number, number][] = [];

  for (let i = 0; i < raw_prices.length; i++) {
    let new_price = (raw_prices[i] - min) / (max - min);
    if (isNaN(new_price)) {
      new_price = 0;
    }
    normalised_prices.push([i, Math.abs(new_price * 100)]);
  }

  useEffect(() => {
    getRandomGraph();
  }, []);

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
            {/* <Img src={getRandomGraph()} /> */}
            <LineChart 
              width={500}
              height={200}
              data={idx}
              horizontalGuides={0}
              precision={2}
              verticalGuides={0} 
            />
            <Text color={highAndLow(idx)} fontSize="xl">
              {formatPrice(item.price)}
            </Text>
          </Box>
        ))}
      </Stack>
    </Card>
  );
};
