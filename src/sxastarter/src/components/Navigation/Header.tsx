import { ImageField, NextImage, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <header className={`component header holidaysafe-header ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      {/* Top utility bar - Hardcoded */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="top-links">
                <a href="/policy-documents">Policy Documents</a>
                <span className="separator">|</span>
                <a href="/about-us">About Us</a>
                <span className="separator">|</span>
                <a href="/talk-to-tiffany">Talk to Tiffany</a>
                <span className="separator">|</span>
                <a href="/contact-us">Contact Us</a>
              </div>
            </div>
            <div className="col-auto">
              <div className="cta-buttons">
                <a href="/get-quote" className="btn btn-primary">Get a Quote</a>
                <a href="/retrieve-quote" className="btn btn-secondary">Retrieve a Quote <span className="arrow">›</span></a>
                <a href="/existing-customers" className="btn btn-outline">Existing Customers <span className="arrow">›</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="header-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="logo-section">
                <Placeholder name="header-left" rendering={props.rendering} />
              </div>
            </div>
            <div className="col">
              <div className="main-navigation">
                <Placeholder name="header-right" rendering={props.rendering} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary navigation - Dynamic */}
      <div className="header-nav-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="secondary-navigation">
                <Placeholder name="header-secondary-nav" rendering={props.rendering} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export type WithImageProps = ComponentProps & {
  fields: {
    LogoImage: ImageField;
  };
};

export const WithLogoImage = (props: WithImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <header className={`component header holidaysafe-header ${props.params.styles.trimEnd()}`} id={id ? id : undefined}>
      {/* Top utility bar - Hardcoded */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="top-links">
                <a href="/policy-documents">Policy Documents</a>
                <span className="separator">|</span>
                <a href="/about-us">About Us</a>
                <span className="separator">|</span>
                <a href="/talk-to-tiffany">Talk to Tiffany</a>
                <span className="separator">|</span>
                <a href="/contact-us">Contact Us</a>
              </div>
            </div>
            <div className="col-auto">
              <div className="cta-buttons">
                <a href="/get-quote" className="btn btn-primary">Get a Quote</a>
                <a href="/retrieve-quote" className="btn btn-secondary">Retrieve a Quote <span className="arrow">›</span></a>
                <a href="/existing-customers" className="btn btn-outline">Existing Customers <span className="arrow">›</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="header-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="logo-section">
                <NextImage field={props.fields.LogoImage} width={200} height={60} />
              </div>
            </div>
            <div className="col">
              <div className="main-navigation">
                <Placeholder name="header-right" rendering={props.rendering} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary navigation - Dynamic */}
      <div className="header-nav-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="secondary-navigation">
                <Placeholder name="header-secondary-nav" rendering={props.rendering} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
