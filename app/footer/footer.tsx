import {
  Group,
  ActionIcon,
  rem,
  Container,
  Text,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import {
  IconBrandThreads,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import classes from "./footer.module.css";
import { primaryColor } from "../../public/colors";

const customText =
  "Pilihan yang Tanpa Beban 2024 https://pilihantanpabeban.id/ @iyctc.id";

const handleShareClick = (platform: string) => {
  // Create the URL for sharing on the chosen social media platform
  let shareUrl;

  switch (platform) {
    case "x":
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        customText
      )}`;
      break;
    case "threads":
      shareUrl = `instagram-threads://start?message=${encodeURIComponent(customText)}`;
      break;
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodeURIComponent(customText)}`;
      break;
    default:
      console.error("Invalid social media platform");
      return;
  }

  // Open a new window or tab with the share URL
  window.open(shareUrl, "_blank");
};

export function Footer() {
  return (
    <footer
      className={classes.footer}
      style={{ backgroundColor: primaryColor }}
    >
      <Container size="xl" className={classes.inner}>
        <div className={classes.logo}>
          <Text className={classes.title}>Pilihan Tanpa Beban</Text>
          <Text size="md" className={classes.description}>
            <a href="https://iyctc.id/">Tentang IYCTC</a>
          </Text>
          <Text size="md" className={classes.description}>
            <a href="/disclaimer">Disclaimer</a>
            
          </Text>
        </div>
        <Flex
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
        >
          <Text size="md" className={classes.description}>
            Bagikan artikel ini
          </Text>
          <Group
            gap={0}
            className={classes.social}
            justify="space-between"
            wrap="nowrap"
          >
            <ActionIcon
              size="md"
              color="white"
              variant="subtle"
              onClick={() => {
                handleShareClick("whatsapp");
              }}
            >
              <IconBrandWhatsapp
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              size="md"
              color="white"
              variant="subtle"
              onClick={() => {
                handleShareClick("x");
              }}
            >
              <IconBrandX
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              size="md"
              color="white"
              variant="subtle"
              onClick={() => {
                handleShareClick("threads");
              }}
            >
              <IconBrandThreads
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
      <Container size="md" className={classes.afterFooter}>
        <Text size="sm">Copyright @2023 Pilihan Tanpa Beban</Text>
      </Container>
    </footer>
  );
}
