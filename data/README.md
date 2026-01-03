# Data Files Documentation

## Overview

This directory contains all pricing, product, and reference data used by the iTCR estimation system.

---

## Directory Structure

### products/
Product-specific specifications and material costs

- `metal_roofing.csv` - Class 4 standing seam components
- `architectural_shingles.csv` - Mid-tier asphalt products
- `3tab_shingles.csv` - Budget replacement options
- `product_comparison.csv` - Side-by-side feature matrix

### pricing/
Labor rates and business cost structures

- `labor_complexity_matrix.csv` - Rates by product and complexity tier
- `business_costs.csv` - Overhead, profit margins, fees
- `regional_adjustments.csv` - Price multipliers by zip code

### savings/
ROI calculation data

- `insurance_discounts.csv` - By product type and zip code
- `energy_savings.csv` - Cooling cost reductions by product/color
- `longevity_value.csv` - Replacement cycle modeling

### Root Level

- `reference_measurements.csv` - Historical jobs for accuracy validation

---

## Data Maintenance

### Update Frequency

- **Product costs:** Monthly or when supplier pricing changes
- **Labor rates:** Quarterly or with market adjustments
- **Insurance discounts:** Annually or when carriers update
- **Energy savings:** Annually with utility rate changes

### Validation

All pricing should be verified against actual Texas Choice costs before production deployment.

### Template vs Production

- Files in repository are TEMPLATES with realistic estimates
- Production deployment should use `actual_*.csv` files (gitignored)
- Never commit actual business pricing to public repository

---

## Data Sources

### Current (Template Data)

- Industry averages for Austin market
- General contractor estimates
- Insurance industry publications

### Production (After Validation)

- Texas Choice actual material costs
- Historical job invoices
- Verified insurance carrier discounts
- Customer utility bill analysis

---

## Usage in System

The Custom GPT references these files during:

