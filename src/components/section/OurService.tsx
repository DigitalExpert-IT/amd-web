import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { OURSERVICE_DATA } from "constant/Dummy";
import {
  Container,
  Box,
  Text,
  Heading,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";

export const OurService = () => {
  const { t } = useTranslation();

  return (
    <Box position="relative" overflow="hidden">
      <Box
        w={{ base: 400, md: 800 }}
        h={{ base: 400, md: 800 }}
        bgGradient="radial-gradient(50% 50% at 50% 50%, #5A1F63 0%, rgba(2, 1, 3, 0.00) 100%)"
        rounded="full"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        position="absolute"
        right="-10rem"
        top="-2rem"
        zIndex={0}
      />
      <Container maxW="container.xl" mb="5rem">
        <Box my="5rem">
          <Text textTransform="uppercase" fontSize="2xl" textAlign="center">
            {t("pages.home.ourService.title")}
          </Text>
          <Heading textTransform="capitalize" size="2xl" textAlign="center">
            <Trans
              i18nKey="pages.home.ourService.whatWeDo"
              components={{
                strong: <Text as="strong" color="secondary.400" />,
              }}
            />
          </Heading>
        </Box>
        <Wrap
          align="center"
          justify="center"
          spacing="2rem"
          position="relative"
        >
          {OURSERVICE_DATA.map((item, idx) => (
            <WrapItem key={idx} maxW={{ base: "100%", md: "30%" }}>
              <Box
                w="100%"
                roundedTopRight="xl"
                roundedBottomLeft="xl"
                position="relative"
                overflow="hidden"
              >
                <Image
                  src={item.image}
                  alt={`image-${item.topic}`}
                  objectFit="cover"
                />
                <Box
                  role="group"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  position="absolute"
                  bg="rgba(90, 54, 139, 0.67)"
                  bottom="0"
                  roundedBottomLeft="30px"
                  w="full"
                  h="20"
                  _hover={{
                    height: "full",
                    transition: "0.3s ease-out",
                    roundedTopRight: "30px",
                    flexDirection: "column",
                    paddingTop: "2rem",
                    _after: {
                      content: `'${item.content}'`,
                      marginTop: "2rem",
                    },
                  }}
                >
                  <Text
                    fontSize="xl"
                    _groupHover={{
                      fontSize: { base: "40px", md: "20px", lg: "40px" },
                    }}
                  >
                    {item.topic}
                  </Text>
                </Box>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};
