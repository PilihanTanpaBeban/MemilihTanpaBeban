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
import React, { useEffect } from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { primaryColor, secondaryColor } from "../public/colors";
import { PrimaryButton, SecondaryButton } from "../app/components/Button";
import PieChart from "../app/components/PieChart";
import { readFirebaseData } from "../public/firebase.service";

function Page2024() {

  useEffect(() => {
    console.log("Try");
  }, []);

  return (
    <>
      <HeroBgImg
        pt={rem(250)}
        pb={rem(300)}
        text={"Coming Soon!"}
        subtitle={"Nantikan Launching di Pertengahan November"}
        imgFileName={"meeting.png"}
      ></HeroBgImg>

      <Container size={"xl"} py={rem(65)}>
        <Grid align={"center"}>
          <Grid.Col p={20} span={{ base: 12, sm: 5 }}>
            <Title c={primaryColor} fs={rem(48)}>
              Apakah kalian ingin memiliki pemimpin yang pro terhadap kesehatan?
            </Title>
            <Flex mt={rem(25)} justify={"start"} gap="xl">
              <PrimaryButton
                text={"Ya"}
                radius={"xl"}
                size={"lg"}
                w={144}
              ></PrimaryButton>
              <SecondaryButton
                text={"Tidak"}
                radius={"xl"}
                size={"lg"}
                w={144}
              ></SecondaryButton>
            </Flex>
          </Grid.Col>
          <Grid.Col p={20} span={{ base: 12, sm: 7 }}>
            <Grid>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <PieChart />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      backgroundColor: primaryColor,
                      width: rem(20),
                      height: rem(20),
                    }}
                  ></div>
                  <Text ml={rem(10)} w={"70%"}>
                    Jumlah responden yang Ingin memiliki yang pro terhadap
                    kesehatan
                  </Text>
                </Box>
                <Box
                  mt={rem(20)}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div
                    style={{
                      backgroundColor: secondaryColor,
                      width: rem(20),
                      height: rem(20),
                    }}
                  ></div>
                  <Text ml={rem(10)} w={"70%"}>
                    Jumlah responden yang Ingin memiliki yang pro terhadap
                    kesehatan
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
