import {
  Container,
  Grid,
  Group,
  Image,
  Input,
  NumberInput,
  Text,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import TitleText from "../components/TitleText";
import classes from "./FormAspirasi.module.css";
import { PrimaryButton } from "../components/Button";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../../theme";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconChecks, IconFilePencil } from "@tabler/icons-react";


const FormAspirasi= () => {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      age: null,
      city: "",
      aspiration: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleInputChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  const handleSubmit = () => {
    setIsLoading(true);
    // Submit the form data using fetch or another method
    const formData = new FormData();

    formData.append("Nama", form.values.name);
    formData.append("Email", form.values.email);
    formData.append("Umur", String(form.values.age));
    formData.append("Kota/Kabupaten Domisili", form.values.city);
    formData.append("Aspirasi", form.values.aspiration);

    fetch(
      "https://script.google.com/macros/s/AKfycbyvSiNtRwNPpvH5zx2XZ6y3t5XicjgfutMDmkXJgf5iDlqc_msioR_Q-zd6eWeYPL7yAw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          // Handle success
          setSubmitted(true);
          console.log("Form data submitted successfully");
        } else {
          // Handle error
          console.error("Failed to submit form data");
        }
      })
      .catch(() => {
        // Handle network or fetch API errors
        console.error("Please try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container size="md" mt={rem(40)} px={rem(50)} my="md">
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <TitleText text="Yuk sampaikan aspirasimu" size="32px" />
          <Text style={{ textAlign: "justify" }}>
            Sampaikan keresahan dan prioritas isu yang harus didahulukan oleh
            para Calon Legislatif dan Calon Eksekutif terkait permasalahan rokok
            di Indonesia.
          </Text>

          {submitted ? (
            <Group c={secondaryColor} justify="start" py={rem(100)}>
              <IconChecks size={34} />
              <Title order={3}>Terima kasih atas respon anda</Title>
            </Group>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                withAsterisk
                radius="md"
                mt={rem(8)}
                w={mobile ? "100%" : "75%"}
                label={<span style={{ fontWeight: "bold" }}>Nama</span>}
                required
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                radius="md"
                mt={rem(8)}
                w={mobile ? "100%" : "75%"}
                label={<span style={{ fontWeight: "bold" }}>Email</span>}
                required
                {...form.getInputProps("email")}
              />

              <NumberInput
                withAsterisk
                radius="md"
                mt={rem(8)}
                w={mobile ? "100%" : "75%"}
                label={<span style={{ fontWeight: "bold" }}>Umur</span>}
                required
                min={0}
                {...form.getInputProps("age")}
              />

              <TextInput
                withAsterisk
                radius="md"
                mt={rem(8)}
                w={mobile ? "100%" : "75%"}
                label={
                  <span style={{ fontWeight: "bold" }}>
                    Kota/Kabupaten Domisili
                  </span>
                }
                required
                {...form.getInputProps("city")}
              />

              <Textarea
                radius="md"
                w={mobile ? "100%" : "75%"}
                label={<span style={{ fontWeight: "bold" }}>Kolom Aspirasi</span>}
                placeholder={"Masukkan aspirasi anda"}
                required
                autosize
                minRows={4}
                mt={rem(8)}
                my={rem(20)}
                {...form.getInputProps("aspiration")}
              />

              <PrimaryButton
                text={"Kirim"}
                radius={"xl"}
                size={"md"}
                type={"submit"}
                isLoading={isLoading}
              />
            </form>
          )}
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            radius={"md"}
            h={rem(462)}
            fit="contain"
            src="/assets/images/frame.png"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FormAspirasi;
