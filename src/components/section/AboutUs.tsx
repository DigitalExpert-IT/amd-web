import React from "react";
import { Box, Text, Heading, Container, Stack, Image } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.xl" my="2rem" id="about">
      <Box textAlign={{ base: "center" }}>
        <Text textTransform="uppercase" fontSize="2xl">
          {t("pages.home.aboutUs.title")}
        </Text>
        <Heading textTransform="capitalize" size={{ base: "lg", md: "2xl" }}>
          <Trans
            i18nKey="pages.home.aboutUs.weBringRevolution"
            components={{
              strong: <Text as="strong" color="#69A6C9" />,
              small: (
                <Text
                  as="small"
                  textTransform="lowercase"
                  size={{ base: "lg", md: "2xl" }}
                />
              ),
            }}
          />
        </Heading>
      </Box>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        mt="2rem"
        spacing="1rem"
      >
        <Box
          justifyContent="space-between"
          display="flex"
          flexDir="column"
          flex={1}
        >
          <Box>
            <Text textAlign="justify" fontSize="20px">
              {t("pages.home.aboutUs.content1")}
            </Text>
          </Box>
          <Box>
            <Text textAlign="justify" fontSize="20px">
              {t("pages.home.aboutUs.content2")}
            </Text>
          </Box>
        </Box>
        <Box
          flex={1}
          alignContent="center"
          display="flex"
          justifyContent={{ base: "center", md: "right" }}
          rounded="lg"
          overflow="hidden"
        >
          <Image
            src="https://ik.imagekit.io/msxxxaegj/asetmasadepan/revolution.png?updatedAt=1700032501757"
            alt="content-image"
            objectFit="cover"
          />
        </Box>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        mt="3rem"
        spacing="1rem"
        position="relative"
      >
        <Box
          w={300}
          h={300}
          bgGradient="radial-gradient(50% 50% at 50% 50%, #243C65 0%, rgba(2, 1, 3, 0.00) 100%)"
          rounded="full"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          position="absolute"
          left="-8rem"
          top="-5rem"
          zIndex={0}
        />
        <Box display={{ base: "block", md: "none" }} zIndex={1}>
          <Heading
            textAlign="center"
            textTransform="capitalize"
            size={{ base: "lg", md: "2xl" }}
          >
            <Trans
              i18nKey="pages.home.aboutUs.bestSolution"
              components={{
                strong: <Text as="strong" color="#CA7FF5" />,
              }}
            />
          </Heading>
        </Box>

        <Box
          flex={1}
          alignContent="center"
          display="flex"
          rounded="lg"
          overflow="hidden"
          justifyContent={{ base: "center", md: "left" }}
        >
          <Image
            src="https://ik.imagekit.io/msxxxaegj/asetmasadepan/solution.png?updatedAt=1700036321167"
            alt="content-image"
            objectFit="cover"
            zIndex={2}
          />
        </Box>
        <Box
          justifyContent="space-between"
          display="flex"
          flexDir="column"
          flex={1}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Heading textAlign="right" textTransform="capitalize" size="2xl">
              <Trans
                i18nKey="pages.home.aboutUs.bestSolution"
                components={{
                  strong: <Text as="strong" color="#CA7FF5" />,
                }}
              />
            </Heading>
          </Box>
          <Box>
            <Text textAlign="justify" fontSize="20px">
              {t("pages.home.aboutUs.content3")}
            </Text>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};
