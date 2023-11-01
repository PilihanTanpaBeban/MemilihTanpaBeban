import { Grid, Image, Container, Text, rem, Group, Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import React from "react";
import classes from "./ContohKasus.module.css";
import "@mantine/carousel/styles.css";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";

const data = [
  {
    id: 1,
    imageName: "img_0344_2.webp",
    description:
      "Bahkan batalnya Indonesia menjadi anggota dari FCTC di tahun 2003, disinyalir akibat bentuk intervensi industri rokok melemahkan upaya perlindungan masyarakat dari bahaya kesehatan yang ditimbulkan rokok. Menteri Kesehatan Achmad Sujudi yang waktu itu sudah berada di New York untuk menandatangani FCTC, tetiba mendapat telepon untuk tidak menandatangani perjanjian, sehingga pengendalian konsumsi rokok di Indonesia saat ini masih lemah.",
  },
  {
    id: 2,
    imageName: "img_0346.webp",
    description:
      'Di tahun 2009 pernah terjadi kasus pasal yang hilang pada UU Kesehatan. Ayat yang hilang itu berbunyi "Zat adiktif sebagaimana dimaksud pada ayat (1) meliputi tembakau, produk yang mengandung tembakau padat, cairan, dan gas yang bersifat adiktif yang penggunaannya dapat menimbulkan kerugian bagi dirinya dan/ atau masyarakat sekelilingnya." Setelah ditelusuri oleh pihak berwajib, Ketua Komisi IX DPR RI yang saat itu menjabat, Ribka Tjiptaning (PDI-P), menjadi salah satu nama yang disinyalir menjadi tersangka yang menghilangkan pasal, namun kasus tersebut dihentikan dengan alasan bukan termasuk tindak pidana. Kok bisa ya tindakan mencederai konstitusi, hilang begitu saja?',
  },
  {
    id: 3,
    imageName: "img_0347.webp",
    description:
      "Di tingkat daerah, kasus intervensi industri rokok pun beragam. Salah satu yang mendapatkan sorotan adalah korupsi yang dilakukan oleh mantan kepala BP Tanjung Pinang, Den Yealta, yang merugikan negara hingga 296 Milyar Rupiah. Den juga diduga banyak menguntungkan industri rokok dengan memalsukan data kuota rokok daerah.",
  },
];

const slides = data.map((item) => (
  <Carousel.Slide key={item.id}>
    <Grid
      columns={24}
      gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
      align="center"
    >
      <Grid.Col span={{ base: 0, md: 1 }} />
      <Grid.Col span={{ base: 23, md: 11 }}>
        <Flex align={"center"} justify={"center"}>
          <Image
            radius="md"
            src={`../../assets/images/${item.imageName}`}
            className={classes.imgCarousel}
          />
        </Flex>
      </Grid.Col>

      <Grid.Col
        span={{ base: 23, md: 11 }}
        style={{ textAlign: "justify" }}
        className={classes.textCarousel}
      >
        <Text>{item.description}</Text>
      </Grid.Col>
      <Grid.Col span={1} />
    </Grid>
  </Carousel.Slide>
));

const ContohKasus = () => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  return (
    <div style={{ backgroundColor: "#F7FAFF" }}>
      <Container size={"md"} my={"md"} py={rem(38)} bga={"#F7FAFF"}>
        <Text
          fw={700}
          mb={rem(10)}
          className={classes.title}
          ta={mobile ? "center" : "justify"}
        >
          Beberapa Contoh Kasus Intervensi Industri Rokok yang Mengakibatkan
          Lemahnya Peraturan Kesehatan Masyarakat di Indonesia Antara Lain:
        </Text>

        <Carousel
          style={{ borderRadius: "20px" }}
          slideSize={{ base: "100%" }}
          slideGap={{ base: rem(2), sm: "xl" }}
          align="start"
          slidesToScroll={1}
          loop
          bg={"white"}
          pt={rem(41)}
          controlSize={50}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
};

export default ContohKasus;
