import { Button } from "@mantine/core";
import React from "react";
import { secondaryColor } from "../../public/colors";

interface ButtonProps {
  text: string;
  radius: string;
  size: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
}) => {
  return (
    <Button variant="filled" radius={radius} size={size} onClick={onClick}>
      {text}
    </Button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
}) => {
  return (
    <Button color={"#6FA3FF"} variant="filled" radius={radius} size={size} onClick={onClick}>
      {text}
    </Button>
  );
};
