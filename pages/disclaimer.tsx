import React from "react";
import {
  Group,
  Text,
  Accordion,
  rem,
  Container,
  List,
  Image,
  Flex,
  Stack,
} from "@mantine/core";
import { bgGrayColor, white } from "../public/colors";
import {
  renderTextWithLineBreaks,
  renderTextWithLineBreaksList,
} from "../app/components/LineBreakRender";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../app/components/styles/disclaimer.module.css";
import HeroVector from "../app/hero-vector/HeroVector";
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
        "Informasi dasar untuk anggota legislatif, eksekutif dan calon kepala daerah yang berupa nama, foto, fraksi, daerah pemilihan, dan komisi yang ditampilkan di dalam website ini diperoleh dari data dpr.go.id",
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
        "KPU daerah dan KPU Pusat"
      ],
      textAfter:
        "Sumber data yang digunakan, diharapkan dapat mengakomodasi berbagai sudut pandang dan membantu pengunjung situs untuk memahami isu dengan informasi yang akurat.\nSebagai bentuk pertanggungjawaban, tim penulis mencantumkan semua sumber yang digunakan dalam penulisan yang dapat dilihat pada pautan kata.",
    },
  },
  {
    id: "3",
    icon: "folder.png",
    label: "1.3. Metode Pengumpulan Data",
    content: {
      textBefore: "",
      list: [
        "Periode pengumpulan data dilakukan dalam 2 tahap, tahap 1 periode Agustus 2023 - Desember 2023 untuk DPR-RI dan pemerintah pusat, untuk tahap 2 dilakukan pada periode Agustus - November 2024 untuk DPR-RI terpilih dan Calon Kepala Daerah",
        "informasi akan terus diperbarui untuk pemetaan Pemerintah Pusat/Kabinet Merah Putih",
        "Kami mengirimkan surat konfirmasi untuk validasi data dan pernyataan yang didapatkan dari media kepada nama-nama yang tercantum dalam situs ini.",
        "Data eksekutif dan legislatif yang kami cari merupakan institusi atau badan yang terkait dengan masalah pengendalian zat adiktif berupa produk tembakau.",
        "Kami melakukan profiling terhadap seluruh anggota DPR-RI terpilih berdasarkan situs resmi KPU per pemilihan daerah:\nIV (Pertanian, Lingkungan Hidup dan Kehutanan, dan Kelautan)\nVI (Perdagangan, Koperasi UKM, BUMN, Investasi, dan Standarisasi Nasional)\nVII (Energi, Riset dan Inovasi, dan Industri)\nIX (Kesehatan, Ketenagakerjaan dan Kependudukan)\nXI (Keuangan, Perencanaan Pembangunan Nasional dan Perbankan)",
        "Profiling Kementerian dan lembaga Negara dilakukan berdasarkan susunan kabinet merah putih terbaru yang kami prioritaskan untuk didalami adalah: \nKementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan\nKementerian Koordinator Bidang Perekonomian\nKementerian Sekretariat Negara Republik Indonesia\nKementerian Kesehatan\nKementerian Pemberdayaan Perempuan dan Perlindungan Anak\nKementerian Keuangan\nKementerian Perindustrian\nKementerian Pertanian\nKementerian Perdagangan\nKementerian Ketenagakerjaan\nKementerian Sosial\nKementerian Komunikasi dan Informasi\nKementerian Pendidikan, Kebudayaan, Riset, dan Teknologi\nKementerian Pemuda dan Olahraga\nBadan Pengawas Obat dan Makanan\nBadan Kependudukan dan Keluarga Berencana Nasional \nBadan Perencanaan Pembangunan Nasional",
      ],
      textAfter: ""
    },
  },
  // {
  //   id: "4",
  //   icon: "calendar.png",
  //   label: "1.4. Pembaruan Fase 3",
  //   content: {
  //     textBefore: "",
  //     list: [
  //       "Pada Fase 3, pengumpulan data yang dilakukan merupakan kumpulan pernyataan/sikap terkait pengendalian zat adiktif berupa produk tembakau oleh Calon Kepala Daerah di tingkat provinsi.",
  //       "Informasi dasar untuk Calon Kepala Daerah (Gubernur) berupa nama, foto, dan partai bersumber dari situs <a style=\"text-decoration: none; color:black; font-weight: bold;\" href=\"https://kpu.go.id\"><em>kpu.go.id</em></a>"
  //     ],
  //     textAfter: "",
  //     link: []
  //   },
  // }
];

