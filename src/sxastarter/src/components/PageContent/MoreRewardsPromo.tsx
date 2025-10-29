import React from 'react';
import {
  Link as JssLink,
  RichText as JssRichText,
  NextImage as JssImage,
  Field,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  PrimaryLink: LinkField;
  SecondaryLink: LinkField;
  LogosImage: ImageField; // single combined logos image
}

type MoreRewardsPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const MoreRewardsPromoDefault = (props: MoreRewardsPromoProps): JSX.Element => (
  <div className={`component more-rewards-promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">MoreRewardsPromo</span>
    </div>
  </div>
);

export const Default = (props: MoreRewardsPromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <section
        className={`component more-rewards-promo ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="more-rewards-card">
            <div className="more-rewards-grid">
              <div className="more-rewards-text">
                {props.fields.Title && (
                  <h2>
                    <JssRichText field={props.fields.Title} />
                  </h2>
                )}
                {props.fields.Description && (
                  <div className="description">
                    <JssRichText field={props.fields.Description} />
                  </div>
                )}
                <div className="actions">
                  {(props.fields.PrimaryLink?.value?.href || true) && (
                    <JssLink field={props.fields.PrimaryLink} className="button button-main" />
                  )}
                  {(props.fields.SecondaryLink?.value?.href || true) && (
                    <JssLink
                      field={props.fields.SecondaryLink}
                      className="button button-secondary"
                    />
                  )}
                </div>
              </div>
              <div className="more-rewards-image">
                <JssImage field={props.fields.LogosImage} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <MoreRewardsPromoDefault {...props} />;
};
