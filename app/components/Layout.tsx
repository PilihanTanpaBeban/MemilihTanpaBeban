import React, { ReactNode } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;