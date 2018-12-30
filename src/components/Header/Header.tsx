import { Link } from 'gatsby';
import React from 'react';

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
);

export default Header;
