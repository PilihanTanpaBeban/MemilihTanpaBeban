import React from "react";
import logo from "../../public/assets/images/logo_png_1_1.png";
import Image from "next/image";
import Link from "next/link";

const LogoPTB: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="Logo" width="122" />
      </Link>
    </div>
  );
};

export default LogoPTB;
