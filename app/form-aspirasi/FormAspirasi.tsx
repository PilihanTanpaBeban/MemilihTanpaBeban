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
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import TitleText from "../components/TitleText";
import classes from "./FormAspirasi.module.css";
import { PrimaryButton } from "../components/Button";
import { useForm } from "@mantine/form";

const inputs = [
  { id: "1", label: "Name" },
  { id: "2", label: "Email" },
  { id: "3", label: "Age" },
  { id: "4", label: "City" },
];

type FormAspirasiProps = {
  id: string;
};

const FormAspirasi: React.FC<FormAspirasiProps> = ({ id }) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      age: 0,
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

  return (
    <Container size="xl" mt={rem(40)} px={rem(50)} my="md">
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <TitleText text="Yuk sampaikan aspirasimu" size="32px" />
          <Text style={{ textAlign: "justify" }}>
            Sampaikan keresahan dan prioritas isu yang harus didahulukan oleh
            para Calon Legislatif dan Calon Eksekutif terkait permasalahan rokok
            di Indonesia.
          </Text>

          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              radius="md"
              mt={rem(8)}
              w={"100%"}
              label={<span style={{ fontWeight: "bold" }}>Nama</span>}
              required
              {...form.getInputProps('name')}
            />

            <TextInput
              withAsterisk
              radius="md"
              mt={rem(8)}
              w={"100%"}
              label={<span style={{ fontWeight: "bold" }}>Email</span>}
              required
              {...form.getInputProps('email')}
            />

            <NumberInput
              withAsterisk
              radius="md"
              mt={rem(8)}
              w={"100%"}
              label={<span style={{ fontWeight: "bold" }}>Umur</span>}
              required
              {...form.getInputProps('age')}
            />

            <TextInput
              withAsterisk
              radius="md"
              mt={rem(8)}
              w={"100%"}
              label={<span style={{ fontWeight: "bold" }}>Kota/Kabupaten Domisili</span>}
              required
              {...form.getInputProps('city')}
            />

            <Textarea
              radius="md"
              w={"100%"}
              label={<span style={{ fontWeight: "bold" }}>Aspiration</span>}
              placeholder={"Masukkan aspirasi anda"}
              required
              autosize
              minRows={4}
              mt={rem(8)}
              my={rem(20)}
              {...form.getInputProps('aspiration')}
            />

            <PrimaryButton
              text={"Kirim"}
              radius={"xl"}
              size={"md"}
              type={"submit"}
            />
          </form>
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
            src="/assets/images/frame.webp"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FormAspirasi;
