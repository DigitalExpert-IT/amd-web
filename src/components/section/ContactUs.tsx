import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Heading, Box, Container, Text, Button, Stack } from "@chakra-ui/react"

export const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.xl" mb="5rem">
      <Stack w="full" bgColor="#5A368B" p={{ base: "1rem", md: "3rem" }} rounded="xl" direction={{ base: "column", md: "row" }} spacing="2rem">
        <Box flex={2} textAlign={{ base: "center", md: "unset" }}>
          <Text fontSize="xl" textTransform="uppercase">{t('pages.home.contactUs.title')}</Text>
          <Heading textTransform="capitalize" size={{ base: "xl", md: "4xl" }} my="2rem">
            <Trans i18nKey={"pages.home.contactUs.workWithUs"} components={{
              strong: <Text as="strong" color="secondary.400" />
            }} />
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>{t("pages.home.contactUs.content1")}</Text>
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignContent="center" alignSelf={{ base: "center", md: "end" }} textTransform="capitalize" px="2rem">
          <Button variant="gradient" colorScheme="blueSky:ruby" w="100%">{t("pages.home.contactUs.title")}</Button>
        </Box>
      </Stack>
    </Container>
  )
}
