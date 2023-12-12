import {
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Text,
  Title,
  rem,
  Image,
  BackgroundImage,
  Button,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { lightPurple, primaryColor, secondaryColor } from "../public/colors";
import { PrimaryButton, SecondaryButton } from "../app/components/Button";
import PieChart from "../app/components/PieChart";
import { updateNoVote, updateYesVote } from "../public/firebase.service";
import { IconChecks } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../theme";
import ContainerPejabat from "../app/components/20_24/containerPejabat";
import listPejabat2024 from "../app/components/20_24/ListPejabat";
import HeroVector from "../app/hero-vector/HeroVector";
import { renderTextWithLineBreaks } from "../app/components/LineBreakRender";

function Page2024() {
  const [pressed, setPressed] = useState(false);
  const [isEkseVertical, setIsEkseVertical] = useState(false);
  const [isLegisVertical, setIsLegisVertical] = useState(false);

  const toggleEkseView = () => {
    setIsEkseVertical((prevState) => !prevState);
  };

  const toggleLegisView = () => {
    setIsLegisVertical((prevState) => !prevState);
  };

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  function switchPressedYes() {
    updateYesVote();
    setPressed(true);
  }

  function switchPressedNo() {
    updateNoVote();
    setPressed(true);
  }

  return (
    <>
      <HeroBgImg
        pt={rem(250)}
        pb={rem(300)}
        text={"Coming Soon!"}
        subtitle={"Nantikan Launching di Akhir 2023"}
        imgFileName={"meeting.png"}
      ></HeroBgImg>
      {/* {mobile ? (
        <div style={{ backgroundColor: lightPurple }}>
          <Container size={"xl"} pt={rem(50)} pb={rem(20)}>
            <Flex
              gap="xl"
              justify="flex-start"
              align="center"
              direction="column"
            >
              <div>
                <Title
                  style={{ fontSize: rem(48) }}
                  ta="center"
                  c={primaryColor}
                >
                  20.24
                </Title>

                <Text my="md" ta="justify">
                  Anggota Legislatif dan Eksekutif yang aktif mendorong
                  pengendalian konsumsi rokok yang lebih baik di Indonesia, demi
                  melindungi kesehatan masyarakat dan kualitas orang muda yang
                  lebih baik.
                </Text>
                <Text>Data terakhir diperbarui 29 November 2023.</Text>
              </div>
            </Flex>
          </Container>

          <Image src={"../../assets/images/20_24.png"} />
        </div>
      ) : (
        <div style={{ backgroundColor: lightPurple }}>
          <BackgroundImage
            src={"../../assets/images/20_24.png"}
            h={rem(450)}
            bgsz="contain"
            bgr="no-repeat"
            bgp="100%"
          >
            <Container size="xl" h="100%">
              <Flex gap="xl" justify="center" align="center" h="100%">
                <div>
                  <Title mb="lg" style={{ fontSize: rem(72) }} c={primaryColor}>
                    20.24
                  </Title>
                  <Text my="lg" ta="justify">
                    Anggota Legislatif dan Eksekutif yang aktif mendorong
                    pengendalian konsumsi rokok yang lebih baik di Indonesia,
                    demi melindungi kesehatan masyarakat dan kualitas orang muda
                    yang lebih baik.
                  </Text>
                  <Text>Data terakhir diperbarui 29 November 2023.</Text>
                </div>
                <div style={{ width: "60%", height: "100%" }} />
              </Flex>
            </Container>
          </BackgroundImage>
        </div>
      )}

      <Container size="xl" py={rem(70)}>
        <Flex direction="row" justify="space-between" align="center" mb="md">
          <Title c={primaryColor} style={{ fontSize: rem(24) }}>
            Eksekutif
          </Title>
          <Button onClick={toggleEkseView} bg={primaryColor}>
            {isEkseVertical ? "Sembunyikan" : "Tampilkan semua"}
          </Button>
        </Flex>

        <ContainerPejabat
          isVertical={isEkseVertical}
          data={listPejabat2024.eksekutif}
        />
      </Container>

      <Container size="xl" py={rem(70)}>
        <Flex direction="row" justify="space-between" align="center" mb="md">
          <Title c={primaryColor} style={{ fontSize: rem(24) }}>
            Legislatif
          </Title>
          <Button onClick={toggleLegisView} bg={primaryColor}>
            {isLegisVertical ? "Sembunyikan" : "Tampilkan semua"}
          </Button>
        </Flex>

        <ContainerPejabat
          isVertical={isLegisVertical}
          data={listPejabat2024.legislatif}
        />
      </Container> */}
      <Container size={"md"} py={rem(65)}>
        <Grid align={"center"}>
          <Grid.Col p={20} span={{ base: 12, sm: 5 }}>
            <Title
              c={primaryColor}
              fs={rem(48)}
              ta={mobile ? "center" : "left"}
            >
              Apakah kalian ingin memiliki pemimpin yang pro terhadap kesehatan?
            </Title>

            {pressed ? (
              <Group c={secondaryColor} justify="start" py={rem(40)}>
                <Text
                  style={{
                    display: "Flex",
                    alignItems: "center",
                    fontSize: rem(18),
                  }}
                  ta={mobile ? "center" : "left"}
                >
                  <IconChecks size={34} />
                  Terima kasih atas respon anda
                </Text>
              </Group>
            ) : (
              <Flex mt={rem(25)} justify={"start"} gap="xl">
                <PrimaryButton
                  text={"Ya"}
                  radius={"xl"}
                  size={"lg"}
                  w={144}
                  onClick={switchPressedYes}
                ></PrimaryButton>
                <SecondaryButton
                  text={"Tidak"}
                  radius={"xl"}
                  size={"lg"}
                  w={144}
                  onClick={switchPressedNo}
                ></SecondaryButton>
              </Flex>
            )}
          </Grid.Col>
          <Grid.Col p={20} span={{ base: 12, sm: 7 }}>
            <Grid>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <PieChart />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: primaryColor,
                      width: rem(20),
                      height: rem(20),
                    }}
                  ></div>
                  <Text ml={rem(10)} w={"100%"} ta={"justify"}>
                    Jumlah pengunjung yang ingin memiliki pemimpin yang pro
                    terhadap kesehatan
                  </Text>
                </Box>
                <Box
                  mt={rem(20)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: secondaryColor,
                      width: rem(20),
                      height: rem(20),
                    }}
                  ></div>
                  <Text ml={rem(10)} w={"100%"} ta={"left"}>
                    Jumlah pengunjung yang tidak ingin memiliki pemimpin yang
                    pro terhadap kesehatan
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default Page2024;
