import React from 'react';
import { RichText as JssRichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  Benefits: Field<string>;
  Terms: Field<string>;
  ProductName: Field<string>;
}

type PartnerPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PartnerPromoDefaultComponent = (props: PartnerPromoProps): JSX.Element => (
  <div className={`component partner-promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">PartnerPromo</span>
    </div>
  </div>
);

export const Default = (props: PartnerPromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <section
        className={`component partner-promo ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="partner-promo-card">
            <div className="partner-promo-content">
              <div className="partner-promo-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="partner-promo-text">
                {props.fields.Title && (
                  <h3>
                    <JssRichText field={props.fields.Title} />
                  </h3>
                )}
                {props.fields.Description && (
                  <div className="partner-promo-description">
                    <JssRichText field={props.fields.Description} />
                  </div>
                )}
                {props.fields.Benefits && (
                  <div className="partner-promo-benefits">
                    <JssRichText field={props.fields.Benefits} />
                  </div>
                )}
                {props.fields.Terms && (
                  <p className="partner-promo-terms">
                    <JssRichText field={props.fields.Terms} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PartnerPromoDefaultComponent {...props} />;
};