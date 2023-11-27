import React from "react";
import Link from "next/link";
import { INavigation } from "constant/Navigation";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  Text,
  Box,
  PopoverContent,
  Stack,
  Flex,
  Icon,
} from "@chakra-ui/react";

interface NavItemProps {
  data: INavigation[];
}

export const NavbarMenu: React.FC<NavItemProps> = props => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      {data.map((item, idx) => {
        return (
          <Box key={idx}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Link href={item.link ?? "#"} key={idx}>
                  <Text
                    textTransform="uppercase"
                    fontWeight="400"
                    fontSize="sm"
                    _hover={{
                      color: "blueSky.500",
                    }}
                  >
                    {t(`commons.navigation.${item.name}`)}
                  </Text>
                </Link>
              </PopoverTrigger>

              {item.children && (
                <PopoverContent
                  border="0"
                  boxShadow="xl"
                  bg="blueSky.300"
                  p="4"
                  rounded="xl"
                  maxW="xs"
                >
                  <Stack>
                    {item.children.map((obj, id) => (
                      <Link key={id} href={obj.link}>
                        <Stack
                          direction="row"
                          align="center"
                          role="group"
                          rounded="md"
                          p="2"
                          _hover={{ bg: "#04A87B" }}
                        >
                          <Text
                            transition="all .3s ease"
                            _groupHover={{ color: "valhalla.100" }}
                          >
                            {t(`commons.navigation.${obj.title}`)}
                          </Text>
                          <Flex
                            transition="all .3s ease"
                            transform="translateX(-10px)"
                            _groupHover={{
                              opacity: "100%",
                              transform: "translateX(0)",
                            }}
                            justify={"flex-end"}
                            align={"center"}
                            flex={1}
                          >
                            <Icon
                              color="#1E6ECF"
                              w={5}
                              h={5}
                              as={ChevronRightIcon}
                            />
                          </Flex>
                        </Stack>
                      </Link>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </>
  );
};
