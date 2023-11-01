import {
  Container,
  Group,
  Burger,
  Modal,
  Text,
  ActionIcon,
  Flex,
  rem,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./header.module.css";
import LogoPTB from "../components/logo";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import Quiz from "../components/Quiz";
import { useRouter } from "next/router";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconX } from "@tabler/icons-react";
import { theme } from "../../theme";

const links = [
  { link: "/", label: "Home" },
  { link: "/disclaimer", label: "Disclaimer" },
  { link: "/mitos-vs-fakta", label: "Mitos vs Fakta" },
  { link: "/konflik-kepentingan", label: "Konflik Kepentingan" },
  { link: "/20-24", label: "20.24" },
  { link: "https://iyctc.id/", label: "Tentang IYCTC" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [openModal, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      <strong>{link.label}</strong>
    </a>
  ));

  const burgerItems = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.burgerLink}>
      <strong>{link.label}</strong>
    </a>
  ));

  const rightPosition = opened ? 0 : -300; // Replace with your colors

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <LogoPTB />
        <Group gap={5} visibleFrom="md">
          {items}
          <PrimaryButton
            text="Ikuti Kuis"
            radius="xl"
            size="md"
            onClick={open}
          />
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <div
          style={{
            textAlign: "center",
            backgroundColor: primaryColor,
            zIndex: 100,
            position: "fixed",
            width: "50vw",
            height: "100vh",
            top: 0,
            right: rightPosition,
            transition: "ease .3s",
            display: mobile ? "block" : "none",
          }}
        >
          <Flex
            h={"100%"}
            w={"100%"}
            direction={"column"}
            align={"center"}
            justify={"flex-start"}
          >
            {burgerItems}
            <SecondaryButton
              text="Ikuti Kuis"
              radius="xl"
              size="md"
              onClick={open}
            />
            <ActionIcon
              variant="light"
              radius="md"
              mt={rem(16)}
              color={secondaryColor}
            >
              <IconX onClick={toggle} color="white" />
            </ActionIcon>
          </Flex>
        </div>
        <Modal
          size="lg"
          opened={openModal}
          onClose={() => {
            close;
            router.reload();
          }}
          centered
        >
          <Quiz />
        </Modal>
      </Container>
    </header>
  );
}
