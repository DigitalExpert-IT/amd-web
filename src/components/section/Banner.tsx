import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Text } from "@chakra-ui/react";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <Box pos={"relative"} w="100%" overflow={"hidden"}>
      <Box
        pos={"absolute"}
        w={{ base: "79vw", md: "50vw" }}
        h={{ base: "50vw", md: "541px" }}
        zIndex={0}
        backgroundImage={
          "https://ik.imagekit.io/msxxxaegj/asetmasadepan/banner-coin-right.png?updatedAt=1699604198085"
        }
        backgroundPosition={"bottom right"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={{ base: "165%", sm: "unset" }}
      />

      <Box
        pos={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minH="100vh"
        zIndex={1}
      >
        <Box textAlign={"center"}>
          <Text as="h1" fontSize={{ base: "5xl", md: "8xl" }}>
            {t("pages.home.banner.title")}
          </Text>
          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "8xl" }}
            bgClip="text"
            bgGradient="linear(to-r, #DF68B0
              , #7CCAF2)"
          >
            {t("pages.home.banner.title-2")}
          </Text>
          <Text as="h2" fontSize={{ base: "xl", md: "3xl" }}>
            {t("pages.home.banner.subTitle")}
          </Text>
          <Button size={"lg"} mt={8}>
            {t("commons.getStarted")}
          </Button>
        </Box>
      </Box>

      <Box
        pos={"absolute"}
        bottom={0}
        right={0}
        w={{ base: "79vw", md: "42vw" }}
        h={{ base: "124vw", md: "1000px" }}
        zIndex={0}
        backgroundImage={
          "https://ik.imagekit.io/msxxxaegj/asetmasadepan/banner-coin-left.png?updatedAt=1699604196241"
        }
        backgroundPosition={"top left"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={{ base: "165%", sm: "unset" }}
      />
    </Box>
  )
}
