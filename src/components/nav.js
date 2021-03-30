import React from 'react';
import Link from '@docusaurus/Link';
import {GitHub, Twitter, Linkedin} from 'react-feather';

export const Nav = ({link}) => {
  return (
    <div id="main-nav">
      <a href="/" className="logo">
        <img src="/img/intelagent_logo_written.svg" alt="IntelAGENT Logo" width="220px" />
      </a>
      <div className="links">
        <a
        href="#features"
        title="IntelAGENT - Features"
        className="scroll-to"
        >
        Features
        </a>
        <div className="sep" />
        <a
        href="#pricing"
        title="IntelAGENT - Pricing"
        className="scroll-to"
        >
        Pricing
        </a>
        <div className="sep" />
        <Link to="/docs" title="IntelAGENT - Documentation">
          Documentation
        </Link>
        <div className="sep" />
        <a
          href="#contact-us"
          title="GraphQL Inspector - Contact us"
          className="scroll-to"
        >
          Contact Us
        </a>
        
      </div>
    </div>
  );
};