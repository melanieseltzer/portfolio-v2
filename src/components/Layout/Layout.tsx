import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
