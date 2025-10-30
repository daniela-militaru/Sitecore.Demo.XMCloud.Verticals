# InsuranceOptions

A grid of insurance option cards (e.g., Health insurance, Life insurance). Content editors select items in a list, and each item renders as a card with icon, text, bullet list, and CTAs.

## Rendering

- Component entry: `src/sxastarter/src/components/PageContent/InsuranceOptions.tsx`
- Export: `export const Default`
- Styles: `src/sxastarter/src/assets/sass/components/_component-insurance-options.scss`

## Fields

Root fields:
- `Heading` (Rich Text, optional)
- `Description` (Rich Text, optional)
- `InsuranceCards` (Multilist or Treelist of items)

Per card item (for each item in `InsuranceCards`):
- `Title` (Single-Line Text or Rich Text)
- `Intro` (Rich Text) — short description above the bullet list
- `Bullets` (Rich Text) — supply as `<ul><li>…</li></ul>` or paragraphs
- `PriceText` (Rich Text, optional) — e.g. “From £1.45 a day”
- `PrimaryLink` (General Link, optional) — rendered as solid button
- `SecondaryLink` (General Link, optional) — rendered as textual/outlined action
- `IconName` (Single-Line Text, optional) — supports `health` or `life` for built-in icons; defaults to heart icon

## Markup structure

- Wrapper: `.insurance-options`
- Header: `.insurance-options-header`
- Grid: `.insurance-grid`
- Card: `.insurance-card`
  - Icon circle: `.insurance-card__icon`
  - Title: `.insurance-card__title`
  - Intro: `.insurance-card__intro`
  - Bullets: `.insurance-card__bullets`
  - Price text: `.insurance-card__price`
  - Actions: `.insurance-card__actions` containing:
    - `.button.button-main` (primary)
    - `.button.button-secondary` (secondary)

## Styling notes

- Uses Vitality pink via CSS variables defined in `src/sxastarter/src/assets/sass/_app.scss`.
- The grid collapses to one column on mobile and two columns on tablet and up.

## Authoring guidance

- For `Bullets`, prefer a `<ul>` with `<li>` items to get proper spacing.
- If an icon is needed, set `IconName` to `health` or `life`. Unknown values fall back to a heart icon.

## Validation

- ESLint/Prettier: No issues detected on this component and its SCSS.


