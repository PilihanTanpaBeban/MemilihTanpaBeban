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
} from "@mantine/core";
import { primaryColor } from "../public/colors";
import { renderTextWithLineBreaks } from "../app/components/LineBreakRender";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../app/components/disclaimer.module.css";
import TitleText from "../app/components/TitleText";
import HeroVector from "../app/hero-vector/HeroVector";

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
        "Periode pengumpulan data dilaksanakan selama bulan Agustus 2023 - November 2023",
        "Kami mengirimkan surat konfirmasi untuk validasi data dan pernyataan yang didapatkan dari media kepada nama-nama yang tercantum dalam situs ini.",
      ],
      textAfter:
        "IYCTC bukanlah satu-satunya organisasi yang mengawal Pemilu 2024. Jika kamu tertarik untuk mendalami isu pemilu lebih jauh dari berbagai macam sudut pandang, berikut adalah rekomendasi tautan yang bisa kamu buka:",
      link: [
        { name: "Rekam jejak", link: "https://www.rekamjejak.net/" },
        { name: "Bijak Memilih", link: "https://www.bijakmemilih.id/" },
        { name: "Rumah Pemilu", link: "https://rumahpemilu.org/" },
      ],
    },
  },
];

function DisclaimerPage() {
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
              {listItem}
            </List.Item>
          ))}
        </List>
        {item.content.textAfter != "" && (
          <Text ta={"justify"} fs={rem(16)}>
            {renderTextWithLineBreaks(item.content.textAfter)}
          </Text>
        )}
        {item.content.link != null && (
          <List mb={rem(16)}>
            {item.content.link.map((linkItem) => (
              <List.Item mb={rem(16)} key={linkItem.name}>
                <a
                  style={{ textDecoration: "none" }}
                  href={linkItem.link}
                  target={"_blank"}
                >
                  {linkItem.name}
                </a>
              </List.Item>
            ))}
          </List>
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
        imgFileName={"disclaimer_hero.png"}
      ></HeroVector>
      <Container size={"lg"} pt={rem(35)} pb={rem(70)}>
        <Text mb={rem(24)}>
          Isu pengendalian konsumsi rokok memang sudah lama pembahasannya.
          Sayangnya, belum belum banyak tokoh politik yang cukup berani untuk
          bersuara dan membela kepentingan kesehatan masyarakat. Pemilu 2024
          adalah momentum penting bagi orang muda Indonesia untuk mencari lebih
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
