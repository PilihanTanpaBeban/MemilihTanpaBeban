import React from "react";
import HeroBgImg from "../../app/hero-image-bg/hero-image-bg";
import { Text, Container, Grid, Group, Paper, rem } from "@mantine/core";
import { bgGrayColor } from "../../public/colors";
import CardMitosFakta from "../../app/components/Card";
import HeroVector from "../../app/hero-vector/HeroVector";

const data = [
  {
    id: 1,
    mitos:
      "Industri rokok banyak melakukan kegiatan tanam pohon/reboisasi, sebagai bentuk kepedulian terhadap lingkungan, sebagai salah satu bentuk tanggungjawab sosial perushaan.",
    fakta:
      "Dampak lingkungan termasuk pembukaan lahan hutan, penebangan pohon, jauh lebih banyak dibandingkan pohon yang mereka tanam kembali. dan hal ini tidak disorot media.",
  },
  {
    id: 2,
    mitos: "Rokok bukan candu.",
    fakta:
      "Industri rokok justru mengatur kadar nikotin dalam rokok agar perokok tetap ketagihan, dan Nikotin sama candunya dengan heroin, kokain, dan amfetamin.",
  },
  {
    id: 3,
    mitos:
      "Industri rokok berkontribusi terhadap pendapatan negara melalui cukai.",
    fakta:
      "Berdasarkan UU No.39/2007 tentang Cukai, fungsi utama cukai adalah sebagai pengendalian konsumsi. Cukai dibayarkan oleh konsumen, pembeli produk rokok, bukan oleh industri rokok.",
  },
  {
    id: 4,
    mitos:
      "Kenaikan cukai rokok berdampak buruk bagi pekerja industri rokok dan petani tembakau",
    fakta:
      "Sistem tata niaga tembakau yang dikendalikan oleh industri rokok mulai dari penentuan harga jual tembakau, penentuan kualitas, dan standar tembakau mentah, membuat petani bergantung kepada industri. Kenyataan ini juga mempersulit petani untuk beralih tanam ke tanaman lain yang lebih menguntungkan.",
  },
  {
    id: 5,
    mitos:
      "Kenaikan cukai rokok menyebabkan jumlah rokok ilegal meningkat di pasaran.",
    fakta:
      "Mayoritas rokok yang beredar secara ilegal merupakan produk pabrikan legal yang sengaja dijual kepada penyelundup untuk menghindarkan industri legal membayar cukainya.",
  },
  {
    id: 6,
    mitos:
      "Industri rokok tidak menargetkan anak dan remaja sebagai target pasar produk berbahaya mereka.",
    fakta:
      "Industri rokok menargetkan anak-anak melalui iklan yang berada di sekitar sekolah, tempat bermain anak, dan kawasan lain tempat anak berkegiatan. Pernyataan ini didasari oleh studi tahun 2022 yang dilakukan di 42 negara, termasuk Indonesia.",
  },
  {
    id: 7,
    mitos: "Rokok elektronik lebih aman dari rokok konvensional.",
    fakta:
      "Rokok elektronik sama-sama mengandung nikotin yang bersifat adiktif, dan merupakan faktor risiko kesehatan dari berbagai penyakit katastropik",
  },
  {
    id: 8,
    mitos:
      "Penegakan peraturan Kawasan Tanpa Rokok akan merugikan industri pariwisata, hotel, dan restoran.",
    fakta:
      "Tidak ditemukan penelitian objektif dan metodologi yang valid, yang menyatakan dampak negatif penerapan KTR pada industri pariwisata, perhotelan, restauran, dan bar",
  },
];

const slides = data.map((data) => (
  <React.Fragment key={data.id}>
    <Grid.Col span={{ base: 12, md: 6 }} style={{ padding: "30px" }}>
      <CardMitosFakta
        id={data.id}
        style={{ minHeight: rem(434) }}
        textMitos={data.mitos}
        textFakta={data.fakta}
        key={data.mitos}
      />
    </Grid.Col>
  </React.Fragment>
));

function MitosVsFaktaPage() {
  return (
    <>
      {" "}
      <HeroVector
        pt={rem(70)}
        pb={rem(70)}
        text={"Cek Fakta"}
        imgFileName={"fakta_hero.png"}
      ></HeroVector>
      <Group py={rem(83)} style={{ backgroundColor: bgGrayColor }}>
        <Container size={"lg"}>
          <Grid gutter={{ base: 5, xs: "md", md: "lg", xl: 30 }}>{slides}</Grid>
          <Paper shadow="xl" radius="lg" p="xl" mt={"lg"} mx="md">
            <Text>
              Untuk mengetahui lebih lanjut mengenai taktik industri rokok dalam
              melemahkan kebijakan kesehatan masyarakat, berikut beberapa bahan
              bacaan yang dapat dijadikan acuan:
            </Text>
            <a href="https://exposetobacco.org/wp-content/uploads/2019/09/Crooked-9-STOP.pdf">
              https://exposetobacco.org/wp-content/uploads/2019/09/Crooked-9-STOP.pdf
            </a>
          </Paper>
        </Container>
      </Group>
    </>
  );
}

export default MitosVsFaktaPage;