1. Material cost calculation (products/*.csv)
2. Labor estimation (pricing/labor_complexity_matrix.csv)
3. Business cost application (pricing/business_costs.csv)
4. ROI analysis (savings/*.csv)
5. Accuracy validation (reference_measurements.csv)

See `docs/01-system-prompt.md` for how each file is used in the estimation workflow.

---

## File Format Standards

### CSV Format

- UTF-8 encoding
- Comma-separated values
- Header row with column names
- No trailing commas
- Consistent use of quotes for text fields containing commas

### Naming Conventions

- Lowercase with underscores: `product_name.csv`
- Template files: `component_name.csv`
- Production files: `actual_component_name.csv` (gitignored)

### Column Naming

- Use descriptive names: `Base_Cost` not `cost`
- Use underscores: `Cost_Notes` not `cost notes`
- Be consistent across files

---

## Data Dictionary

### products/metal_roofing.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Component | String | Material component name | Standing Seam Panel 26ga |
| Unit | String | Unit of measurement | sq_ft, linear_ft, each |
| Base_Cost | Decimal | Cost per unit in dollars | 4.50 |
| Cost_Notes | String | Pricing tier or notes | Standard gauge |
| Product_Details | String | Specifications | Kynar 500 finish 40yr warranty |

### products/architectural_shingles.csv

Same structure as metal_roofing.csv

### products/3tab_shingles.csv

Same structure as metal_roofing.csv

### products/product_comparison.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Feature | String | Feature being compared | Lifespan_Years |
| Metal_Roofing | String | Value for metal | 50+ |
| Architectural_Shingles | String | Value for architectural | 25-30 |
| 3Tab_Shingles | String | Value for 3-tab | 15-20 |

### pricing/labor_complexity_matrix.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Complexity_Level | String | Simple/Moderate/Complex/Premium | Moderate |
| Metal_Rate_SqFt | Decimal | Labor rate for metal per sq ft | 5.75 |
| Arch_Rate_SqFt | Decimal | Labor rate for architectural | 3.60 |
| 3Tab_Rate_SqFt | Decimal | Labor rate for 3-tab | 2.90 |
| Pitch_Range | String | Roof pitch range for this tier | 5/12-8/12 |
| Valley_Count | String | Number of valleys | 2-3 |
| Story_Count | String | Building stories | 1-2 |
| Conditions | String | Description of complexity factors | Residential complexity |

### pricing/business_costs.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Cost_Category | String | Type of cost | Overhead |
| Type | String | Percentage or Fixed | Percentage |
| Value | Decimal | Percentage (without %) or dollar amount | 18 |
| Application_Rule | String | How to apply this cost | Applied to material + labor subtotal |
| Notes | String | Additional details | Insurance licensing equipment |

### pricing/regional_adjustments.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Zip_Code_Range | String | Zip code or range | 78701-78710 |
| Market_Segment | String | Description of area | Central Austin |
| Price_Multiplier | Decimal | Multiplier to apply | 1.08 |
| Notes | String | Reasoning | Urban premium accessibility |

### savings/insurance_discounts.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Zip_Code | String | Austin area zip code | 78703 |
| Metal_Discount_Low | Integer | Metal minimum discount % | 22 |
| Metal_Discount_High | Integer | Metal maximum discount % | 32 |
| Arch_Discount_Low | Integer | Arch minimum discount % | 10 |
| Arch_Discount_High | Integer | Arch maximum discount % | 15 |
| 3Tab_Discount_Low | Integer | 3Tab minimum discount % | 0 |
| 3Tab_Discount_High | Integer | 3Tab maximum discount % | 5 |
| Notes | String | Area characteristics | West Lake Hills hail frequency |

### savings/energy_savings.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Product_Type | String | Metal/Architectural/3-Tab | Metal |
| Color_Category | String | Light/Medium/Dark with examples | Light (white/tan/silver) |
| Cooling_Reduction_Low | Integer | Min cooling reduction % | 15 |
| Cooling_Reduction_High | Integer | Max cooling reduction % | 20 |
| Austin_Annual_Savings_Low | Integer | Min annual savings in $ | 180 |
| Austin_Annual_Savings_High | Integer | Max annual savings in $ | 240 |
| Notes | String | Additional details | Reflective coating critical |

### savings/longevity_value.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Product_Type | String | Metal/Architectural/3-Tab | Metal |
| Expected_Lifespan_Years | Integer | Typical lifespan | 50 |
| Replacement_Cost_Factor | Decimal | Multiplier for replacement cost | 0.00 |
| Replacements_30yr | Integer | Number of replacements in 30 years | 0 |
| Total_30yr_Replacement_Cost | String | Formula or fixed cost | 0 |
| Notes | String | Details | No replacement needed in 30yr window |

### reference_measurements.csv

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| Job_ID | String | Unique identifier | TEMPLATE_001 |
| Date | String | Date of job | 2024-01-15 |
| Address | String | Property address | 1234 Example St |
| Estimated_SqFt | Integer | AI-estimated square footage | 2400 |
| Actual_SqFt | Integer | Actual measured square footage | 2485 |
| Error_Pct | Decimal | Percentage error | -3.4 |
| Confidence_Score | Integer | AI confidence (0-100) | 88 |
| Photo_Quality | String | Good/Fair/Poor | Good |
| Pitch | String | Roof pitch | 6/12 |
| Complexity | String | Simple/Moderate/Complex/Premium | Moderate |
| Product_Installed | String | Product type installed | Architectural |
| Notes | String | Additional observations | Two valleys standard hip roof |

---

## Updating Data Files

### Local Updates (Development)

1. Edit CSV file in your editor
2. Verify format (no syntax errors)
3. Test with iTCR Custom GPT
4. Commit changes to repository

### Production Updates (Custom GPT)

1. Edit CSV file locally
2. Test changes
3. Open Custom GPT configuration
4. Delete old version in Knowledge section
5. Upload new version
6. Save GPT
7. Test to verify changes applied

### Bulk Updates

For updates across multiple files:

1. Create new versions of all affected files
2. Test locally
3. Upload all to Custom GPT Knowledge section
4. Verify calculations with sample quotes
5. Document changes in CHANGELOG.md

---

## Data Quality Checks

Before deploying updates:

- [ ] All CSV files open without errors
- [ ] No missing values in critical columns
- [ ] Numeric fields contain valid numbers
- [ ] Percentages are whole numbers (not decimals like 0.18 for 18%)
- [ ] Price multipliers are decimals (1.08 not 108)
- [ ] Consistent units across similar fields
- [ ] Spelling and grammar checked in text fields

---

## Security & Privacy

### What to Include

- Template pricing based on industry averages
- Generic product specifications
- Publicly available information (insurance discount ranges)

### What to Exclude

- Actual Texas Choice supplier costs
- Proprietary pricing agreements
- Real customer data (names, addresses)
- Actual job details (use templates only)

### Gitignore Rules

These patterns automatically exclude sensitive files:

```
data/**/actual_*.csv
data/**/production_*.csv
data/**/live_*.csv
data/**/customer_*.csv
data/**/real_*.csv
```

**Naming convention:** Use `actual_` prefix for production files that should not be committed.

---

## Troubleshooting

### CSV Not Loading in Custom GPT

- Check file encoding (must be UTF-8)
- Verify no special characters breaking format
- Ensure file size <512MB (not an issue for these files)
- Re-upload fresh copy

### Incorrect Values in Quotes

- Verify correct file uploaded
- Check CSV column names match system prompt expectations
- Ensure numeric fields don't have non-numeric characters
- Test with simple query (e.g., "What's the labor rate for moderate metal?")

### Data Conflicts

If multiple files have conflicting data:
- iTCR uses most specific/recent data
- Document which file takes precedence in system prompt
- Eliminate redundancy where possible

---

## Version Control

Track changes in `CHANGELOG.md`:

```markdown
## Data Updates - 2026-01-15

### Changed
- Increased metal panel cost from $4.25 to $4.50 per sq ft (supplier price increase)
- Updated insurance discounts for 78703 zip (new carrier data)

### Added
- New complexity tier "Premium" for extreme pitch roofs
```

---

## Future Enhancements

### Planned Data Additions

- **Seasonal adjustments:** Summer vs. winter pricing
- **Material availability:** In-stock vs. special order
- **Warranty options:** Extended warranty pricing
- **Color premium:** Upcharge for premium colors

### Platform Migration (Phase 3)

When migrating to database:

```sql
-- Example: products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    component VARCHAR(255),
    unit VARCHAR(50),
    base_cost DECIMAL(10,2),
    cost_notes TEXT,
    product_details TEXT,
    product_type VARCHAR(50),
    effective_date DATE,
    active BOOLEAN DEFAULT true
);
```

CSV files will be imported and versioned in database.

---

**Data Owner:** Project Lead / Pricing Manager
**Last Updated:** 2026-01-03
**Questions?** Contact [Data Management Team]
