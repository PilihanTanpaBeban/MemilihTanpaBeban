import { Container, Flex, Group, Title, rem } from "@mantine/core";
import React from "react";
import HeroBgImg from "../app/hero-image-bg/hero-image-bg";
import { secondaryColor } from "../public/colors";
import { PrimaryButton, SecondaryButton } from "../app/components/Button";

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

      <Container size={"lg"} py={rem(65)}>
        <Flex align={"center"} justify={"space-evenly"}>
          <Group>
            <Title c={secondaryColor}>
              Apakah kalian ingin memiliki pemimpin yang pro terhadap kesehatan?
            </Title>
            <Flex justify={"space-evenly"}>
              <PrimaryButton
                text={"Ya"}
                radius={"lg"}
                size={"md"}
              ></PrimaryButton>
              <SecondaryButton
                text={"Tidak"}
                radius={"lg"}
                size={"md"}
              ></SecondaryButton>
            </Flex>
          </Group>
        </Flex>
      </Container>
    </>
  );
}

export default Page2024;
