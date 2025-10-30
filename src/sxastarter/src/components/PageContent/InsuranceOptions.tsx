import React from 'react';
import {
  RichText as JssRichText,
  Link as JssLink,
  Field,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface InsuranceCardFields {
  Title: Field<string>;
  Intro: Field<string>;
  Bullets: Field<string>; // rich text list (ul/li) or paragraphs
  PriceText?: Field<string>;
  PrimaryLink?: LinkField;
  SecondaryLink?: LinkField;
  IconName?: Field<string>; // optional: 'health' | 'life'
}

interface InsuranceCardItem {
  id: string;
  fields: InsuranceCardFields;
}

interface InsuranceOptionsFields {
  Heading?: Field<string>;
  Description?: Field<string>;
  InsuranceCards?: InsuranceCardItem[];
}

type InsuranceOptionsProps = {
  params: { [key: string]: string };
  fields: InsuranceOptionsFields;
};

const DefaultIcon = ({ name }: { name?: string }): JSX.Element => {
  const icon = (name || '').toLowerCase();
  if (icon === 'life') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

export const Default = (props: InsuranceOptionsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const cards = props.fields?.InsuranceCards || [];

  return (
    <section className={`component insurance-options ${props.params.styles}`} id={id ? id : undefined}>
      <div className="container">
        {(props.fields?.Heading || props.fields?.Description) && (
          <div className="insurance-options-header">
            {props.fields?.Heading && (
              <h2>
                <JssRichText field={props.fields.Heading} />
              </h2>
            )}
            {props.fields?.Description && (
              <div className="description">
                <JssRichText field={props.fields.Description} />
              </div>
            )}
          </div>
        )}

        <div className="insurance-grid">
          {cards.map((card) => (
            <div className="insurance-card" key={card.id}>
              <div className="insurance-card__icon">
                <DefaultIcon name={card.fields?.IconName?.value} />
              </div>
              {card.fields?.Title && (
                <h3 className="insurance-card__title">
                  <JssRichText field={card.fields.Title} />
                </h3>
              )}
              {card.fields?.Intro && (
                <div className="insurance-card__intro">
                  <JssRichText field={card.fields.Intro} />
                </div>
              )}
              {card.fields?.Bullets && (
                <div className="insurance-card__bullets">
                  <JssRichText field={card.fields.Bullets} />
                </div>
              )}
              {card.fields?.PriceText && (
                <p className="insurance-card__price">
                  <JssRichText field={card.fields.PriceText} />
                </p>
              )}
              <div className="insurance-card__actions">
                {card.fields?.PrimaryLink && (
                  <JssLink field={card.fields.PrimaryLink} className="button button-main" />
                )}
                {card.fields?.SecondaryLink && (
                  <JssLink field={card.fields.SecondaryLink} className="button button-secondary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

