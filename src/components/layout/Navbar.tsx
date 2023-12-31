import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  IconButton,
  Container,
  AspectRatio,
} from "@chakra-ui/react";
import { NAVIGATION } from "constant/Navigation";
import { DrawerMobile } from "components/Drawer/DrawerMobile";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setScrolled(prevScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    if (prevScrollPos === 0) {
      setScrolled(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, scrolled]);

  return (
    <Box
      pt={{ base: "2", lg: "2" }}
      pb={{ base: "8", lg: "2" }}
      w="full"
      zIndex={1000}
      bg={isOpen ? "base.800" : scrolled ? "base.800" : "transparent"}
      boxShadow={scrolled ? "dark-lg" : "none"}
      pos="fixed"
      transition="0.5s"
    >
      <Container maxW="container.2xl">
        <Flex alignItems="center" justify="space-around">
          <Stack
            direction="row"
            align="center"
            flex={1}
            justify="space-between"
            pos={"relative"}
          >
            <DrawerMobile data={NAVIGATION} isOpen={isOpen} onClose={onClose} />
            <Link href="/">
              <AspectRatio
                w={{ base: 200, lg: 150 }}
                ratio={16 / 5}
                my={2}
                mx={{ sm: "auto" }}
                pos={{ base: "absolute", lg: "sticky" }}
                right={"0"}
                left={"0"}
                top={"-2"}
              >
                <Image
                  src="/amd-logo.svg"
                  alt="logo-image"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </AspectRatio>
            </Link>
            <IconButton
              variant="ghost"
              fontSize="xl"
              icon={<GiHamburgerMenu />}
              aria-label="open-menu"
              display={{ base: "flex", md: "flex", lg: "none" }}
              onClick={onOpen}
              pt="6"
            />
          </Stack>
          <Stack
            direction="row"
            spacing="5"
            display={{ base: "none", md: "none", lg: "flex" }}
            justify="right"
            align="center"
            flex={1}
          >
            <NavbarMenu data={NAVIGATION} />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
