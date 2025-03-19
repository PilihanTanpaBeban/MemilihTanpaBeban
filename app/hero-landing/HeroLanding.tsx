import { Title, Text, Container, Image, Group, Flex, rem, Box, Grid, useMantineTheme, DrawerOverlay, Divider, Button } from "@mantine/core";
//import classes from "./HeroLanding.module.css";
import BoxChosenDpr from "./chosen-dpr-box/chosen-dpt-box.module";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import HeroVector from "../hero-vector/HeroVector";
import { chosenDpr } from "./chosen-drp";
import { primaryColor, white, lightPurple } from "../../public/colors";
import { useState, useEffect } from "react";
import { PrimaryButton } from "../components/Button"; // Adjust the path as necessary
import React from "react";
import router, { useRouter } from "next/router";

export const HeroImageBackground = () => {
  const router = useRouter();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);
  const laptop = useMediaQuery(`(max-width: ${theme.breakpoints?.lg})`);
  const desktop = useMediaQuery(`(max-width: ${theme.breakpoints?.xl})`);

  return (

    <Box pos="relative" mih="100vh" style={{ overflow: "hidden", backgroundColor: { lightPurple } }}>
      <Box
        pos="absolute"
        style={{
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 200px 200px 0",
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
          borderWidth: "200px 0 0 200px",
          borderColor: `transparent transparent transparent ${primaryColor}`,
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
          alignItems: "center",
        }}
      >
        <Grid gutter={{ base: "xl", md: 50 }} align="center">
          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 1 }}>
            <Box maw={500} mx="auto">
              <Image
                src="/assets/images/logo_png_1_1.png?height=500&width=auto"
                alt="Logo Piltaban"
                radius="md"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 2 }}>
            <Stack spacing="xl" ta={{ base: "center", md: "left" }}>
              <Title order={1} fw={800} style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                Selamat & Sukses
              </Title>
              <Text>atas pelantikan <Text fw={"bold"}>Gubernur dan Wakil Gubernur (Kepala Daerah)</Text></Text>

              <Stack>
                <Image src={"/assets/images/quote.png"} w={rem(16)} h={rem(16)}>
                  <Highlight
                    highlightStyles={{
                      backgroundImage: primaryColor,
                    }} highlight="Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan meniadakan interaksi dengan industri rokok serta kepentingannya.">Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan meniadakan interaksi dengan industri rokok serta kepentingannya.
                  </Highlight>
                  <Text c={white}>Semoga dapat mengemban tugas dan amanah dengan baik, mengedepankan kepentingan kesehatan masyarakat, dan meniadakan interaksi dengan industri rokok serta kepentingannya.</Text>
                  <Image src={"/assets/images/quote.png"} w={rem(16)} h={rem(16)}>
                  </Stack>
              </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>


    /*
      <>
        <Box pt={rem(25)} pb={rem(60)} bg={lightPurple}>
          <Container size={'xl'}>
            <Flex direction={mobile ? 'column' : 'row'} gap={rem(28)} justify={'space-between'}>
              <Flex direction={'column'} c={primaryColor} maw={mobile ? '100%' : tablet ? rem(350) : rem(500)}>
                <Image src={'/assets/images/home_redflag.jpg'} w={mobile ? rem('100%') : tablet ? rem(300) : rem(518)} h={'auto'} />
                <Box>
                  <Text mt={rem(45)} ta={mobile ? 'center' : 'left'} style={{ fontSize: tablet ? rem(20) : rem(24), fontWeight: 800 }}>Daftar Nama Anggota DPR RI Terpilih yang Punya Rekam Jejak Buruk Terkait Dengan Kebijakan Pengendalian Zat Adiktif berupa Produk Tembakau
                  </Text>
                  <Text mt={rem(60)} ta={mobile ? 'center' : undefined} style={{ fontSize: tablet ? rem(12) : rem(14), fontWeight: 600 }}>
                    Klik
                      <Button
                        variant="filled"
                        radius={"xl"}
                        size={"sm"}
                        onClick={() => router.push('/konflik-kepentingan')}
                        color={primaryColor}
                        mx={rem(5)}
                      > <Text style={{ fontWeight: '700', fontSize: tablet ? rem(12) : rem(14) }}>Potensi Konflik Kepentingan</Text>
                      </Button>
                    untuk cari tahu lebih lanjut
                  </Text>
                </Box>
              </Flex>
  
              <Box style={{ padding: mobile || tablet ? "0 12px" : "0" }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : tablet ? 'repeat(5, 1fr)' : 'repeat(5, 1fr)',
                  gap: '2px',
                }}>
                  {
                    chosenDpr.map((item: any, index: number) => (
                      <React.Fragment key={index}>
                        <BoxChosenDpr
                          className={classes.gridItem}
                          data={item}
                          style={{ boxSizing: 'border-box' }}
                        />
                      </React.Fragment>
                    ))
                  }
                </div>
              </Box>
            </Flex>
          </Container>
        </Box>
      </>*/
  );
};
