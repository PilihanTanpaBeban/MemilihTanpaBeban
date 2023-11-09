import {
  Container,
  Group,
  Burger,
  Modal,
  ActionIcon,
  Flex,
  rem,
  Button,
  Center,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./header.module.css";
import LogoPTB from "../components/logo";
import Quiz from "../components/Quiz";
import { useRouter } from "next/router";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconX } from "@tabler/icons-react";
import { theme } from "../../theme";
import { FormEvent, RefObject, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PrimaryButton } from "../components/Button";

const links = [
  { link: "/", label: "Home" },
  { link: "/disclaimer", label: "Disclaimer" },
  { link: "/mitos-vs-fakta", label: "Mitos vs Fakta" },
  { link: "/konflik-kepentingan", label: "Konflik Kepentingan" },
  { link: "/20-24", label: "20.24" },
  { link: "https://iyctc.id/", label: "Tentang IYCTC" },
];

const CAPTCHA: {
  [key: string]: string;
} = {
  captchaToken: "",
};

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState(CAPTCHA);
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const openQuiz = async () => {
    fetch("/api/enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(captcha),
    })
      .then((response) => {
        if (response.status === 200) {
          setIsVerified(true);
          recaptcha?.current?.reset(); // reset recaptcha after submission
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      captcha.captchaToken = value;
      openQuiz();
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.reload();
  };

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

  const rightPosition = opened ? 0 : -600; // Replace with your colors

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.md})`);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <LogoPTB />
        <Group gap={5} visibleFrom="md">
          {items}
          <Button
            // text=""
            radius="xl"
            size="md"
            onClick={handleModalOpen}
            color={primaryColor}
          >
            Kenali Calonmu
          </Button>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <div
          style={{
            textAlign: "center",
            backgroundColor: primaryColor,
            zIndex: 100,
            position: "fixed",
            width: "60vw",
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
            <Button
              // text=""
              radius="xl"
              size="md"
              onClick={handleModalOpen}
              color={secondaryColor}
            >
              Kenali Calonmu
            </Button>
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
          opened={isModalOpen}
          onClose={handleModalClose}
          centered
        >
          {isVerified ? (
            // Display the content after captcha is verified

            <Quiz />
          ) : (
            // Display reCAPTCHA widget
            <Center>
              <ReCAPTCHA
                size="normal"
                sitekey="6Ld9AQcpAAAAADM_zs1tjDsr3-3P0WERBFHoZupy"
                onChange={handleCaptchaChange}
                ref={recaptcha}
              />
            </Center>
          )}
        </Modal>
      </Container>
    </header>
  );
}
