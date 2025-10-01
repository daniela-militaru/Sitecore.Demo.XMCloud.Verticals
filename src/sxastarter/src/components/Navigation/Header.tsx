import { ImageField, NextImage, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

interface Fields {
  Id: string;
  DisplayName: string;
  Title: string;
  NavigationTitle: string;
  Href: string;
  Querystring: string;
  Children: Array<Fields>;
  Styles: string[];
}

export type HeaderProps = ComponentProps & {
  fields: { [key: string]: Fields };
};

export const Default = (props: HeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component header vitality-header ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      {/* Main Navigation */}
      <div className="vitality-main-nav">
        <div className="container">
          <div className="main-nav-content">
            <div className="logo-container">
              <Placeholder name="header-left" rendering={props.rendering} />
            </div>

            <div className="navigation-container">
              <div className="main-navigation">
                <Placeholder name="header-right" rendering={props.rendering} />
              </div>
            </div>

            <div className="nav-actions">
              <a href="#" className="login-btn">
                Log in
              </a>
              <a href="#" className="quote-btn">
                Get a quote
              </a>
            </div>

            <div className="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type WithImageProps = ComponentProps & {
  fields: {
    LogoImage: ImageField;
  } & { [key: string]: Fields };
};

export const WithLogoImage = (props: WithImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component header vitality-header ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      {/* Main Navigation */}
      <div className="vitality-main-nav">
        <div className="container">
          <div className="main-nav-content">
            <div className="logo-container">
              <NextImage
                field={props.fields.LogoImage}
                width={200}
                height={50}
                alt="Vitality Logo"
                priority
              />
            </div>

            <div className="navigation-container">
              <div className="main-navigation">
                <Placeholder name="header-right" rendering={props.rendering} />
              </div>
            </div>

            <div className="nav-actions">
              <a href="#" className="login-btn">
                Log in
              </a>
              <a href="#" className="quote-btn">
                Get a quote
              </a>
            </div>

            <div className="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
