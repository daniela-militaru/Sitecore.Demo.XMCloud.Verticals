import React from 'react';
import {
  Field,
  ImageField,
  LinkField,
  Link,
  Text,
  RichTextField,
  RichText,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image1: ImageField;
  Title1: Field<string>;
  Text1: RichTextField;
  Title2: Field<string>;
  Text2: RichTextField;
  Title3: Field<string>;
  Text3: RichTextField;
  Title4: Field<string>;
  Text4: RichTextField;
  Copyright: Field<string>;
  Link1: LinkField;
  Link2: LinkField;
  SocialsTitle: Field<string>;
  SocialLink1: LinkField;
  SocialIcon1: ImageField;
  SocialLink2: LinkField;
  SocialIcon2: ImageField;
  SocialLink3: LinkField;
  SocialIcon3: ImageField;
}

export type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component component-spaced footer vitality-footer ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      {/* Background Image Section */}
      <div className="footer-background">
        <div className="landscape-illustration">
          {/* Mountain bikers landscape illustration */}
          <svg viewBox="0 0 1200 300" className="landscape-svg">
            {/* Sky */}
            <rect width="1200" height="300" fill="#e8f0f5" />

            {/* Clouds */}
            <ellipse cx="200" cy="80" rx="40" ry="20" fill="#fff" opacity="0.9" />
            <ellipse cx="1000" cy="60" rx="60" ry="30" fill="#fff" opacity="0.9" />

            {/* Background mountains */}
            <path d="M0,200 L150,120 L300,200 Z" fill="#a8b8c8" />
            <path d="M250,200 L400,140 L550,200 Z" fill="#a8b8c8" />

            {/* Midground hills */}
            <path d="M0,250 L200,180 L400,250 Z" fill="#8a9ba8" />
            <path d="M800,250 L1000,190 L1200,250 Z" fill="#8a9ba8" />

            {/* Foreground hills */}
            <path d="M0,300 L300,200 L600,300 Z" fill="#5a6b7d" />
            <path d="M400,300 L700,220 L1000,300 Z" fill="#5a6b7d" />
            <path d="M800,300 L1100,240 L1200,300 Z" fill="#5a6b7d" />

            {/* Trees */}
            <g fill="#5a6b7d">
              {/* Left cluster */}
              <polygon points="150,200 160,160 170,200" />
              <polygon points="170,200 180,150 190,200" />
              <polygon points="190,200 200,170 210,200" />
              <polygon points="210,200 220,160 230,200" />
              <polygon points="230,200 240,180 250,200" />

              {/* Central cluster */}
              <polygon points="500,200 510,140 520,200" />
              <polygon points="520,200 530,120 540,200" />
              <polygon points="540,200 550,150 560,200" />
              <polygon points="560,200 570,130 580,200" />
              <polygon points="580,200 590,160 600,200" />
              <polygon points="600,200 610,140 620,200" />
              <polygon points="620,200 630,170 640,200" />
              <polygon points="640,200 650,150 660,200" />

              {/* Right cluster */}
              <polygon points="900,200 910,170 920,200" />
              <polygon points="920,200 930,160 940,200" />
              <polygon points="940,200 950,180 960,200" />
              <polygon points="960,200 970,150 980,200" />
            </g>

            {/* Mountain bikers */}
            <g fill="#5a6b7d">
              {/* Left biker */}
              <ellipse cx="400" cy="250" rx="8" ry="4" fill="#5a6b7d" />
              <circle cx="400" cy="245" r="3" />
              <rect x="395" y="245" width="10" height="8" rx="2" />

              {/* Central bikers */}
              <ellipse cx="700" cy="240" rx="8" ry="4" fill="#5a6b7d" />
              <circle cx="700" cy="235" r="3" />
              <rect x="695" y="235" width="10" height="8" rx="2" />

              <ellipse cx="750" cy="250" rx="8" ry="4" fill="#5a6b7d" />
              <circle cx="750" cy="245" r="3" />
              <rect x="745" y="245" width="10" height="8" rx="2" />

              {/* Right biker */}
              <ellipse cx="950" cy="250" rx="8" ry="4" fill="#5a6b7d" />
              <circle cx="950" cy="245" r="3" />
              <rect x="945" y="245" width="10" height="8" rx="2" />
            </g>

            {/* Birds */}
            <g fill="#5a6b7d" opacity="0.7">
              <path d="M650,100 Q655,95 660,100 Q655,105 650,100" />
              <path d="M680,90 Q685,85 690,90 Q685,95 680,90" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        {/* Top Section - Main Navigation and Social Media */}
        <div className="footer-top">
          <div className="main-nav-links">
            <a href="#" className="main-nav-link">
              Health insurance
            </a>
            <a href="#" className="main-nav-link">
              Life insurance
            </a>
            <a href="#" className="main-nav-link">
              Business
            </a>
            <a href="#" className="main-nav-link">
              Rewards
            </a>
          </div>
          <div className="social-media">
            <a href="#" className="social-link facebook">
              f
            </a>
            <a href="#" className="social-link linkedin">
              in
            </a>
            <a href="#" className="social-link instagram">
              📷
            </a>
            <a href="#" className="social-link youtube">
              ▶
            </a>
            <a href="#" className="social-link twitter">
              X
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Middle Section - Content Columns */}
        <div className="footer-middle">
          <div className="footer-columns">
            <div className="footer-column">
              <div className="column-title">Vitality Programme</div>
              <div className="column-links">
                <a href="#" className="column-link">
                  Healthy Living rewards
                </a>
                <a href="#" className="column-link">
                  Refer a friend
                </a>
                <a href="#" className="column-link">
                  All rewards and benefits
                </a>
              </div>
            </div>
            <div className="footer-column">
              <div className="column-title">Log in</div>
              <div className="column-links">
                <a href="#" className="column-link">
                  Member Zone
                </a>
                <a href="#" className="column-link">
                  Employer Zone
                </a>
                <a href="#" className="column-link">
                  Life Adviser Hub
                </a>
                <a href="#" className="column-link">
                  Adviser Zone
                </a>
              </div>
            </div>
            <div className="footer-column">
              <div className="column-title">About Vitality</div>
              <div className="column-links">
                <a href="#" className="column-link">
                  About Us
                </a>
                <a href="#" className="column-link">
                  Sustainability
                </a>
                <a href="#" className="column-link">
                  Careers
                </a>
                <a href="#" className="column-link">
                  Gender Pay Gap
                </a>
                <a href="#" className="column-link">
                  Modern Slavery Statement
                </a>
                <a href="#" className="column-link">
                  Media
                </a>
                <a href="#" className="column-link">
                  Complaints
                </a>
                <a href="#" className="column-link">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="footer-column">
              <div className="column-title">Other Links</div>
              <div className="column-links">
                <a href="#" className="column-link">
                  Accessibility
                </a>
                <a href="#" className="column-link">
                  Financial Crime
                </a>
                <a href="#" className="column-link">
                  Healthcare Providers
                </a>
                <a href="#" className="column-link">
                  Suppliers
                </a>
                <a href="#" className="column-link">
                  Vitality Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="footer-bottom">
          <div className="copyright">© 2025 Vitality. All rights reserved</div>
          <div className="legal-links">
            <a href="#" className="legal-link">
              Cookies
            </a>
            <a href="#" className="legal-link">
              Privacy Notice
            </a>
            <a href="#" className="legal-link">
              Legal
            </a>
            <a href="#" className="legal-link">
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WithSocials = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component component-spaced footer with-socials ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="content">
          <div className="logo">
            <NextImage
              field={props.fields?.Image1}
              width={200}
              height={200}
              className="img-fluid"
            />
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-gap-5 gx-5">
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={props.fields?.Title1} />
              </div>
              <div className="links">
                <RichText field={props.fields?.Text1} />
              </div>
            </div>
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={props.fields?.Title2} />
              </div>
              <div className="links">
                <RichText field={props.fields?.Text2} />
              </div>
            </div>
            <div className="col">
              <div className="title eyebrow-accent">
                <Text field={props.fields?.SocialsTitle} />
              </div>
              <div className="links links-socials">
                <Link field={props.fields?.SocialLink1}>
                  <NextImage field={props.fields?.SocialIcon1} width={16} height={16} />
                </Link>
                <Link field={props.fields?.SocialLink2}>
                  <NextImage field={props.fields?.SocialIcon2} width={16} height={16} />
                </Link>
                <Link field={props.fields?.SocialLink3}>
                  <NextImage field={props.fields?.SocialIcon3} width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footnote">
          <Text field={props.fields?.Copyright} />
          <div className="privacy-links">
            <Link field={props.fields?.Link1} />
            <Link field={props.fields?.Link2} />
          </div>
        </div>
      </div>
    </div>
  );
};
