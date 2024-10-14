import { Title, Text, Container, Image, Group, Flex, rem, Box, Grid, useMantineTheme, DrawerOverlay, Divider } from "@mantine/core";
import classes from "./HeroLanding.module.css";
import BoxChosenDpr from "./chosen-dpr-box/chosen-dpt-box.module";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import HeroVector from "../hero-vector/HeroVector";
import { chosenDpr } from "./chosen-drp";
import { primaryColor, white, lightPurple } from "../../public/colors";
import { useState, useEffect } from "react";
import { PrimaryButton } from "../components/Button"; // Adjust the path as necessary

export const HeroImageBackground = () => {

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);
  const laptop = useMediaQuery(`(max-width: ${theme.breakpoints?.lg})`);
  const desktop = useMediaQuery(`(max-width: ${theme.breakpoints?.xl})`);

  return (
    <>
      <HeroVector
        pt={rem(16)}
        pb={rem(33)}
        imgFileName={"home_redflag.jpg"}
      >
        <Text mb={rem(23)} style={{ fontSize: rem(32), fontWeight: 400 }}>Selamat kepada</Text>
        <Text mt={0} mb={rem(23)} style={{ fontSize: tablet ? rem(32) : rem(40), fontWeight: 800 }}>Dewan Perwakilan Rakyat Terpilih</Text>
        <Text lh={rem(40)} style={{ fontSize: tablet ? rem(24) : rem(32), fontWeight: 600 }}>atas pelantikannya pada <br /> hari Selasa, 1 Oktober 2024.</Text>
      </HeroVector>
      <Container style={{ padding: mobile || tablet ? "0 12px" : "0" }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : tablet ? 'repeat(5, 1fr)' : 'repeat(9, 1fr)',
          gap: '12px',
          marginTop: rem(84),
          marginBottom: rem(36),
        }}>
          {
            chosenDpr.map((item: any, index: number) => (
              <>
                {(index == 18 && !laptop) ? <div></div> : null}
                <BoxChosenDpr
                  className={classes.gridItem}
                  key={index}
                  data={item}
                  style={{ boxSizing: 'border-box' }}
                />
              </>
            ))
          }
        </div>
      </Container>

      <Container p={!mobile && !tablet && !laptop ? "30px" : ""} mx={mobile || tablet ? "5%" : "auto"} bg={primaryColor} style={{ borderRadius: "21px" }}>
        <Flex gap={'xl'} justify="center" align={'center'} p={tablet ? rem(40) : rem(20)} direction={mobile ? 'column-reverse' : 'row'}>
          <Flex direction={"column"} justify={"center"} c={white} >
            <Text maw={!mobile ? '670px' : ''} style={{ textAlign: 'justify', fontSize: mobile || tablet ? rem(16) : rem(24), fontWeight: "600", marginBottom: "50px" }}>Teruntuk Bapak dan Ibu Dewan diatas, Jangan ulangi lagi rekam jejak burukmu dalam menghambat upaya pengendalian konsumsi rokok dan membela kepentingan industri rokok ya!</Text>
            <Text style={{ textAlign: 'justify', fontSize: rem(16), fontWeight: "500" }}>Semoga Bapak dan Ibu hanya khilaf dan bisa melindungi masyarakat dengan baik</Text></Flex>
          <Image
            pt={rem(20)}
            pb={rem(20)}
            src={"../../assets/images/afraid.png"}
            style={{ width: mobile || tablet ? rem(200) : rem(300), height: mobile || tablet ? rem(200) : rem(300) }}
          ></Image>
        </Flex>
      </Container>

      <Flex mt={rem(41)} py={rem(54)} direction={"column"} justify={"center"} align={"center"} px={"8%"} bg={lightPurple}>
        <Text ta={"center"} mb={rem(16)} style={{ fontWeight: "500", fontSize: rem(20) }}>Untuk mengetahui rekam jejak buruk pengendalian konsumsi rokok Anggota DPR RI terpilih 2024-2029 pada periode-periode sebelumnya silakan kunjungi:</Text>

        <PrimaryButton
          text={"Potensi Konflik Kepentingan"}
          radius={"xl"}
          size={"md"}
          w={mobile ? "100%" : undefined}
        />
      </Flex>
    </>
  );
};
