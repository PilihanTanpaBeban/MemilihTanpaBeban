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

export function Footer() {

  return (
    <footer
      className={classes.footer}
      style={{backgroundColor:primaryColor}}
    >
      <Container size="xl" className={classes.inner}>
        <div className={classes.logo}>
          <Text className={classes.title}>Pilihan Tanpa Beban</Text>
          <Text size="md" className={classes.description}>
            Tentang IYCTC
          </Text>
          <Text size="md" className={classes.description}>
            Disclaimer
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
            <ActionIcon size="md" color="white" variant="subtle">
              <IconBrandWhatsapp
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="md" color="white" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="md" color="white" variant="subtle">
              <IconBrandX
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="md" color="white" variant="subtle">
              <IconBrandThreads
                style={{ width: rem(28), height: rem(28) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
      <Container size="xl" className={classes.afterFooter}>
        <Text size="sm">Copyright @2023 Pilihan Tanpa Beban</Text>
      </Container>
    </footer>
  );
}
