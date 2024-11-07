import {
  Container,
  Group,
  Burger,
  Modal,
  ActionIcon,
  Flex,
  rem,
  Button,
  Text,
  Stack,
  Divider,
  Menu,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./header.module.css";
import LogoPTB from "../components/logo";
import Quiz from "../components/Quiz";
import { useRouter } from "next/router";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconX } from "@tabler/icons-react";
import { theme } from "../../theme";
import { RefObject, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/disclaimer", label: "Disclaimer" },
  { link: "/cek-fakta", label: "Cek Fakta" },
  { link: "/konflik-kepentingan", label: "Potensi Konflik Kepentingan" },
  // { link: "/20-24", label: "20.24" },
  {
    label: "Pemetaan Sikap",
    sublink: [
      { slug: "calon-gubernur", label: "Calon Gubernur" },
      { slug: "dpr-ri", label: "DPR-RI" }
    ]
  },
  { link: "https://www.instagram.com/iyctc.id/", label: "Tentang IYCTC" },
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
  const handleNavigation = (url: string) => {
    router.push(url);
  };

  const items = links.map((link) => (
    link.label != 'Pemetaan Sikap' ? (
      <a key={link.label} href={link.link} target={link.label == "Tentang IYCTC" ? "_blank" : ""} className={classes.link}>
        <strong>{link.label}</strong>
      </a>
    ) : (
      <Menu key={link.label} position="bottom-start" trigger="hover" openDelay={100} closeDelay={400}>
        <Menu.Target>
          <Text className={classes.link} style={{ cursor: 'pointer' }}><strong>{link.label}</strong></Text>
        </Menu.Target>
        <Menu.Dropdown w={rem(200)}>
          {link.sublink &&
            link.sublink.map((sublink, index) => (
              <div
                key={sublink.label}>
                <Menu.Item p={rem(10)} onClick={() => handleNavigation(`/pemetaan-sikap/${encodeURIComponent(sublink.slug)}`)}>
                  <span style={{ textDecoration: 'none', fontSize: rem(14), color: 'black', fontWeight: '500' }}>
                    {sublink.label}
                  </span>
                </Menu.Item>
                {index < link.sublink.length - 1 &&
                  <Divider />}
              </div>
            ))
          }
        </Menu.Dropdown>
      </Menu>
    )
  ));

  const burgerItems = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.burgerLink}>
      <strong>{link.label}</strong>
    </a>
  ));

  const rightPosition = opened ? 0 : -700;

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.lg})`);

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <LogoPTB />
        <Group gap={2} visibleFrom="md">
          {items}
          <Button
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
            <Button
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
          <Quiz />
          {/* {isVerified ? (
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
          )} */}
        </Modal>
      </Container>
    </header>
  );
}
