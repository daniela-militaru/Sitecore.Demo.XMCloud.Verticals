# PartnerPromo Component

## Overview

The `PartnerPromo` component is a Sitecore JSS (JavaScript Services) React component designed to display promotional content for partner offers, specifically tailored for partner promotion sections like musicMagpie trade-in offers. This component follows the Sitecore JSS component architecture pattern used throughout the Vitality project.

## Purpose

This component is used to showcase partner promotional offers with:
- A prominent title and description
- Benefits information
- Terms and conditions
- Product name customization
- Visual icon representation

## File Structure

```
src/sxastarter/src/components/PageContent/
  └── PartnerPromo/
      ├── PartnerPromo.tsx      # React component implementation
      └── README.md              # This documentation

src/sxastarter/src/assets/sass/components/
  └── _component-partner-promo.scss  # Component styling

src/items/templates/Project/Verticals/Components/
  └── PartnerPromo/
      ├── PartnerPromo.yml       # Main template definition
      ├── Data.yml               # Data section template
      └── __Standard Values.yml  # Default values for new instances
```

## Component Structure

### TypeScript Interface

```typescript
interface Fields {
  Title: Field<string>;        // Main heading/title
  Description: Field<string>;  // Primary description text
  Benefits: Field<string>;      // Benefits information
  Terms: Field<string>;        // Terms and conditions text
  ProductName: Field<string>;   // Product name (defaults to "Apple Watch")
}

type PartnerPromoProps = {
  params: { [key: string]: string };  // Component parameters (styles, etc.)
  fields: Fields;                      // Sitecore field values
};
```

## How It Works

### 1. Component Rendering

The component follows this flow:

1. **Props Validation**: Checks if fields exist
2. **Default Component**: If no fields, shows an empty hint
3. **Default Variant**: Renders the full promotional section

### 2. Field Mapping

| Sitecore Field | Component Usage | Type |
|---------------|----------------|------|
| `Title` | Main heading (h3) | Rich Text |
| `Description` | Primary content area | Rich Text |
| `Benefits` | Secondary content area | Rich Text |
| `Terms` | Small text disclaimer | Rich Text |
| `ProductName` | Product reference (optional) | Text |

### 3. Styling

The component uses:
- **Tailwind CSS classes** for layout and styling
- **Bootstrap container** classes for responsive layout
- **Custom classes**: `component partner-promo` for theming
- **Icon**: Built-in SVG icon in a circular pink background

## Sitecore Template Setup

### Template Hierarchy

```
PartnerPromo (Component Template)
  └── Base Template: {1930BBEB-7805-471A-A3BE-4858AC7CF696}
      └── Data Section
          ├── Title (Rich Text)
          ├── Description (Rich Text)
          ├── Benefits (Rich Text)
          ├── Terms (Rich Text)
          └── ProductName (Single-Line Text)
```

### Creating Template Fields in Sitecore

1. **Navigate to**: `/sitecore/templates/Project/Verticals/Components/PartnerPromo`
2. **Create/Edit Data Section**:
   - Field Name: `Title`
   - Type: Rich Text
   - Required: Yes
   
   - Field Name: `Description`
   - Type: Rich Text
   - Required: Yes
   
   - Field Name: `Benefits`
   - Type: Rich Text
   - Required: No
   
   - Field Name: `Terms`
   - Type: Rich Text
   - Required: No
   
   - Field Name: `ProductName`
   - Type: Single-Line Text
   - Required: No
   - Default Value: "Apple Watch"

3. **Set Standard Values**:
   - Open `__Standard Values` item
   - Populate default content for each field

### Creating a Rendering Item

1. **Navigate to**: `/sitecore/layout/Renderings/Project/Verticals`
2. **Create New Rendering**:
   - Name: `PartnerPromo`
   - Template: Select `PartnerPromo` template
   - Component Name: `PartnerPromo` (must match React component export)
   - Component Path: `/src/components/PageContent/PartnerPromo`

### Adding Component to a Page

1. **In Experience Editor or Pages**:
   - Navigate to the page where you want to add the component
   - Select a placeholder (e.g., `jss-main`, `content`)
   - Click "Add Component"
   - Select `PartnerPromo`
   - Fill in the fields in the component properties

## Usage Examples

### Basic Usage

The component is automatically used when:
1. Added to a page via Sitecore Experience Editor
2. The rendering item is configured correctly
3. Field values are provided

### Example Field Values

**Title:**
```html
Save even more with musicMagpie
```

**Description:**
```html
<p>Enjoy an extra 10% when you trade in your old Apple Watch with musicMagpie.</p>
```

