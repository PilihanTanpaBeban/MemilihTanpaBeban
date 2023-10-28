import {
  Container,
  Grid,
  Group,
  Image,
  Input,
  Text,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import TitleText from "../components/TitleText";
import classes from "./FormAspirasi.module.css";
import {PrimaryButton} from "../components/Button";

const inputs = [
  { label: "Name" },
  { label: "Email" },
  { label: "Age" },
  { label: "City" },
];

type FormAspirasiProps = {
  id: string;
};

const FormAspirasi: React.FC<FormAspirasiProps> = ({ id }) =>{
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitForm = () => {
    console.log(values);
  };

  return (
    <Container size="xl" mt={rem(77)} my="md" >
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <TitleText text="Yuk sampaikan aspirasimu" size="32px" />
          <Text style={{ textAlign: "justify" }}>
            Sampaikan keresahan dan prioritas isu yang harus didahulukan oleh
            para Calon Legislatif dan Calon Eksekutif terkait permasalahan rokok
            di Indonesia.
          </Text>

          <Group mt={rem(20)}>
            {inputs.map((input, index) => (
              <TextInput
                radius="md"
                w={"100%"}
                key={index}
                label={<span style={{ fontWeight: 'bold' }}>{input.label}</span>}
                required
                value={values[input.label] || ""}
                onChange={(event) =>
                  handleInputChange(input.label, event.currentTarget.value)
                }
                autoComplete="nope"
                mt={rem(8)}
              />
            ))}
            <Textarea
              radius="md"
              w={"100%"}
              label={<span style={{ fontWeight: 'bold' }}>Aspiration</span>}
              placeholder={"Masukkan aspirasi anda"}
              required
              value={values["Aspiration"] || ""}
              onChange={(event) =>
                handleInputChange("Aspiration", event.currentTarget.value)
              }
              autoComplete="nope"
              autosize
              minRows={4}
              mt={rem(8)}
            />
            <PrimaryButton
              text={"Kirim"}
              radius={"xl"}
              size={"md"}
              onClick={submitForm}
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }} style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
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
