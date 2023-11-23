import React from "react";
import Link from "next/link";
import { INavigation } from "constant/Navigation";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
  AspectRatio,
  Flex,
  Icon,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";

interface DrawerMobileProps {
  isOpen: boolean;
  onClose: () => void;
  data: INavigation[];
}

export const DrawerMobile: React.FC<DrawerMobileProps> = props => {
  const { isOpen, onClose, data } = props;
  const { isOpen: openChild, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor="base.900">
        <DrawerCloseButton />
        <DrawerHeader justifyContent="center" display="flex">
          <AspectRatio ratio={9 / 3} minWidth="140">
            <Image
              src={"/amd-logo.svg"}
              alt="logo-image"
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 100vw,"
              fill
            />
          </AspectRatio>
        </DrawerHeader>
        <DrawerBody p="0">
          <Stack spacing="5">
            {data.map((item, idx) => {
              return (
                <Stack key={idx} onClick={item.children && onToggle}>
                  <Flex
                    justify="space-between"
                    align="center"
                    justifyContent="center"
                    display="flex"
                  >
                    <Link href="#">
                      <Text
                        fontWeight="400"
                        textTransform="uppercase"
                        fontSize="xl"
                      >
                        {t(`commons.navigation.${item.name}`)}
                      </Text>
                    </Link>
                    {item.children && (
                      <Icon
                        as={ChevronDownIcon}
                        transition="all .25s ease-in-out"
                        transform={openChild ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                      />
                    )}
                  </Flex>
                  <Collapse
                    in={openChild}
                    style={{ marginTop: "0!important" }}
                    animateOpacity
                  >
                    <Stack bg="whiteAlpha.100" spacing="0">
                      {item.children &&
                        item.children.map((obj, id) => (
                          <Link
                            key={"tahu" + id}
                            href={obj.link}
                            style={{
                              width: "100%",
                              textAlign: "center",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              textTransform: "uppercase",
                            }}
                          >
                            <Text>{t(`common.navigation.${obj.title}`)}</Text>
                          </Link>
                        ))}
                    </Stack>
                  </Collapse>
                </Stack>
              );
            })}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
