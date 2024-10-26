import React, { useRef } from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import {
  rem,
  Container,
  Grid,
  Flex,
  Image,
  Text,
  Title,
  Center,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import MindMap from "../app/components/MindMap/MindMap";
import HeroVector from "../app/hero-vector/HeroVector";
import Autoplay from "embla-carousel-autoplay";
import { lightPurple, primaryColor } from "../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../theme";

function KonflikKepentinganPage() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <>
      <HeroVector
        pt={rem(50)}
        pb={rem(0)}
        subtitle="Situs ini bertujuan untuk mengedukasi dan membuka wawasan para pengunjung mengenai konflik kepentingan yang mungkin terjadi pada calon anggota legislatif, calon eksekutif, para incumbent baik di tingkat legislatif maupun eksekutif, dengan industri rokok. Agar, para pengunjung dapat lebih mengenal para calon yang benar-benar memihak kepentingan masyarakat, dan menggunakan hak pilih dengan lebih bijak."
        imgFileName={"konflik_kepentingan.webp"}
      ><Title fw={"800"} lts={rem(-1)} ta={mobile ? 'center' : 'left'} lh={'1.1'} style={{ fontSize: mobile ? rem(28) : rem(64) }}>Potensi<br />Konflik Kepentingan</Title>
        <Text fw={'600'} mt={mobile ? rem(10) : rem(0)} style={{ fontSize: mobile ? rem(16) : rem(24) }}>DPR-RI Periode 2019-2024</Text>
      </HeroVector>
      <div style={{ marginInline: "5%", marginTop: 50 }}>
        <MindMap />
      </div>

      <div style={{ backgroundColor: "#F7FAFF" }}>
        <Container size={"xl"} my={"md"} py={rem(38)} bga={"#F7FAFF"}>
          <Center style={{ width: "100%" }} py={"md"}>
            <Title c={primaryColor} order={2} ta={"center"}>
              Informasi Partai Pemilu Nasional yang terdaftar di KPU <br />
              (di luar partai lokal Aceh)
            </Title>
          </Center>
          <Carousel
            style={{ borderRadius: "20px" }}
            slideSize={{ base: "100%" }}
            slideGap={{ base: rem(2), sm: "xl" }}
            align="start"
            slidesToScroll={1}
            loop
            controlSize={40}
            controlsOffset={"xs"}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide key="1">
              <Flex
                direction={mobile ? "column" : "row"}
                align={"center"}
                justify={"center"}
                bg={"#F9F6FF"}
                h={"100%"}
              >
                <Image
                  w={mobile ? "100%" : "50%"}
                  src={"../assets/images/mindmap-1.png"}
                ></Image>
                <div style={{ padding: rem(40) }}>
                  <Title style={{ fontSize: rem(24) }} mb={rem(20)}>
                    RUU Pertembakauan
                  </Title>
                  <Text ta={"justify"}>
                    Merupakan salah satu produk legislasi paling rumit di
                    Indonesia dan banyak menuai kontroversi. Awalnya RUU
                    Pertembakauan memiliki nama RUU Pengendalian Dampak Produk
                    Tembakau terhadap Kesehatan (RUU PDPTK), namun RUU ini
                    berubah karena desakan dan kepentingan industri tembakau
                    hingga akhirnya nama dan substansi dari RUU Pertembakauan
                    lah yang masuk ke dalam parlemen.{" "}
                    <a
                      href="https://drive.google.com/file/d/1wt3araLr67VWFez6b3f7Al1ulr1EIkD4/view?usp=drive_link"
                      target="_blank"
                    >
                      RUU ini menuai banyak kritik
                    </a>{" "}
                    karena menghilangkan substansi perlindungan kesehatan di
                    dalamnya dan justru sarat kepentingan bisnis tertentu yang
                    tidak benar-benar melindungi petani tembakau. <br />
                    <a
                      href="https://drive.google.com/file/d/1_Bs8T5-dXeg6SqM4ey8SE5NUAo3vm88W/view?usp=drive_link"
                      target="_blank"
                    >
                      [kronologi lengkap]
                    </a>
                  </Text>
                </div>
              </Flex>
            </Carousel.Slide>

            <Carousel.Slide key="2">
              <Title order={2} mb={rem(30)} ta={"center"} px={60}>
                Sikap Partai terhadap RUU Pertembakauan <br />
                (tercatat dalam periode 2009-2014 dan 2014-2019)
              </Title>
              <Grid px={60}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"} style={{ textDecoration: "none" }}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/pkb.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1dJGXMl06DT3YqN0qbPQbCtn-VjmBgMgY/view?usp=drive_link"
                        target="_blank"
                      >
                        Mendukung
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/11Md2CQAAtlHQV5nPcxVS4MW95agZg3JW/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/golkar.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/16yA6j87zN7nm5Wkin_5FBVN16ytQsEoX/view?usp=drive_link"
                        target="_blank"
                      >
                        Mendukung
                      </a>{" "}
                      &
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/12561rDxmMsQYDhTXABrMmrLMzCBH6a0C/view?usp=drive_link"
                        target="_blank"
                      >
                        Pengusul
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/17269PvTgaNE8C8Eg67d2m_vcjXUNQGH7/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/hanura.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1tKRalJ0S82gpLlqRT0gJncr2IVg84aKS/view?usp=drive_link"
                        target="_blank"
                      >
                        Belum ditemukan kutipan sikap yang jelas hanya
                        keterangan simpati
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/nasdem.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1TH3BJTHO3TMjWu1gxngaceHb-yOorOck/view?usp=drive_link"
                        target="_blank"
                      >
                        Mendukung & <br /> Pengusul
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/16dwFZcXQ2X0vxeDaZ1tzrBR_4m-8HQIO/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/gerindra.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1QPiymJLlkfSMi6noeXPWLVBoCfPFEl6k/view?usp=drive_link"
                        target="_blank"
                      >
                        Menolak
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1-aok66P-c3sQXHWA6WmNJlzRgohdOFDM/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                  <Flex align={"center"} justify={mobile ? "center" : "flex-start"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/pdi.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1LmKQL6kNkILaypU6YEviYe03BX1pQvv3/view?usp=drive_link"
                        target="_blank"
                      >
                        Mendukung & <br /> Pengusul
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1AuWSOHkc-iGnbIRwZk7XJaDHSJP-JcS4/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
                  <Flex align="center" justify={"center"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/pks.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1MKM5jWHL2WEGuel5JNbaPU_MyGAS30Vv/view?usp=drive_link"
                        target="_blank"
                      >
                        Masih Meninjau
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1BFmdISLLAQbX0T9BmS0Ms7HmSytnkU3p/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6, md: 6 }}>
                  <Flex align={"center"} justify={"center"}>
                    <Image w={rem(112)} mah={rem(110)} mr="sm" src={`../../assets/images/Partai/ppp.png`} />
                    <Text mx={rem(10)}>
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1kN3N6v8Fm2eS5QfVKs7ef5iHCNPqahKv/view?usp=drive_link"
                        target="_blank"
                      >
                        Memberi Catatan
                      </a>
                      <br />
                      <a style={{ color: primaryColor, fontWeight: "bold", textDecoration: "none" }}
                        href="https://drive.google.com/file/d/1ZNnwmxcm_DceYbNQDI9ETRYguh_KuWyg/view?usp=drive_link"
                        target="_blank"
                      >
                        (sumber lain)
                      </a>
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
            </Carousel.Slide>

            <Carousel.Slide key="3">
              <Flex
                direction={mobile ? "column" : "row"}
                align={"center"}
                justify={"center"}
                bg={"#F9F6FF"}
                h={"100%"}
              >
                <Image
                  w={mobile ? "100%" : "50%"}
                  src={"../assets/images/mindmap-2.png"}
                ></Image>
                <div style={{ padding: rem(40) }}>
                  <Title style={{ fontSize: rem(24) }} mb={rem(20)}>
                    Cukai Rokok
                  </Title>
                  <Text ta={"justify"}>
                    Komisi XI setujui{" "}
                    <a
                      href="https://drive.google.com/file/d/1p6cf6JQ0J8HNjn72_JHvKUUahqdnZKAN/view?usp=drive_link"
                      target="_blank"
                    >
                      kenaikan
                    </a>{" "}
                    cukai rokok 10%.
                    <br />
                    <br />
                    9 Partai: PKB, Gerindra, PDIP, Golkar, Nasdem, PKS,
                    Demokrat, PAN, PPP
                    <br />
                    <br />
                    Sikap terkait dengan kenaikan cukai sangat beragam karena
                    konteks masalah yang dianggap cukup rumit. Pandangan fraksi
                    partai menyetujui kenaikan cukai rokok yang digambarkan dari
                    posisi Komisi XI DPR RI. Namun demikian, sikap ini juga
                    beragam dari masing-masing Aleg yang dapat dilihat di bagian{" "}
                    <a href="#">Potensi Konflik Kepentingan</a> dan{" "}
                    <a href="https://pilihantanpabeban.id/20-24">20.24</a> (baik
                    dari sisi pro dan kontra).
                  </Text>
                </div>
              </Flex>
            </Carousel.Slide>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default KonflikKepentinganPage;
