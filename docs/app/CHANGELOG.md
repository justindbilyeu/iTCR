# Calculator Changelog

## [2026-01-06] - Quote Validity Stamping

### Added
- Deterministic 7-business-day validity window for all quotes
- Automatic PII sanitization in notes field
- ISO 8601 timestamp with timezone for created_at and valid_until
- PDF generation with validity language and disclaimer version
- Policy documentation in docs/policies/
- Download PDF button in quote preview

### Changed
- Quote metadata now includes validity fields (created_at, valid_until, disclaimer_version)
- Notes field automatically sanitizes emails, phone numbers, and addresses
- Script tag converted to ES6 module to support utility imports

### Technical Details
- New utility: `docs/js/utils/dates.js` (business day calculations)
- New utility: `docs/js/utils/sanitize.js` (PII redaction)
- Modified: `docs/app/index.html` (main calculator)
  - Added jsPDF library via CDN
  - Added imports for date and sanitize utilities
  - Updated buildQuoteDraft() to include validity metadata (lines 464-484)
  - Added generatePDF() function with footer (lines 551-646)
  - Added PDF download button and event handler (lines 333-335, 683-691)
  - Updated displayQuotePreview() to show validity fields (lines 529-540)
- PDF footer updated with validity language per policy docs

### Testing
- Edge case tests: `test/edge-cases.html` (6 tests covering date calculations, input validation, timezone formatting)
- Sample quote input: `test/sample_quote_input.json` (includes PII for sanitization testing)

### Policy Documentation
- `docs/policies/QUOTE_VALIDITY_AND_PRIVACY.md` - Privacy principles and validity policy
- `docs/policies/PDF_FOOTER_LANGUAGE.md` - Standard and short footer templates
- `docs/policies/README.md` - Index of policy documents
