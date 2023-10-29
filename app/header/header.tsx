import { Container, Group, Burger, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import LogoPTB from "../components/logo";
import { PrimaryButton } from "../components/Button";
import Quiz from "../components/Quiz";
import { useRouter } from "next/router";

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
        {/* <Group hiddenFrom="md"></ Group> */}
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
