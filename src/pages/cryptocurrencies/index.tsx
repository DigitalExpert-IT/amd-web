import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { LayoutMain } from "components/layout/LayoutMain";

const Cryptocurrencies = () => {
  const { t } = useTranslation();
  return (
    <LayoutMain>
      <Box textAlign="center" h="100vh" pt="8rem">
        <Text color="blueSky.300">{t("commons.cryptocurrencies")}</Text>
        <Heading>Digital money for a digital world.</Heading>
        <Text>
          Cryptocurrencies are digital or virtual currencies that use
          cryptography for security and are decentrilized, meaning they are not
          controlled by any government or financial institution
        </Text>
      </Box>
    </LayoutMain>
  );
};

export default Cryptocurrencies;