**Benefits:**
```html
<p>Get your exclusive discount code when you sign up for Apple Watch with Vitality.</p>
```

**Terms:**
```
Terms and conditions apply. This offer cannot be used in conjunction with any other code and is one use, per member. Excludes mobile phones. musicMagpie reserves the right to alter these terms and conditions if necessary.
```

**ProductName:**
```
Apple Watch
```

## Component Parameters

The component accepts standard Sitecore JSS parameters:

- `RenderingIdentifier`: Unique ID for the component instance
- `styles`: CSS classes to apply (space-separated string)

### Example with Styles

In Sitecore, you can add styles like:
```
col-12 margin-bottom
```

This will render as:
```tsx
<div className="component partner-promo col-12 margin-bottom">
```

## Styling Customization

### CSS Classes Used

The component uses these key classes:
- `.component.partner-promo` - Main wrapper
- `.bg-white` - White background card
- `.rounded-lg` - Rounded corners
- `.shadow-md` - Drop shadow
- `.text-gray-900` - Dark text color
- `.text-gray-700` - Medium text color
- `.text-gray-600` - Light text color
- `.bg-pink-600` - Icon background (Vitality pink)

### Custom Styling

To customize styles, edit the SCSS file:
```
src/sxastarter/src/assets/sass/components/_component-partner-promo.scss
```

**Note**: The component uses SCSS with Bootstrap utility mixins (like `respond-to`) rather than Tailwind CSS classes. This ensures compatibility with the project's existing styling approach.

Key styling features:
- Responsive design with mobile breakpoints
- Vitality brand pink (#e6007e) for the icon background
- Bootstrap container classes for layout
- Custom SCSS variables for consistency

You can also use the Sitecore `styles` parameter to add additional utility classes.

## Component Registration

The component is automatically registered by the Sitecore JSS component builder:
- **Location**: Generated in `src/temp/componentBuilder.ts`
- **Auto-discovery**: Based on file path and export name
- **Naming Convention**: Component folder name must match `Default` export

## Troubleshooting

### Component Not Appearing

1. **Check Component Builder**:
   - Run: `npm run bootstrap`
   - Verify `src/temp/componentBuilder.ts` includes `PartnerPromo`

2. **Check Rendering Item**:
   - Ensure rendering name matches component name
   - Verify template is correctly assigned

3. **Check Field Mapping**:
   - Ensure field names match exactly (case-sensitive)
   - Verify fields exist in the template

### Empty Component Display

- Check if fields are populated in Sitecore
- Verify `props.fields` is not null/undefined
- Check browser console for errors

### Styling Issues

- Ensure Tailwind CSS is compiled
- Check if Bootstrap classes are available
- Verify custom SCSS is imported in main stylesheet

## Development Workflow

### Making Changes

1. **Edit Component**:
   ```bash
   src/sxastarter/src/components/PageContent/PartnerPromo.tsx
   ```

2. **Update Styles** (if needed):
   ```bash
   src/sxastarter/src/assets/sass/components/_component-partner-promo.scss
   ```

3. **Rebuild Component Builder**:
   ```bash
   npm run bootstrap
   ```

4. **Test Locally**:
   ```bash
   npm run start:connected
   ```

### Testing Checklist

- [ ] Component renders with all fields populated
- [ ] Component shows empty hint when no fields
- [ ] Styling appears correctly
- [ ] Responsive behavior works on mobile/tablet
- [ ] Icon displays correctly
- [ ] All text fields render properly
- [ ] Component works in Experience Editor

## Best Practices

1. **Always provide Title and Description** - These are the core content
2. **Use Rich Text** - Allows content authors to format text
3. **Keep Terms concise** - Small font size means keep it brief
4. **ProductName fallback** - Defaults to "Apple Watch" if not provided
5. **Accessibility** - Ensure proper heading hierarchy (h3 for title)

## Related Components

- `PromoCta` - Similar promotional component with CTA buttons
- `AppPromo` - App-specific promotional component
- `Promo` - Basic promotional component

## Additional Resources

- [Sitecore JSS Documentation](https://jss.sitecore.com)
- [Sitecore JSS Component Architecture](https://jss.sitecore.com/docs/fundamentals/component-architecture)
- [React TypeScript Guide](https://react-typescript-cheatsheet.netlify.app/)

## Support

For issues or questions:
1. Check this README first
2. Review Sitecore JSS documentation
3. Consult the team lead or senior developers
4. Check component similar components (`Promo.tsx`, `PromoCta.tsx`) for reference

---

**Last Updated**: [Current Date]  
**Component Version**: 1.0.0  
**Author**: Development Team

