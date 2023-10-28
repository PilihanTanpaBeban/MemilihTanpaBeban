import { Button } from "@mantine/core";
import React from "react";
import { secondaryColor } from "../../public/colors";

interface ButtonProps {
  text: string;
  radius: string;
  size?: string;
  onClick?: () => void;
  w?: number;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
  w,
}) => {
  return (
    <Button
      w={w}
      variant="filled"
      radius={radius}
      size={size}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
  w
}) => {
  return (
    <Button
      color={"#6FA3FF"}
      variant="filled"
      radius={radius}
      size={size}
      onClick={onClick}
      w={w}
    >
      {text}
    </Button>
  );
};
