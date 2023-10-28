import { Button } from "@mantine/core";
import React from "react";
import { primaryColor, secondaryColor } from "../../public/colors";

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
  w
}) => {
  return (
    <Button
      w={w}
      variant="filled"
      radius={radius}
      size={size}
      onClick={onClick}
      color={primaryColor}
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
      color={secondaryColor}
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
