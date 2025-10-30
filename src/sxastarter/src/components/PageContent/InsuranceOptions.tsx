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
    <section
      className={`component insurance-options ${props.params.styles}`}
      id={id ? id : undefined}
    >
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

        {cards.length > 0 ? (
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
                    <JssLink
                      field={card.fields.SecondaryLink}
                      className="button button-secondary"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <section id="start-plan" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready for Oura Ring? Start with your plan.
                </h2>
                <p className="text-lg text-gray-600">Choose the protection that works for you:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-vitality-pink rounded-full mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Health insurance</h3>
                  <p className="text-gray-600 mb-6">
                    Get fast access to private healthcare, including:
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">Private GP appointments</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Specialist treatment for cancer, mental health and physio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Optional extras like optical, dental and hearing cover
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-6">
                    From £1.45a day<sup>5</sup>
                  </p>
                  <a
                    href="/health-insurance/quote"
                    className="block w-full text-center py-3 bg-vitality-pink hover:bg-pink-600 text-white font-semibold rounded transition-colors mb-3"
                  >
                    Get a quote in minutes
                  </a>
                  <a
                    href="/health-insurance"
                    className="block text-center text-vitality-pink font-semibold hover:underline"
                  >
                    Explore health insurance
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-vitality-pink rounded-full mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Life insurance</h3>
                  <p className="text-gray-600 mb-6">
                    Provide a lump sum for your loved ones when you pass away. It can help cover:
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">Mortgage payments</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">Funeral costs</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">Life expenses for your loved ones</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-6">
                    From £5 a month<sup>6</sup>
                  </p>
                  <a
                    href="/life-insurance/quote"
                    className="block w-full text-center py-3 bg-vitality-pink hover:bg-pink-600 text-white font-semibold rounded transition-colors mb-3"
                  >
                    Get a quote in minutes
                  </a>
                  <a
                    href="/life-insurance"
                    className="block text-center text-vitality-pink font-semibold hover:underline"
                  >
                    Explore life insurance
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};
