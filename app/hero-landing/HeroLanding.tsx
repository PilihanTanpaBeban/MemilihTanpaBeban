"use client"

import { Box, Container, Title, Text, Button, Group, Stack, Flex, Image, Highlight } from "@mantine/core"
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks"
import { rem } from "@mantine/core"
/*import  {Playball}  from "next/font/google"

// Load Playball font
const playball = Playball({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})
*/
export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const primaryColor = "linear-gradient(45deg, #8c44d6 0%, #6a1fa9 100%)"
  const white = "#ffffff"

  return (
    <Box pos="relative" style={{overflow: "hidden", backgroundColor: white}}>

      <Box
        pos="absolute"
        style={{
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 200px 200px 0",
          borderColor: "transparent #e9dffc transparent transparent",
        }}
      />

      <Box
        pos="absolute"
        style={{
          bottom: 0,
          left: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "200px 0 0 200px",
          borderColor: "transparent transparent transparent #e9dffc",
        }}
      />

      <Container 
        pos="relative"
        size="lg"
        py="xl"
        style={{
          zIndex: 10,
          height: "100vh",
          display: "flex",
          alignItems: "center"}}
          >
      
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={{ base: "xl", md: 50 }} w="100%">
          {/* Image Section */}
          <Box style={{ flex: "1", maxWidth: isMobile ? "100%" : "50%" }}>
            <Box maw={500} mx="auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Hero image"
                radius="md"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>

          {/* Text Content Section */}
          <Box style={{ flex: "1", maxWidth: isMobile ? "100%" : "50%" }}>
            <Stack gap="xl" ta={{ base: "center", md: "left" }}>
                          <Title fw={800} className={playball.className} style={{fontSize: "clamp(2.5rem, 5vw, 4rem)"}}>
                Selamat & Sukses
              </Title>

              <Text>
                atas pelantikan{" "}
                <Text span fw="bold">
                  Gubernur dan Wakil Gubernur (Kepala Daerah)
                </Text>
              </Text>

              <Box pos="relative" py={rem(20)}>
                {/* Opening quote - top left */}
                <Box pos="absolute" top={0} left={0}>
                  <Image src="/assets/images/quote.png" w={rem(16)} h={rem(16)} alt="Opening quote" />
                </Box>

                {/* Quote text */}
                <Box px={rem(20)}>
                  <Highlight
                    highlightStyles={{
                      backgroundImage: primaryColor,
                      color: white,
                      padding: "0 5px",
                      borderRadius: "3px",
                    }}
                    highlight="Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan meniadakan interaksi dengan industri rokok serta kepentingannya."
                  >
                    Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat,
                    dan meniadakan interaksi dengan industri rokok serta kepentingannya.
                  </Highlight>
                </Box>

                {/* Closing quote - bottom right */}
                <Box pos="absolute" bottom={0} right={0}>
                  <Image
                    src="/assets/images/quote.png"
                    w={rem(16)}
                    h={rem(16)}
                    alt="Closing quote"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </Box>
              </Box>

              <Text c={white} bg="violet.7" p="sm" style={{ borderRadius: "5px" }}>
                Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan
                meniadakan interaksi dengan industri rokok serta kepentingannya.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

