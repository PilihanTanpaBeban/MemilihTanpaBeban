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
import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { primaryColor, secondaryColor } from "../public/colors";
import { PrimaryButton, SecondaryButton } from "../app/components/Button";
import PieChart from "../app/components/PieChart";

function Page2024() {
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
          <Grid.Col p={20} span={{ base: 12, md: 5 }}>
            <Title c={secondaryColor}>
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
          <Grid.Col p={20} span={{ base: 12, md: 7 }}>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <PieChart />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Flex
                  direction={"column"}
                  align={"center"}
                  justify={"center"}
                  gap="md"
                  w={"50%"}
                  wrap="wrap"
                >
                  <Box>
                    <div
                      style={{
                        backgroundColor: primaryColor,
                        width: rem(20),
                        height: rem(20),
                      }}
                    ></div>
                    <Text>
                      Jumlah responden yang Ingin memiliki yang pro terhadap
                      kesehatan
                    </Text>
                  </Box>
                  <Box>
                    <div
                      style={{
                        backgroundColor: secondaryColor,
                        width: rem(20),
                        height: rem(20),
                      }}
                    ></div>
                    <Text>
                      Jumlah responden yang Ingin memiliki yang pro terhadap
                      kesehatan
                    </Text>
                  </Box>
                </Flex>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default Page2024;
