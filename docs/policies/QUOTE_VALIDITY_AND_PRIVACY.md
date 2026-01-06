# Quote Validity + Privacy Policy (iTCR)

## Privacy Principles (No PII by Default)

**What we DON'T require:**
- Customer name
- Email address
- Phone number
- Street address

**What we DO use:**
- ZIP code
- Property label (e.g., "78704 Property A")
- Roof characteristics (stories, type, complexity)

**Rationale:** Fast, transparent estimates shouldn't require giving up privacy.

## Quote Validity Window

**Standard validity: 7 business days**

All quotes expire 7 business days from generation timestamp because:
- Material pricing fluctuates
- Labor market rates change
- Permit requirements may update
- On-site conditions (decking, layers, flashing) affect final price

**After expiration:** Quote must be regenerated with current pricing.

## What a Quote Is (and Isn't)

**This is an ESTIMATE based on:**
- Photos provided
- Declared roof characteristics
- Current market pricing

**Final price may change after in-person inspection reveals:**
- Actual tear-off layers
- Decking replacement needs
- Flashing/penetration condition
- Access constraints
- Local permit requirements
- Material availability

## Required Metadata

Every quote artifact must include:
- `created_at` (ISO 8601 with timezone)
- `valid_until` (ISO 8601 with timezone, +7 business days)
- `validity_business_days: 7`
- `quote_disclaimer_version: "policies.v1"`

## Privacy Safeguards

If notes field contains PII patterns (email, phone, address):
- Automatically redact with `[REDACTED]` markers
- Log privacy violation for review
- Do not include in shareable artifacts
