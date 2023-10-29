import {
  Container,
  Text,
  Grid,
  Skeleton,
  Image,
  Center,
  rem,
  Overlay,
  Spoiler,
  Box,
} from "@mantine/core";
import React from "react";
import classes from "./LatarBelakang.module.css";
import { primaryColor, secondaryColor } from "../../public/colors";
import TitleText from "../components/TitleText";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";

const LatarBelakang = () => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  return (
    <Container size="xl" my="md">
      <Center my={mobile ? rem(30) : rem(60)}>
        <TitleText text={"Latar Belakang"} size={"32px"}></TitleText>
      </Center>
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, xs: 6 }} ta={mobile ? "center" : "left"}>
          <Text
            style={{
              fontSize: rem(92),
              color: primaryColor,
              fontWeight: "800",
            }}
          >
            3,2 juta
          </Text>
          <Text
            style={{
              fontSize: rem(48),
              fontWeight: "800",
              lineHeight: "1",
              wordWrap: "break-word",
            }}
          >
            anak di Indonesia merokok
          </Text>
          <Text
            mt={22}
            style={{
              fontSize: rem(20),
              fontWeight: "500",
            }}
          >
            (Riskesdas, 2018)
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Box>
            <Image
              radius={"md"}
              width={"100%"}
              fit="contain"
              src="/assets/images/cigarrets.png"
            />
          </Box>
        </Grid.Col>
        <Grid.Col mb={78} span={{ base: 12, xs: 12 }}>
          <Text
            fw={500}
            mt={38}
            style={{
              textAlign: "justify",
            }}
          >
            Survei dari Lingkaran Survei Indonesia (LSI) bekerja sama dengan
            Komite Nasional Pengendalian Tembakau (Komnas PT) menunjukkan bahwa
            63,5% dari responden menyatakan keinginan untuk memilih atau sangat
            ingin memilih calon presiden yang memberikan perhatian terhadap isu
            kesehatan, Lingkaran Survei Indonesia dan KomnasPT 2023.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>
          <Image
            radius={"md"}
            width={"100%"}
            fit="contain"
            src="/assets/images/fctc_2_1.webp"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 5 }} ta={mobile ? "center" : "left"}>
          <Text
            pl={12}
            style={{
              fontSize: 48,
              fontFamily: "Montserrat",
              fontWeight: "800",
              wordWrap: "break-word",
              lineHeight: 1.3
            }}
          >
            <span style={{ color: "black" }}>
              Indonesia adalah <br />
              satu-satunya negara di Asia yang{" "}
            </span>
            <span style={{ color: secondaryColor }}>
              belum meratifikasi FCTC
            </span>
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}>
          <Spoiler
            maxHeight={55}
            showLabel="Baca selengkapnya"
            hideLabel="Sembunyikan"
          >
            <Text style={{ textAlign: "justify" }}>
              FCTC menegaskan bahwa {" "}
              <strong>
                “Ada konflik mendasar dan tak bisa diselaraskan antara
                kepentingan industri rokok dan kepentingan kebijakan di bidang
                kesehatan. Industri tembakau memproduksi dan mempromosikan
                penjualan produk yang telah secara ilmiah terbukti bersifat
                narkotik, menyebabkan penyakit dan kematian, serta berkontribusi
                pada perkembangan berbagai kejahatan sosial, termasuk
                meningkatnya tingkat kemiskinan. Oleh karena itu, Para Pihak
                harus, sejauh mungkin, melindungi formulasi dan pelaksanaan
                kebijakan perlindungan kesehatan masyarakat dalam perang melawan
                tembakau dari pengaruh industri tembakau.”
              </strong>
            </Text>
          </Spoiler>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default LatarBelakang;
