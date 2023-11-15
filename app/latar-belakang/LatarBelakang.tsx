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
  Timeline,
} from "@mantine/core";
import React, { useRef } from "react";
import classes from "./LatarBelakang.module.css";
import { primaryColor, secondaryColor } from "../../public/colors";
import TitleText from "../components/TitleText";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';

const LatarBelakang = () => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const dataDampakRokok = [
    {
      id: 1,
      description:
        "1 dari 10 anak di Indonesia adalah perokok.",
    },
    {
      id: 2,
      description:
        '225,700 orang meninggal  per tahun di Indonesia, akibat rokok.',
    },
    {
      id: 3,
      description:
        "Kasus balita inisial A (2 tahun) viral karena merokok.",
    },
    {
      id: 4,
      description:
        "596 Triliun kerugian negara akibat rokok.",
    },
    {
      id: 5,
      description:
        "10,5 - 15,5 Triliun Rupiah dana BPJS Kesehatan digunakan mengobati penyakit akibat rokok.",
    },
  ];

  const dataTimeline = [
    {
      id: 1,
      title: "2003",
      description: "Indonesia batal tandatangani FCTC."
    },
    {
      id: 2,
      title: "2009",
      description: "Ayat hilang di Undang-Undang Kesehatan."
    },
    {
      id: 3,
      title: "2012",
      description: "Pengajuan RUU Pertembakauan menggantikan RUU PDPTK (Pengendalian Dampak Produk Tembakau terhadap Kesehatan)."
    },
    {
      id: 4,
      title: "2014",
      description: "Pemilu, Cukai rokok nggak naik."
    },
    {
      id: 5,
      title: "2018",
      description: "Peraturan Pemerintah No.109 Tahun 2012 tentang Pengamanan Bahan Yang Mengandung Zat Adiktif Berupa Produk Tembakau Bagi Kesehatan, nggak di revisi."
    },
    {
      id: 6,
      title: "2019",
      description: "Pemilu, Cukai rokok nggak naik."
    },
    {
      id: 7,
      title: "2023",
      description: "Beberapa Anggota DPR menolak rokok untuk disamakan dengan narkotika di UU Kesehatan."
    },
    {
      id: 8,
      title: "2023",
      description: "DPR meminta rokok dibuat aturan secara terpisah pada RPP Kesehatan."
    },
    {
      id: 9,
      title: "2024",
      description: "?"
    }
  ]
  
  const slides = dataDampakRokok.map((item) => (
    <Carousel.Slide key={item.id}>
      <Center h={200}>
        <Text
          fw={600}
          style={{
            textAlign: "center",
            fontSize: rem(mobile? 20 : 25)
          }}
        >
          {item.description}
        </Text>
      </Center>
    </Carousel.Slide>
  ));

  const timelines = dataTimeline.map((item) => (
    <Timeline.Item key={item.id} title={item.title}>
      <Text c="dimmed" size="sm">{item.description}</Text>
    </Timeline.Item>
  ))

  return (
    <Container size="md" my="md">
      <Center my={mobile ? rem(30) : rem(60)}>
        <TitleText text={"Latar Belakang"} size={"32px"}></TitleText>
      </Center>
      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, xs: 6 }} >
          <Text
            style={{
              fontSize: rem(50),
              color: primaryColor,
              fontWeight: "800",
              textAlign: mobile?"center":"left"
            }} 
          >
            139,5 Triliun
          </Text>
          <Text
            style={{
              fontSize: rem(18),
              fontWeight: "800",
              lineHeight: "1",
              wordWrap: "break-word",
              textAlign: mobile?"center":"left"
            }}
          >
            Cukai rokok yang diterima negara
          </Text>
          <Text
            style={{
              fontSize: rem(35),
              fontWeight: "800",
              textAlign: "center"
            }}
          >
            VS
          </Text>

          <Text
            style={{
              fontSize: rem(50),
              color: primaryColor,
              fontWeight: "800",
              textAlign: mobile?"center":"right"
            }}
          >
            596,19 Triliun
          </Text>
          <Text
            style={{
              fontSize: rem(18),
              fontWeight: "800",
              lineHeight: "1",
              wordWrap: "break-word",
              textAlign: mobile?"center":"right"
            }}
          >
            Beban yang ditanggung negara akibat rokok
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
        <Grid.Col mb={50} span={{ base: 12, xs: 12 }}>
          <Text
            fw={500}
            mt={20}
            style={{
              textAlign: "justify",
              fontSize: rem(20)
            }}
          >
            Ada yang bilang kalau rokok nyumbang banyak uang untuk negara kita. 
            Faktanya? rokok justru jadi <strong>beban bagi negara</strong> dan <strong>ancaman untuk anak-anak 
            dan generasi muda Indonesia</strong>.
          </Text>
        </Grid.Col>

        <Grid.Col style={{alignItems:"center"}} span={{ base: 12, xs: 12 }}>
          <Text
            fw={800}
            c={primaryColor}
            style={{
              textAlign: "center",
              fontSize: rem(35)
            }}
          >
            Pernah baca dong pasti?
          </Text>
          <Image
            mt={20}
            width={"100%"}
            fit="none"
            src="/assets/images/Rokok.png"
          />
          <Text
            fw={400}
            mt={20}
            style={{
              textAlign: "justify",
              fontSize: rem(20)
            }}
          >
            Rokok memang terbukti sebagai <strong>beban masalah kesehatan</strong>. 
            Rokok bisa menyebabkan kanker, serangan jantung, impotensi, 
            dan gangguan kehamilan dan janin.
          </Text>
        </Grid.Col>
        <Grid.Col  style={{alignItems:"center"}} span={{ base: 12, xs: 12 }}>
          <Text
            fw={800}
            style={{
              textAlign:"center",
              fontSize: rem(25)
            }}
            mb={rem(24)}
          >
            Dampak dari rokok...
          </Text>
            <Carousel orientation={mobile? "horizontal": "vertical"} loop draggable={false} withControls={false} height={200}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              style={{
                backgroundColor: primaryColor,
                borderRadius: 20,
                color:"white"
              }}
            >
              {slides}
            </Carousel>
        </Grid.Col>
        <Grid.Col mb={50} span={{ base: 12, xs: 12 }}>
          <Text
            fw={500}
            mt={20}
            style={{
              textAlign: "justify",
              fontSize: rem(20)
            }}
          >
            Walaupun rokok adalah barang legal tapi produknya gak normal loh! 
            Sayangnya peraturan di negara kita masih lembek untuk ngatur peredaran rokok. 
            Bahkan anak kecil aja masih bisa beli dengan mudah. Kok bisa yah? 
          </Text>
        </Grid.Col>

        <Grid.Col  style={{alignItems:"center"}} span={{ base: 12, xs: 12 }}>
          <Text
            fw={800}
            style={{
              textAlign:"left",
              fontSize: rem(30)
            }}
          >
            Mungkin ini jawabannya...
          </Text>
        </Grid.Col>
        <Grid.Col  style={{alignItems:"center"}} span={{ base: 0, xs: 5 }}>
        </Grid.Col>
        <Grid.Col  style={{alignItems:"center"}} span={{ base: 12, xs: 7 }}>
          <Timeline active={7} lineWidth={5} bulletSize={22} color={primaryColor}>
            {timelines}
          </Timeline>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default LatarBelakang;
