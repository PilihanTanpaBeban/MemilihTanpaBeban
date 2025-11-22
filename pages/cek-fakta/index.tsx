import React, { useEffect, useState } from "react";
import HeroBgImg from "../../app/hero-image-bg/hero-image-bg";
import { Text, Container, Grid, Group, Paper, rem, List, Skeleton } from "@mantine/core";
import { bgGrayColor, primaryColor } from "../../public/colors";
import CardMitosFakta from "../../app/components/Card";
import HeroVector from "../../app/hero-vector/HeroVector";
import { useRouter } from "next/router";
import { getFacts, type FactItem } from "../../app/util/FactsService";
function Slides({ facts }: { facts: FactItem[] }) {
  return (
    <>
      {facts.map((fact) => (
        <React.Fragment key={fact.id}>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ padding: "30px" }}>
            <CardMitosFakta
              id={fact.id}
              style={{ minHeight: rem(434) }}
              textMitos={fact.statement}
              textFakta={fact.factCard}
              fact={fact}
              key={fact.id}
            />
          </Grid.Col>
        </React.Fragment>
      ))}
    </>
  );
}

function SkeletonSlides() {
  const items = Array.from({ length: 6 });
  return (
    <>
      {items.map((_, idx) => (
        <React.Fragment key={idx}>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ padding: "30px" }}>
            <Paper shadow="xl" radius="lg" p="md" style={{ minHeight: rem(434) }}>
              <Skeleton height={rem(220)} radius="md" mb={rem(16)} />
              <Skeleton height={rem(24)} width="30%" mb={rem(8)} />
              <Skeleton height={rem(12)} width="100%" mb={rem(6)} />
              <Skeleton height={rem(12)} width="95%" mb={rem(6)} />
              <Skeleton height={rem(12)} width="90%" mb={rem(12)} />
              <Skeleton height={rem(24)} width="30%" mb={rem(8)} />
              <Skeleton height={rem(12)} width="100%" mb={rem(6)} />
              <Skeleton height={rem(12)} width="95%" mb={rem(6)} />
              <Skeleton height={rem(12)} width="90%" />
            </Paper>
          </Grid.Col>
        </React.Fragment>
      ))}
    </>
  );
}

function MitosVsFaktaPage() {
  const router = useRouter();
  const receivedData = router.query.fakta;
  const [facts, setFacts] = useState<FactItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const receivedData = router.query.fakta;

    if (receivedData) {
      const targetId = `fakta-${receivedData}`;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block:"center" });
      }
    }
  }, [router.query]);

  useEffect(() => {
    setLoading(true);
    getFacts()
      .then((rows) => {
        setFacts(Array.isArray(rows) ? rows : []);
      })
      .catch((e) => {
        setError("Gagal memuat data cek fakta.");
      })
      .finally(() => setLoading(false));
  }, []);

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
        <Container size={"lg"} style={{ position: "relative" }}>
          {error ? (
            <Paper shadow="xl" radius="lg" p="md" my="lg">
              <Text c="red">{error}</Text>
            </Paper>
          ) : (
            <Grid gutter={{ base: 5, xs: "md", md: "lg", xl: 30 }}>
              {loading ? <SkeletonSlides /> : <Slides facts={facts} />}
            </Grid>
          )}
          <Paper shadow="xl" radius="lg" p="xl" mt={"lg"} mx="md">
            <Text>
              Untuk mengetahui lebih lanjut mengenai taktik industri rokok dalam
              melemahkan kebijakan kesehatan masyarakat, berikut beberapa bahan
              bacaan yang dapat dijadikan acuan:
            </Text>
            <List mt="md">
            <List.Item>Publikasi <strong><a style={{color:primaryColor}} href="https://exposetobacco.org/wp-content/uploads/2019/09/Crooked-9-STOP.pdf" target="_blank">Crooked 9</a></strong> karya STOP</List.Item>
            <List.Item>Film <strong><a style={{color:primaryColor}} href="https://youtu.be/hE_6yd_F-jg?si=xG6uJGfZEPQGXM_d" target="_blank">Di Balik Satu Batang</a></strong> karya CISDI</List.Item>
            </List>
          </Paper>
        </Container>
      </Group>
    </>
  );
}

export default MitosVsFaktaPage;
