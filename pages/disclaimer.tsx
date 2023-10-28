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
} from "@mantine/core";
import { primaryColor } from "../public/colors";

const charactersList = [
  {
    id: "1",
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
];

function DisclaimerPage() {
  const items = charactersList.map((item) => (
    <Accordion.Item key={item.label} value={item.id}>
      <Accordion.Control py={rem(10)}>
        <Text fw={700} fs={rem(24)} c={primaryColor}>
          {item.label}
        </Text>
      </Accordion.Control>
      <Accordion.Panel p={rem(16)}>
        <Text ta={"justify"} fs={rem(16)} lh={1.5}>
          {item.content.textBefore}
        </Text>
        <List my={rem(16)}>
          {item.content.list.map((listItem) => (
            <List.Item mb={rem(16)} key={listItem}>
              {listItem}
            </List.Item>
          ))}
        </List>
        <Text ta={"justify"} fs={rem(16)}>
          {item.content.textAfter}
        </Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <HeroBgImg
        pt={rem(153)}
        pb={rem(145)}
        text={"Disclaimer"}
        imgFileName={"robby_rpic_1080_1920_px_2_1.webp"}
      ></HeroBgImg>
      <Container size={"lg"} py={rem(70)}>
        <Accordion variant="separated" radius="lg" defaultValue="1">
          {items}
        </Accordion>
      </Container>
    </>
  );
}

export default DisclaimerPage;
