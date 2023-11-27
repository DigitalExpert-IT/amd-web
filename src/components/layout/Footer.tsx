import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FOOTER_DATA } from "constant/Dummy";
import { BiLogoInstagram, BiLogoWhatsapp, BiLogoTwitter } from "react-icons/bi";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box bg="rgba(26, 26, 26, 0.40)">
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "7fr 3fr 4fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src="https://ik.imagekit.io/msxxxaegj/asetmasadepan/amd-logo.svg?updatedAt=1700720379734"
                objectFit="cover"
                alt="logo-image"
              />
            </Box>
            <Box w={{ base: "100%", md: "70%" }}>
              <Text
                bgGradient="linear-gradient(91deg, #9795FF 1.74%, #FFF 43.71%, #FFF 61.62%, #BE9FFF 102.48%)"
                bgClip="text"
              >
                {t("commons.footerDescription")}
              </Text>
            </Box>
          </Stack>
          {FOOTER_DATA.map((items, idx) => (
            <Stack align={"flex-start"} key={idx}>
              <Text
                fontWeight={"500"}
                fontSize={"lg"}
                mb={2}
                color="blueSky.300"
              >
                {items.headList}
              </Text>
              {items.children.map((obj, id) => (
                <Link href={obj.link} key={id}>
                  <Text fontSize="sm">{obj.name}</Text>
                </Link>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          w="100%"
          mt="2rem"
          align="center"
        >
          <Box>
            <Text fontSize="xs">
              &#169; {new Date().getFullYear()} PT. Aset Masa Depan. All right
              reserved
            </Text>
          </Box>
          <Box display="flex">
            <Text fontSize="xs">Privacy</Text>
            <Text fontSize="xs" mx="2rem">
              Terms of Service
            </Text>
            <Text fontSize="xs">Cookie Policy</Text>
          </Box>
          <Stack spacing="1rem" direction="row">
            <Icon as={BiLogoInstagram} w={5} h={5} />
            <Icon as={BiLogoWhatsapp} w={5} h={5} />
            <Icon as={BiLogoTwitter} w={5} h={5} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
