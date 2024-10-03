import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import {
  Group,
  Avatar,
  Text,
  Accordion,
  rem,
  Container,
  List,
  Image,
  Flex,
} from "@mantine/core";
import { primaryColor, secondaryColor } from "../public/colors";
import {
  renderTextWithLineBreaks,
  renderTextWithLineBreaksList,
} from "../app/components/LineBreakRender";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../app/components/disclaimer.module.css";
import TitleText from "../app/components/TitleText";
import HeroVector from "../app/hero-vector/HeroVector";
import pict from "../public/assets/images/bijakmemilih.webp";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../theme";

const charactersList = [
  {
    id: "1",
    icon: "book.png",
    label: "1.1. Umum",
    content: {
      textBefore: "",
      list: [
        "Informasi yang ditampilkan di situs Pilihan Tanpa Beban tidak dapat dianggap sebagai data utama, kami mendorong para pengunjung situs untuk mencari tahu lebih lanjut dan lebih dalam melalui sumber yang tersedia di tempat lain untuk dijadikan bahan referensi, rujukan, maupun sumber informasi utama.",
        "Pilihan Tanpa Beban bukanlah situs pers. Kami mengumpulkan dan menyadur informasi yang tersedia secara umum melalui media daring maupun daring.",
        "Pilihan Tanpa Beban tidak berafiliasi dan tidak memiliki hubungan kerja/klien dengan partai politik, kandidat individu, atau pihak lain yang memiliki kepentingan dalam Pemilihan Umum atau pemilihan politik lainnya.",
        "Pilihan Tanpa Beban bersifat independen sebagai wadah edukasi politik dan mengembalikan pilihan kepada masyarakat.",
        "Informasi dasar untuk anggota legislatif berupa nama, foto, fraksi, daerah pemilihan, dan komisi yang ditampilkan di dalam website ini diperoleh dari data dpr.go.id",
      ],
      textAfter: "",
    },
  },
  {
    id: "2",
    icon: "mail.png",
    label: "1.2. Sumber Data",
    content: {
      textBefore:
        "Tim Penulis memanfaatkan berbagai sumber yang dapat diakses oleh masyarakat umum, dalam merangkum tiap isu termasuk, namun tidak terbatas pada:",
      list: [
        "Situs berita lokal dan internasional yang kredibel",
        "Website pemerintahan (DPR maupun kementerian)",
        "Institut riset lokal atau internasional non-pemerintah",
        "Laporan Harta Kekayaan Pejabat Negara",
        "Laporan tahunan pemerintah/swasta/organisasi",
        "Jurnal akademis.",
        "Laporan Tahunan Perusahaan",
      ],
      textAfter:
        "Sumber data yang digunakan, diharapkan dapat mengakomodasi berbagai sudut pandang dan membantu pengunjung situs untuk memahami isu dengan informasi yang akurat.\nSebagai bentuk pertanggungjawaban, tim penulis mencantumkan semua sumber yang digunakan dalam penulisan yang dapat dilihat pada pautan kata.",
    },
  },
  {
    id: "3",
    icon: "mail.png",
    label: "1.3. Metode Pengumpulan Data",
    content: {
      textBefore: "",
      list: [
        "Periode pengumpulan data dilaksanakan selama bulan Agustus 2023 - Desember 2023",
        "Informasi akan terus diperbarui selama masa Pemilu 2024 berlangsung",
        "Kami mengirimkan surat konfirmasi untuk validasi data dan pernyataan yang didapatkan dari media kepada nama-nama yang tercantum dalam situs ini.",
        "Data eksekutif dan legislatif yang kami cari merupakan institusi atau badan yang terkait dengan masalah pengendalian tembakau.",
        "Komisi DPR RI yang kami prioritaskan untuk didalami adalah komisi:\nIV (Pertanian, Lingkungan Hidup dan Kehutanan, dan Kelautan)\nVI (Perdagangan, Koperasi UKM, BUMN, Investasi, dan Standarisasi Nasional)\nVII (Energi, Riset dan Inovasi, dan Industri)\nIX (Kesehatan, Ketenagakerjaan dan Kependudukan)\nXI (Keuangan, Perencanaan Pembangunan Nasional dan Perbankan)",
        "Kementerian dan Lembaga Negara* yang kami prioritaskan untuk didalami adalah: \nKementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan\nKementerian Koordinator Bidang Perekonomian\nKementerian Sekretariat Negara Republik Indonesia\nKementerian Kesehatan\nKementerian Pemberdayaan Perempuan dan Perlindungan Anak\nKementerian Keuangan\nKementerian Perindustrian\nKementerian Pertanian\nKementerian Perdagangan\nKementerian Ketenagakerjaan\nKementerian Sosial\nKementerian Komunikasi dan Informasi\nKementerian Pendidikan, Kebudayaan, Riset, dan Teknologi\nKementerian Pemuda dan Olahraga\nBadan Pengawas Obat dan Makanan\nBadan Kependudukan dan Keluarga Berencana Nasional \nBadan Perencanaan Pembangunan Nasional",
      ],
      textAfter:""
    },
  },
  {
    id: "4",
    icon: "mail.png",
    label: "1.4. Pembaruan Fase 3",
    content: {
      textBefore: "",
      list: [
        "Pada Fase 3, pengumpulan data yang dilakukan merupakan kumpulan pernyataan/sikap terkait pengendalian zat adiktif berupa produk tembakau oleh Calon Kepala Daerah di tingkat provinsi.",
        "Informasi dasar untuk Calon Kepala Daerah (Gubernur) berupa nama, foto, dan partai bersumber dari situs kpu.go.id"
      ],
      textAfter:
        "Kami menyadari bahwa figur dalam Kementerian/Lembaga Negara non Menteri ataupun Wakil Menteri bukanlah tokoh politik yang dipilih berdasarkan keputusan politik. Namun demikian, kehadiran mereka tetap penting dalam  perumusan-perumusan kebijakan publik sehingga masih perlu didorong komitmennya terhadap masalah pengendalian tembakau.\nIYCTC bukanlah satu-satunya organisasi yang mengawal Pemilu 2024. Jika kamu tertarik untuk mendalami isu pemilu lebih jauh dari berbagai macam sudut pandang, berikut adalah rekomendasi tautan yang bisa kamu buka:",
      link: [
        {
          name: "Rekam jejak",
          logo: "icw.png",
          link: "https://www.rekamjejak.net/",
        },
        {
          name: "Bijak Memilih",
          logo: "bijakmemilih.webp",
          link: "https://www.bijakmemilih.id/",
        },
        {
          name: "Rumah Pemilu",
          logo: "rumahpemilu.png",
          link: "https://rumahpemilu.org/",
        },
      ],
    },
  }
];

