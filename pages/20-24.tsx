import {
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { primaryColor, secondaryColor } from "../public/colors";
import { PrimaryButton, SecondaryButton } from "../app/components/Button";
import PieChart from "../app/components/PieChart";
import { updateNoVote, updateYesVote } from "../public/firebase.service";
import { IconChecks } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../theme";

function Page2024() {
  const [pressed, setPressed] = useState(false);

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
        subtitle={"Nantikan Launching di Pertengahan November"}
        imgFileName={"meeting.png"}
      ></HeroBgImg>

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
                    Jumlah responden yang ingin memiliki pemimpin yang pro
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
                    Jumlah responden yang tidak ingin memiliki pemimpin yang pro
                    terhadap kesehatan
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
