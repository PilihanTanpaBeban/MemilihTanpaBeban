import {
  BackgroundImage,
  Blockquote,
  Button,
  Group,
  Modal,
  Overlay,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { secondaryColor } from "../../public/colors";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { renderTextWithLineBreaks } from "./LineBreakRender";
import styles from "./Modal.module.css";
import { IconX } from "@tabler/icons-react";

interface ModalDetailProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

type datasets = {
  id: number;
  reference: string[];
  mitos: string;
  fakta: string;
};

const data = [
  {
    id: 1,
    reference: [
      "https://exposetobacco.org/wp-content/uploads/EnvironmentBriefID.pdf",
    ],
    mitos:
      "Industri rokok banyak melakukan kegiatan tanam pohon/reboisasi, sebagai bentuk kepedulian terhadap lingkungan, sebagai salah satu bentuk tanggungjawab sosial perushaan.",
    fakta:
      "Dampak lingkungan termasuk pembukaan lahan hutan, penebangan pohon, jauh lebih banyak dibandingkan pohon yang mereka tanam kembali. dan hal ini tidak disorot media.\nPembukaan lahan untuk perkebunan tembakau menyumbang 5% kerusakan hutan global, dan lahan tersebut tidak memungkinkan untuk ditanami kembali karena penggunaan pupuk yang terlalu banyak saat pembudidayaan tembakau. Penggunaan pupuk kimia berlebihan akan berdampak lebih jauh terhadap ekosistem air dan mengganggu makhluk hidup di dalamnya.\nBerdasarkan studi yang di publikasi pada Jurnal Environmental Science and Technology  oleh American Chemical Society (2018), emisi karbon dari produksi rokok 35% lebih tinggi dari industri lainnya dan pencemaran air tawar dan air asin dari produksi rokok 20% lebih tinggi dari industri lainnya sehingga perlu solusi alternatif selain rokok yang lebih aman bagi lingkungan.",
  },
  {
    id: 2,
    reference: [
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3208785/",
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4419584/",
    ],
    mitos: "Rokok bukan candu.",
    fakta:
      'Industri rokok justru mengatur kadar nikotin dalam rokok agar perokok tetap ketagihan, dan Nikotin sama candunya dengan heroin, kokain, dan amfetamin. Penjualan  produk “mild” yang diklaim lebih aman juga tidak didukung dengan penelitian ilmiah yang membuktikan kalau produk ini lebih aman. Faktanya di lapangan, mereka yang merokok "mild" mengonsumsi lebih banyak batang per harinya dan menghisap lebih dalam asapnya.\nSetiap tahun, sekitar 225.700 orang di Indonesia meninggal akibat merokok atau penyakit lain yang berkaitan dengan konsumsi rokok (WHO, 2020).\nBadan Narkotika Nasional, melalui informasi pada situsnya menyebutkan, sebenarnya nikotin pada rokok merupakan salah satu zat psikotropika stimulan. Oleh karenanya rokok sebenarnya sudah masuk kategori narkotika jenis rendah.',
  },
  {
    id: 3,
    reference: [],
    mitos:
      "Industri rokok berkontribusi terhadap pendapatan negara melalui cukai.",
    fakta:
      "Berdasarkan UU No.39/2007 tentang Cukai, fungsi utama cukai adalah sebagai pengendalian konsumsi. Cukai dibayarkan oleh konsumen, pembeli produk rokok, bukan oleh industri rokok.\nSecara global, kerugian yang disebabkan oleh konsumsi rokok termasuk biaya kesehatan langsung dan tidak langsung, dan sebagainya, mencapai USD 2 triliun di tahun 2016. Sedangkan di Indonesia, Balitbangkes Kemenkes memperkirakan kerugian sebesar Rp 596,19 miliar di tahun 2015 akibat penyebab yang sama.",
  },
  {
    id: 4,
    reference: [],
    mitos:
      "Kenaikan cukai rokok berdampak buruk bagi pekerja industri rokok dan petani tembakau",
    fakta:
      "Sistem tata niaga tembakau yang dikendalikan oleh industri rokok mulai dari penentuan harga jual tembakau, penentuan kualitas, dan standar tembakau mentah, membuat petani bergantung kepada industri. Kenyataan ini juga mempersulit petani untuk beralih tanam ke tanaman lain yang lebih menguntungkan.\nPenelitian CISDI (2023) justru menyatakan bahwa, dengan kenaikan cukai rokok sebesar 45% di tahun 2019, terdapat 400,3 ribu lapangan pekerjaan yang baru. Penelitian ini juga didukung oleh berbagai penelitian di negara lain yang menyatakan bahwa kenaikan cukai rokok akan berdampak positif terhadap terbukanya lapangan pekerjaan baru di lain tempat. Berbagai praktik di negara di dunia menyatakan bahwa penyebab utama terjadinya PHK pada industri rokok bukanlah kenaikan cukai, melainkan adanya mesin pembuat rokok yang dapat membuat rokok lebih efisien dan murah dibandingkan manusia.",
  },
  {
    id: 5,
    reference: [],
    mitos:
      "Kenaikan cukai rokok menyebabkan jumlah rokok ilegal meningkat di pasaran.",
    fakta:
      "Mayoritas rokok yang beredar secara ilegal merupakan produk pabrikan legal yang sengaja dijual kepada penyelundup untuk menghindarkan industri legal membayar cukainya.\nSurvei yang dilakukan oleh PRAKARSA (2019),  menyatakan bahwa jumlah rokok ilegal di Indonesia tak mencapai 2%. Dari 1201 bungkus yang dikumpulkan dari 1440 perokok, hanya 20 bungkus yang terindikasi ilegal ( tidak memiliki pita cukai yang sah, tidak ada peringatan kesehatan), serta penurunan penjualan rokok ilegal beriringan dengan kenaikan cukai dan harga rokok di Indonesia",
  },
  {
    id: 6,
    reference: [],
    mitos:
      "Industri rokok tidak menargetkan anak dan remaja sebagai target pasar produk berbahaya mereka.",
    fakta:
      "Industri rokok menargetkan anak-anak melalui iklan yang berada di sekitar sekolah, tempat bermain anak, dan kawasan lain tempat anak berkegiatan. Pernyataan ini didasari oleh studi tahun 2022 yang dilakukan di 42 negara, termasuk Indonesia.\nStudi tahun 2022 yang dilakukan di 42 negara, termasuk Indonesia menemukan bahwa taktik industri berjualan rokok kepada anak adalah dengan memajang rokok di dekat permen, makanan ringan, dan minuman manis; menempatkan iklan rokok setinggi mata anak-anak; memasarkan rokok berperisa melalui iklan dan atau display produk; dan menjual rokok secara batangan. Studi TCSC IAKMI (2018) menyatakan bahwa paparan iklan rokok melalui televisi, radio, billboard, poster, dan internet; serta promosi dalam bentuk pemberian sampel rokok gratis dan potongan harga; dan sponsor rokok di acara olahraga, acara musik, dan logo pada merchandise, terbukti meningkatkan peluang anak untuk menjadi perokok lebih tinggi dibandingkan anak yang tidak terpapar IPS rokok. Selain itu, industri rokok juga gencar mengeluarkan produk baru yang mengandung perisa, dan sudah terbukti lebih menarik bagi anak.",
  },
  {
    id: 7,
    reference: [
      "https://drive.google.com/file/d/1gzVcBzfICj6swym4XiGLLJ888F40Txga/view",
    ],
    mitos: "Rokok elektronik lebih aman dari rokok konvensional.",
    fakta:
      "Rokok elektronik sama-sama mengandung nikotin yang bersifat adiktif, dan merupakan faktor risiko kesehatan dari berbagai penyakit katastropik.\nWorld Health Organization (WHO) mengistilahkan rokok elektronik  sebagai Electronic Nicotine Delivery System (ENDS) karena menghasilkan nikotin dalam bentuk uap yang kemudian dihirup oleh pengguna. Selain ENDS, adapula Heated Tobacco Products (HTP) atau tembakau yang dipanaskan. Kedua produk ini adalah produk baru industri rokok untuk menjual adiksi kepada penggunanya. Kedua produk ini terbukti dapat menyebabkan dampak buruk terhadap kesehatan karena berisiko menyebabkan adiksi, penyakit pernapasan, kanker, meningkatkan risiko asma, menjadi faktor risiko pneumotoraks, meningkatkan risiko terjadinya diffuse alveolar hemorrhage, merusak pertumbuhan janin, berdampak pada otak kaum muda, berhubungan dengan berbagai tipe pneumonitis, dan memiliki risiko terjadi ledakan pada pemakainya (Taylor et al., 2014; Kamada et al., 2016). Selain itu, perlu diketahui bahwa lebih dari 95% dari pengguna rokok elektronik di Indonesia merupakan dual users (juga menggunakan rokok konvensional). Ini artinya risiko kesehatan yang dialami oleh para pengguna menjadi lebih tinggi.\nSelain terhadap kesehatan, rokok elektronik juga merupakan ancaman baru bagi lingkungan. Rokok elektronik mengandung cukup racun untuk dikategorikan sebagai sampah bahan berbahaya beracun (B3).Berdasarkan uji laboratorium terhadap komponen rokok elektronik yang sudah dibuang, cemaran logam berat yang dihasilkan mencapai sepuluh kali lipat diatas nilai ambang batas yang ditentukan.",
  },
  {
    id: 8,
    reference: [
      "https://www.emro.who.int/tobacco/tobacco-free-public-places/myth-8-smoke-free-laws-harm-the-hospitality-and-tourism-sectors.html",
      "https://pubmed.ncbi.nlm.nih.gov/10349895/",
    ],
    mitos:
      "Penegakan peraturan Kawasan Tanpa Rokok akan merugikan industri pariwisata, hotel, dan restoran.",
    fakta:
      "Tidak ditemukan penelitian objektif dan metodologi yang valid, yang menyatakan dampak negatif penerapan KTR pada industri pariwisata, perhotelan, restauran, dan bar.\nPeraturan KTR merupakan anjuran Organisasi Kesehatan Dunia (WHO). WHO menilai bahwa paparan asap rokok dari orang lain (perokok pasif) juga dapat menyebabkan penyakit kanker, paru, jantung, dan penyakit katastropik lainnya. Maka, KTR penting untuk melindungi orang lain dari paparan asap rokok. Lebih lanjut, KTR juga melindungi orang dari paparan iklan, promosi, dan penjualan rokok untuk mencegah perokok-perokok baru khususnya anak-anak.\nStudi literatur terhadap 115 penelitian di Australia, Kanada, Amerika Serikat, menyatakan bahwa peraturan KTR tidak bersifat negatif terhadap industri perhotelan baik dari segi pendapatan, keuntungan, pekerjaan, dalam jangka panjang. Di Indonesia, salah satu Kota yang dapat dijadikan contoh mengenai penerapan Kawasan Tanpa Rokok dan juga larangan iklan, promosi, dan sponsorship rokok adalah Kota Bogor. Pendapatan Kota Bogor justru meningkat seiring dengan penerapan peraturan tersebut di atas",
  },
  {
    id: 9,
    reference: [],
    mitos: "Merokok merupakan warisan budaya yang harus dilestarikan.",
    fakta:
      "Rokok merupakan kebiasaan bangsa asing yang dibawa ke Indonesia dalam rangka berdagang. Rokok lebih cocok dianggap sebagai kebiasaan yang buruk, bukan budaya. Sosiolog Universitas Indonesia, Imam Prasojo, mengatakan bahwa ciri-ciri budaya adalah perilaku yang menunjukan manusia beradab. Sedangkan merokok adalah perilaku tidak beradab. Lebih cocok jika rokok dianggap sebagai kebiasaan.\nMenurut sejarawan Belanda, rokok yang berasal dari tanaman tembakau, bukanlah tanaman asli Indonesia. Setelah menjadi tren di Eropa, tembakau dibawa masuk ke Indonesia oleh kolonialisme barat, setidaknya pada abad ke-16 atau ke-17.",
  },
  {
    id: 10,
    reference: [
      "https://drive.google.com/file/d/19UsCGAARByp3EcEjDoDy96dGXXBXtYTt/view?usp=drive_link"
    ],
    mitos: "Sampah puntung rokok dapat didaur ulang.",
    fakta:
      "Puntung rokok mengandung cukup racun, sehingga dapat dikategorikan sebagai sampah bahan berbahaya beracun (B3) dan memerlukan perlakuan khusus, sehingga tidak dapat didaur ulang.Setiap tahun, diperkirakan ada 5.5 triliun puntung rokok yang menjadi sampah, yang mayoritas dibuang sembarangan dan mencemari lingkungan. Ini artinya ada sekitar 1.2 juta ton sampah puntung rokok. Walaupun terlihat kecil, tapi karena begitu masifnya konsumsi rokok, alhasil begitu banyak sampah puntung yang dihasilkan. Sama seperti rokok yang mengadung berbagai racun, maka puntung rokok juga mengandung racun diantaranya, nikotin, karsinogen,  arsenik, benzena, hidrogen sianida, piridin, logam berat, dan Polycyclic Aromatic Hydrocarbons. Zat beracun ini terperangkap pada filter yang ada di puntung rokok. Untuk diketahui, filter rokok terbuat dari cellulose acetate yang merupakan sejenis olahan plastik yang tidak dapat terdegradasi secara alami dan akan mencemari lingkungan untuk waktu yang sangat lama.",
  },
  {
    id: 11,
    reference: ["https://drive.google.com/file/d/1bwF9YvLUzWzg0m9VZWiG_W1a9i3dO9gR/view?usp=sharing"],
    mitos:
      "Pelarangan penjualan rokok batangan akan berdampak negatif bagi industri rokok.",
    fakta:
      "Penjualan rokok batangan memudahkan akses anak untuk membeli rokok sehingga menghambat upaya pengendalian konsumsi rokok dan tercapainya target penurunan prevalensi perokok anak pada RPJMN",
  },
];

const ModalDetail: React.FC<ModalDetailProps> = ({ id, isOpen, onClose }) => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const [selectedData, setSelectedData] = useState<datasets>({
    id: 0,
    reference: [],
    mitos: "",
    fakta: "",
  });

  useEffect(() => {
    const result = data.find((item) => item.id === id);
    setSelectedData(result ?? { id: 0, reference: [], mitos: "", fakta: "" });
  }, [id]);

  const customModalStyles = {
    body: {
      padding: 0,
    },
  };

  const backgroundImageUrl = `../../assets/images/Mitos_Fakta_Image/${id}.png`;
  return (
    <>
      <Modal
        opened={isOpen}
        onClose={onClose}
        closeOnClickOutside={true}
        withCloseButton={false}
        size={mobile ? "100%" : "70%"}
        styles={customModalStyles}
        overlayProps={{
          backgroundOpacity: 0.8,
          blur: 3,
        }}
        radius={"xl"}
      >
        <BackgroundImage
          src={backgroundImageUrl}
          h={rem(400)}
          ta={"right"}
          style={{
            position: "relative",
          }}
        >
          {[2, 4, 5, 6, 7, 9, 11].includes(id) ? (
            <Overlay zIndex={0} color="#000" backgroundOpacity={0} blur={4} />
          ) : null}
          <IconX
            style={{
              width: rem(30),
              height: rem(30),
              color: "white",
              marginTop: "1rem",
              marginRight: "1rem",
            }}
            onClick={onClose}
            stroke={1.5}
          />
        </BackgroundImage>
        <div style={{ padding: rem(50) }}>
          <Title c={secondaryColor} order={3} w={"100%"}>
            Pernyataan:
          </Title>
          <Text ta={"justify"} fs={rem(16)} mt={rem(3)} mb={rem(16)}>
            {selectedData.mitos}
          </Text>
          <Title c={secondaryColor} order={3} w={"100%"}>
            Fakta:
          </Title>
          <Text ta={"justify"} mt={rem(3)} fs={rem(16)}>
            {renderTextWithLineBreaks(selectedData.fakta)}
          </Text>
          {selectedData.reference.length != 0 && (
            <Blockquote color="violet" p={rem(20)}>
              <Text ta={"justify"}>Pelajari Selengkapnya:</Text>
              {selectedData.reference.map((listReference) => (
                <Text truncate="end" key={listReference}>
                  <a href={listReference} key={listReference}>
                    {listReference}
                  </a>
                  {selectedData.reference.length > 1 && <br />}
                </Text>
              ))}
            </Blockquote>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalDetail;
