# MoreRewardsPromo Component

## Overview
`MoreRewardsPromo` is a Sitecore JSS React component that showcases additional Vitality rewards with two CTAs and a single combined logos image. It follows the same structure as other PageContent components.

## Files
```
src/sxastarter/src/components/PageContent/
  └── MoreRewardsPromo.tsx

src/sxastarter/src/assets/sass/components/
  └── _component-more-rewards-promo.scss

src/items/templates/Project/Verticals/Components/MoreRewardsPromo/
  ├── MoreRewardsPromo.yml
  ├── Data.yml
  └── __Standard Values.yml
```

## Fields
- Title (Rich Text)
- Description (Rich Text)
- PrimaryLink (General Link)
- SecondaryLink (General Link)
- LogosImage (Image)

## Usage
- Add the rendering to a placeholder and populate the fields.
- Buttons use existing `.button` styles (primary and secondary) consistent with Vitality brand.

## Styling
- Gradient background card
- Two-column responsive layout
- One logos image rendered on the right

## Dev tips
- After adding the component, run `npm run bootstrap` to refresh component mappings if needed.
