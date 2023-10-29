import { Button,Text, rem } from "@mantine/core";
import React from "react";
import { primaryColor, secondaryColor } from "../../public/colors";
import { IconLoader } from "@tabler/icons-react";

interface ButtonProps {
  text: string;
  radius: string;
  size?: string;
  onClick?: () => void;
  w?: number;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?:boolean
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  radius,
  size,
  onClick,
  w,
  type,
  isLoading
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
      disabled={isLoading}
      style={{display:"flex", alignItems:"center", justifyContent:"center"}}
    >{isLoading?(<IconLoader style={{marginRight:rem(5)}}/>):null} {text}
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
      onClick={onClick}
      w={w}
      type={type}
    >
      {text}
    </Button>
  );
};
