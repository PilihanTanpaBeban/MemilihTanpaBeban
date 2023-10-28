import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { Container, Grid, Group, rem } from "@mantine/core";
import { bgGrayColor } from "../public/colors";
import Card from "../app/components/Card";

const data = [
  {
    id: 1,
    mitos:
      "Industri rokok banyak melakukan kegiatan tanam pohon/reboisasi, sebagai bentuk kepedulian terhadap lingkungan, sebagai salah satu bentuk tanggungjawab sosial perushaan.",
    fakta:
      "Industri rokok banyak melakukan kegiatan tanam pohon/reboisasi, sebagai bentuk kepedulian terhadap lingkungan, sebagai salah satu bentuk tanggungjawab sosial perushaan.",
  },
  {
    id: 2,
    mitos: "Rokok bukan candu.",
    fakta:
      "Industri rokok justru mengatur kadar nikotin dalam rokok agar perokok tetap ketagihan, dan Nikotin sama candunya dengan heroin, kokain, dan amfetamin. Penjualan produk “mild” yang diklaim lebih aman juga tidak didukung dengan penelitian ilmiah yang membuktikan kalau produk ini lebih aman.",
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
    mitos:
      "Penegakan peraturan Kawasan Tanpa Rokok akan merugikan industri pariwisata, hotel, dan restoran.",
    fakta:
      "Peraturan KTR merupakan anjuran Organisasi Kesehatan Dunia (WHO). WHO menilai bahwa paparan asap rokok dari orang lain (perokok pasif) juga dapat menyebabkan penyakit kanker, paru, jantung, dan penyakit katastropik lainnya. Maka, KTR penting untuk melindungi orang lain dari paparan asap rokok.",
  },
  {
    id: 8,
    mitos: "Rokok elektronik lebih aman dari rokok konvensional.",
    fakta:
      "World Health Organization (WHO) mengistilahkan rokok elektronik sebagai Electronic Nicotine Delivery System (ENDS) karena menghasilkan nikotin dalam bentuk uap yang kemudian dihirup oleh pengguna. Selain ENDS, adapula Heated Tobacco Products (HTP) atau tembakau yang dipanaskan. Kedua produk ini adalah produk baru industri rokok untuk menjual adiksi kepada penggunanya.",
  },
];

const slides = data.map((data) => (
  <React.Fragment key={data.id}>
    <Grid.Col span={{ base: 12, md: 6 }} style={{padding:'30px'}}>
      <Card id={data.id} style={{minHeight:rem(434)}} textMitos={data.mitos} textFakta={data.fakta} key={data.mitos} />
    </Grid.Col>
  </React.Fragment>
));

function MitosVsFaktaPage() {
  return (
    <>
      <HeroBgImg
        pt={rem(250)}
        pb={rem(250)}
        text={"Mitos dan Fakta\nSeputar Rokok"}
        imgFileName={"prodigi_1.webp"}
      ></HeroBgImg>
      <Group py={rem(83)} style={{ backgroundColor: bgGrayColor }}>
        <Container size={"lg"}>
          <Grid gutter={{ base: 5, xs: "md", md: "lg", xl: 30 }}>{slides}</Grid>
        </Container>
      </Group>
    </>
  );
}

export default MitosVsFaktaPage;
