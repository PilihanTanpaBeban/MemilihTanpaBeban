import React, { useEffect, useState } from "react";
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
import { renderTextWithHtml } from "../app/components/LineBreakRender";
import { getDisclaimers, DisclaimerItem } from "../app/util/DisclaimerService";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../app/components/styles/disclaimer.module.css";
import HeroVector from "../app/hero-vector/HeroVector";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../theme";

// DisclaimerItem type moved to service for reuse

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
  const [disclaimers, setDisclaimers] = useState<DisclaimerItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchDisclaimers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getDisclaimers();
        setDisclaimers(data);
      } catch (err: any) {
        console.error("Error fetching disclaimers:", err);
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };
    fetchDisclaimers();
  }, []);

  const items = disclaimers.map((item) => {
    const iconSrc = `/assets/images/${item.iconUrl}`;

    return (
      <Accordion.Item key={item.id} value={String(item.id)} className={classes.accordionItem}>
        <Accordion.Control px={rem(30)} py={rem(10)} className={classes.accordionControl}>
          <Group>
            <Image w={50} src={iconSrc}></Image>
            <Text fw={700} style={{ fontSize: rem(20) }} c={"black"}>
              {item.title}
            </Text>
          </Group>
        </Accordion.Control>
        <Accordion.Panel pb={rem(16)} px={rem(16)} style={{ border: 'none' }} className={classes.accordionControlActive}>
          <Text component="div" ta={"justify"} fs={rem(16)} lh={1.5}>
            {renderTextWithHtml(item.description)}
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });
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
            defaultValue={disclaimers.length ? String(disclaimers[0].id) : "1"}
            classNames={{ chevron: classes.chevron }}
            chevron={<IconChevronDown className={classes.icon} />}> 
            {loading && (
              <Text p={rem(16)}>Memuat data disclaimer...</Text>
            )}
            {error && (
              <Text p={rem(16)} c="red">Gagal memuat data: {error}</Text>
            )}
            {!loading && !error && items}
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
