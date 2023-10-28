import { Button } from "@mantine/core";
import React from "react";
import { primaryColor, secondaryColor } from "../../public/colors";

interface ButtonProps {
  text: string;
  radius: string;
  size?: string;
  onClick?: () => void;
  w?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
  w,
  type,
}) => {
  return (
    <Button
      w={w}
      variant="filled"
      radius={radius}
      size={size}
      onClick={onClick}
      color={primaryColor}
      type={type}
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
  w,
  type,
}) => {
  return (
    <Button
      color={secondaryColor}
      variant="filled"
      radius={radius}
      size={size}
      w={w}
      type={type}
    >
      {text}
    </Button>
  );
};