const otherReferencess = [
  {
    name: "Rekam jejak",
    logo: "icw.png",
    link: "https://www.rekamjejak.net/",
  },
  {
    name: "Bijak Memilih",
    logo: "bijakmemilih.jpg",
    link: "https://www.bijakmemilih.id/",
  },
  {
    name: "Rumah Pemilu",
    logo: "rumahpemilu.png",
    link: "https://rumahpemilu.org/",
  },
]

function DisclaimerPage() {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  const items = charactersList.map((item) => (
    <Accordion.Item key={item.label} value={item.id}
      className={classes.accordionItem}>
      <Accordion.Control px={rem(30)} py={rem(10)}
        className={classes.accordionControl}>
        <Group>
          <Image w={50} src={`../../assets/images/${item.icon}`}></Image>
          <Text fw={700} style={{ fontSize: rem(20) }} c={"black"}>
            {item.label}
          </Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel px={rem(16)} style={{ border: 'none' }} className={classes.accordionControlActive}>
        {item.content.textBefore != "" && (
          <Text ta={"justify"} fs={rem(16)} lh={1.5}>
            {renderTextWithLineBreaks(item.content.textBefore)}
          </Text>
        )}
        <List my={rem(16)}
          classNames={{
            item: classes['mantine-List-item']
          }}
        >
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
      <div style={{ backgroundColor: bgGrayColor }}>
        <Container size={"lg"} pt={rem(95)} pb={rem(70)}>
          <Text mb={rem(20)} ta={"justify"}>
            Isu pengendalian konsumsi rokok memang sudah lama pembahasannya.
            Sayangnya, belum belum banyak tokoh politik yang cukup berani untuk
            bersuara dan membela kepentingan kesehatan masyarakat. Pemilihan Umum Presiden dan Legislatif 2024 yang lalu,
            dan Pemilihan Kepala Daerah 2024 yang akan datang merupakan momentum penting bagi orang muda Indonesia untuk mencari lebih
            banyak tokoh politik yang berani berbicara soal masalah kesehatan dan
            konsumsi rokok.
          </Text>
          <Text fw={"bold"} mt={rem(50)} style={{ fontSize: rem(24) }}>Landasan hukum</Text>
          <Text mt={rem(10)} mb={rem(53)} ta={"justify"}>
            Situs ini adalah bentuk kebebasan berekspresi warga negara yang
            tercantum pada Pasal 28E ayat (3) Undang-Undang Dasar Negara Republik
            Indonesia Tahun 1945 (selanjutnya disebut UUD NRI 1945) yang
            mengamanatkan, “Setiap orang berhak atas kebebasan berserikat,
            berkumpul, dan mengeluarkan pendapat”.
          </Text>
          <Accordion
            variant="separated"
            radius="xl"
            defaultValue="1"
            classNames={{ chevron: classes.chevron }}
            chevron={<IconChevronDown className={classes.icon} />}>
            {items}
          </Accordion>
          <Flex direction={'column'} p={rem(30)} bg={white} mt={rem(50)} mb={rem(24)} style={{ fontSize: rem(20), boxShadow: '0 6px 6px rgba(0, 0, 0, 0.05)', borderRadius: rem(24) }}>
            <Text
              mb={"xl"}>*Kami menyadari bahwa figur dalam Kementerian/Lembaga Negara non Menteri ataupun Wakil Menteri bukanlah tokoh politik yang dipilih berdasarkan keputusan politik. Namun demikian, kehadiran mereka tetap penting dalam perumusan-perumusan kebijakan publik sehingga masih perlu didorong komitmennya terhadap masalah pengendalian zat adiktif berupa produk tembakau.</Text>
            <Text
              mb={"xl"}>IYCTC bukanlah satu-satunya organisasi yang mengawal Pemilu 2024.<br></br>Jika kamu tertarik untuk mendalami isu pemilu lebih jauh dari berbagai macam sudut pandang, berikut adalah rekomendasi tautan yang bisa kamu buka:</Text>

            <Flex
              gap="xl"
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap"
              mb={"xl"}
            >
              {otherReferencess.map((linkItem, index) => (
                <React.Fragment key={index}>
                  <a
                    style={{ textDecoration: "none" }}
                    href={linkItem.link}
                    target={"_blank"}
                  >
                    <Stack
                      ta={"left"}
                      justify="space-between"
                      gap="md"
                    >
                      <Text c={'#000000'}>
                        {linkItem.name}
                      </Text>
                      <Image
                        src={`../assets/images/${linkItem.logo}`}
                        mah={rem(50)}
                        fit="contain"

                      />
                    </Stack>
                  </a>
                </React.Fragment>
              ))}
            </Flex>
            <Text mt={'md'}>Sumber referensi lengkap, dapat dilihat <u>disini</u>.</Text>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default DisclaimerPage;
