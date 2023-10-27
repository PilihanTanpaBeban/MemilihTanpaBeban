import React from 'react';
import logo from '../../public/assets/images/logo_png_1_1.png';
import Image from 'next/image';

const LogoPTB: React.FC = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" width="122" />
    </div>
  );
};

export default LogoPTB;