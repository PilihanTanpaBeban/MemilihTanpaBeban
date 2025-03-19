"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Flex,
  Image,
  Highlight,
} from "@mantine/core";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { rem } from "@mantine/core";
import { lightPurple, primaryColor } from "../../public/colors";
import styles from "./HeroLanding.module.css";

export const HeroImageBackground = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      pos="relative"
      style={{ overflow: "hidden", backgroundColor: lightPurple }}
    >
      <Box
        pos="absolute"
        style={{
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 45vw 100px 0",
          borderColor: `transparent ${primaryColor} transparent transparent`,
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
          borderWidth: "100px 0 0 55vw",
          borderColor: `transparent transparent transparent ${primaryColor}`,
        }}
      />

      <Container
        pos="relative"
        size="xl"
        py={rem(125)}
        style={{
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Flex direction={{ base: "column", md: "row" }} gap={'xl'} align="center" justify={'center'} w="100%">
          {/* Image Section */}
          <Box w={'35%'}>
            <Image
              src="/assets/images/logo_png_1_1.png?height=500&width=auto"
              alt="Hero image"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          {/* Text Content Section */}
          <Box style={{ flex: "1", maxWidth: isMobile ? "100%" : "50%" }}>
            <Stack gap={0} ta={{ base: "center", md: "left" }}>
              <Title
                className={styles.greatVibes}
                style={{ fontSize: isMobile ? rem(56):rem(90) }}
              >
                Selamat & Sukses
              </Title>

              <Text style={{ fontSize: rem(18) }} c={primaryColor}>
                atas pelantikan{" "}
                <Text span fw="bold" style={{ fontSize: rem(18) }}>
                  Gubernur dan Wakil Gubernur (Kepala Daerah)
                </Text>
              </Text>

              <Box pos="relative" py={rem(20)}>
                <Box>
                  <Image
                    src="/assets/images/quote.png"
                    w={rem(36)}
                    h={rem(36)}
                    alt="Opening quote"
                  />
                </Box>

                {/* Quote text */}
                <Box px={rem(36)}>
                  <Highlight
                    highlightStyles={{
                      backgroundColor: primaryColor,
                      color: "white",
                    }}
                    highlight="Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan meniadakan interaksi dengan industri rokok serta kepentingannya."
                  >
                    Semoga dapat mengemban tugas dan amanah dengan baik,
                    mengedepankan kepentingan kesehatan masyarakat, dan
                    meniadakan interaksi dengan industri rokok serta
                    kepentingannya.
                  </Highlight>
                </Box>

                {/* Closing quote - bottom right */}
                <Flex justify={"end"} w={"100%"}>
                  <Image
                    src="/assets/images/quote.png"
                    w={rem(36)}
                    h={rem(36)}
                    alt="Closing quote"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