function DisclaimerPage() {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  const items = charactersList.map((item) => (
    <Accordion.Item key={item.label} value={item.id}>
      <Accordion.Control px={rem(30)} py={rem(10)}>
        <Group>
          <Image w={50} src={`../../assets/images/${item.icon}`}></Image>
          <Text fw={700} style={{ fontSize: rem(20) }} c={"black"}>
            {item.label}
          </Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel px={rem(16)}>
        {item.content.textBefore != "" && (
          <Text ta={"justify"} fs={rem(16)} lh={1.5}>
            {renderTextWithLineBreaks(item.content.textBefore)}
          </Text>
        )}
        <List my={rem(16)}>
          {item.content.list.map((listItem) => (
            <List.Item mb={rem(16)} key={listItem}>
              <List mr="md">{renderTextWithLineBreaksList(listItem)}</List>
            </List.Item>
          ))}
        </List>
        {item.content.textAfter != "" && (
          <Text ta={"justify"} fs={rem(16)}>
            {renderTextWithLineBreaks(item.content.textAfter)}
          </Text>
        )}
        {item.content.link != null && (
          <Flex
            direction={mobile ? "column" : "row"}
            align="center"
            justify={"center"}
            gap="md"
          >
            {item.content.link.map((linkItem, index) => (
              <React.Fragment key={index}>
                <a
                  style={{ textDecoration: "none" }}
                  href={linkItem.link}
                  target={"_blank"}
                >
                  <Flex
                    justify="flex-end"
                    direction="column"
                    gap="md"
                    align="center"
                  >
                    <Image
                      src={`../assets/images/${linkItem.logo}`}
                      maw={rem(150)}
                    />
                    <Text ta="center" fw="bold" h="100%" c={primaryColor}>
                      {linkItem.name}
                    </Text>
                  </Flex>
                </a>
              </React.Fragment>
            ))}
          </Flex>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <HeroVector
        pt={rem(70)}
        pb={rem(0)}
        text={"Disclaimer"}
        imgFileName={"disclaimer_hero.webp"}
      ></HeroVector>
      <Container size={"lg"} pt={rem(35)} pb={rem(70)}>
        <Text mb={rem(24)}>
          Isu pengendalian konsumsi rokok memang sudah lama pembahasannya.
          Sayangnya, belum belum banyak tokoh politik yang cukup berani untuk
          bersuara dan membela kepentingan kesehatan masyarakat. Pemilihan Umum Presiden dan Legislatif 2024 yang lalu, 
          dan Pemilihan Kepala Daerah 2024 yang akan datang merupakan momentum penting bagi orang muda Indonesia untuk mencari lebih
          banyak tokoh politik yang berani berbicara soal masalah kesehatan dan
          konsumsi rokok.
        </Text>
        <TitleText text={"Landasan hukum"} size={"18px"}></TitleText>
        <Text my={rem(24)}>
          Situs ini adalah bentuk kebebasan berekspresi warga negara yang
          tercantum pada Pasal 28E ayat (3) Undang-Undang Dasar Negara Republik
          Indonesia Tahun 1945 (selanjutnya disebut UUD NRI 1945) yang
          mengamanatkan, “Setiap orang berhak atas kebebasan berserikat,
          berkumpul, dan mengeluarkan pendapat”.
        </Text>
        <Accordion
          variant="separated"
          radius="lg"
          defaultValue="1"
          classNames={{ chevron: classes.chevron }}
          chevron={<IconChevronDown className={classes.icon} />}
        >
          {items}
        </Accordion>
      </Container>
    </>
  );
}

export default DisclaimerPage;
