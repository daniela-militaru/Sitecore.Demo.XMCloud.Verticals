import React from 'react';
import NextLink from 'next/link';
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
      className={`component footer holidaysafe-footer ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        {/* Main footer content */}
        <div className="footer-main">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-column">
                <h4 className="footer-title">Customer Services</h4>
                <ul className="footer-links">
                  <li>
                    <NextLink href="/contact-us">Contact Us</NextLink>
                  </li>
                  <li>
                    <NextLink href="/talk-to-tiffany">Talk to Tiffany</NextLink>
                  </li>
                  <li>
                    <NextLink href="/countries-covered">Countries Covered</NextLink>
                  </li>
                  <li>
                    <NextLink href="/complaints">Complaints</NextLink>
                  </li>
                  <li>
                    <NextLink href="/website-feedback">Website Feedback</NextLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-column">
                <h4 className="footer-title">Useful Information</h4>
                <ul className="footer-links">
                  <li>
                    <NextLink href="/policy-documents">Policy Documents</NextLink>
                  </li>
                  <li>
                    <NextLink href="/travel-tips-advice">Travel Tips &amp; Advice</NextLink>
                  </li>
                  <li>
                    <NextLink href="/24-7-emergency-assistance">24/7 Emergency Assistance</NextLink>
                  </li>
                  <li>
                    <NextLink href="/claims-information">Claims Information</NextLink>
                  </li>
                  <li>
                    <NextLink href="/refer-a-friend">Refer a Friend</NextLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust logos section */}
        <div className="trust-logos">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <img
                src="https://www.holidaysafe.co.uk/wp-content/themes/HolidaySafe/HolidaySafe/assets/img/foot-logos.png"
                alt="ATII"
                className="trust-logo"
              />
            </div>
            <div className="col-auto">
              <img
                src="https://www.holidaysafe.co.uk/wp-content/themes/HolidaySafe/HolidaySafe/assets/img/travel-aware.png"
                alt="Travel Aware"
                className="trust-logo"
              />
            </div>
            <div className="col-auto">
              <img
                src="https://www.holidaysafe.co.uk/wp-content/themes/HolidaySafe/HolidaySafe/assets/img/secure.png"
                alt="Secure Payment"
                className="trust-logo"
              />
            </div>
            <div className="col-auto">
              <img
                src="https://www.holidaysafe.co.uk/wp-content/themes/HolidaySafe/HolidaySafe/assets/img/protectif.png"
                alt="Protectif"
                className="trust-logo"
              />
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="footer-bottom-links">
          <div className="row">
            <div className="col-12 text-center">
              <div className="bottom-links">
                <NextLink href="/terms-conditions">Terms &amp; Conditions</NextLink>
                <span className="separator">|</span>
                <NextLink href="/privacy-policy">Privacy Policy</NextLink>
                <span className="separator">|</span>
                <NextLink href="/cookie-policy">Cookie Policy</NextLink>
                <span className="separator">|</span>
                <NextLink href="/sitemap">Sitemap</NextLink>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="footer-text">
          <div className="row">
            <div className="col-12">
              <p className="disclaimer">
                Please note, Holidaysafe&apos;s online prices automatically include a 15% discount
                against our Customer Service Centre prices. Holidaysafe is a trading name of Travel
                Insurance Facilities Plc, which is authorised and regulated by the Financial Conduct
                Authority FRN 306537. Registered Office: Suite 12, 20 Churchill Square, Kings Hill,
                West Malling, Kent, ME19 4YU. Travel Insurance Facilities Plc registered in England
                No. 3220410. All rights reserved. All policies offered are on a non-advised basis.
              </p>
              <p className="travel-advice">
                The Foreign, Commonwealth and Development Office has up-to-date advice on staying
                safe abroad. FCDO Travel Advice can change so check regularly for the latest
                information and sign up to email alerts for your destination. For more general
                travel information, visit the FCDO Travel Aware website at.
              </p>
              <p className="pricing-note">
                Ɨ Please note, Holidaysafe&apos;s online prices automatically include a 15% discount
                against our Customer Service Centre prices. This is discounted from our core policy
                price before you add any additional cost of optional extensions or additional
                medical premium. Discount codes cannot be used in conjunction with any other
                promotional offer or discount. Only one discount code may be applied per purchase.
              </p>
              <p className="which-note">
                * Holidaysafe&apos;s Premier &amp; Premier Plus policies achieved a Which? Best Buy.{' '}
                * For full pricing, discount and reviews T&amp;Cs please click{' '}
                <NextLink href="/terms-conditions" className="orange-link">
                  here
                </NextLink>
              </p>
            </div>
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
