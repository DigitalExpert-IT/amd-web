import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'
import { FOOTER_DATA } from 'constant/Dummy'
import Link from 'next/link'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box bg="rgba(26, 26, 26, 0.40)">
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '8fr 3fr 4fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src="https://ik.imagekit.io/msxxxaegj/asetmasadepan/amd-logo.svg?updatedAt=1700720379734" objectFit="cover" />
            </Box>
            <Box w={{ base: "100%", md: "70%" }}>
              <Text bgGradient='linear-gradient(91deg, #9795FF 1.74%, #FFF 43.71%, #FFF 61.62%, #BE9FFF 102.48%)'
                bgClip="text">{t("commons.footerDescription")}</Text>
            </Box>
          </Stack>
          {FOOTER_DATA.map((items, idx) => (
            <Stack align={'flex-start'} key={idx}>
              <ListHeader>{items.headList}</ListHeader>
              {items.children.map(obj => (
                <Link href={obj.link}>
                  <Text fontSize="sm">{obj.name}</Text>
                </Link>
              ))}
            </Stack>
          ))}

        </SimpleGrid>
        <Stack direction="row" justify="space-between" w="100%" bg="green">
          <Box>
            <Text fontSize="xs">&#169; {new Date().getFullYear()} PT. Aset Masa Depan. All right reserved</Text>
          </Box>
          <Box display="flex">
            <Text>Privacy</Text>
            <Text mx="2rem">Terms of Service</Text>
            <Text>Cookie Policy</Text>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;
