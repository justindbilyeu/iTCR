# Changelog

All notable changes to the iTCR project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned for Phase 1
- Integration with real Texas Choice pricing data
- Field testing with sales team
- Accuracy validation against historical jobs
- Quote PDF generation refinement

---

## [0.1.0] - 2026-01-03

### Added
- Initial repository structure and documentation
- Complete README with project overview
- Seven core documentation files in `docs/`:
  - 00-project-overview.md - Market context and business case
  - 01-system-prompt.md - Custom GPT instructions
  - 02-setup-guide.md - Deployment guide
  - 03-testing-protocol.md - Validation framework
  - 04-architecture.md - System design
  - 05-field-guide.md - Sales team usage manual
  - 06-product-catalog.md - Product specifications
  - 07-integration-map.md - External system connections
- Multi-product pricing data templates:
  - Metal roofing components (standing seam)
  - Architectural shingles components
  - 3-tab shingles components
  - Product comparison matrix
- Labor and pricing structures:
  - Complexity-based labor rates
  - Business costs (overhead, profit, permits)
  - Regional price adjustments
- ROI calculation data:
  - Insurance discount ranges by product and zip code
  - Energy savings by product type and color
  - Longevity value and replacement cycle analysis
- Reference measurements dataset for validation
- System prompt versioning in `prompts/` directory
- Placeholder directories for future development:
  - `scripts/` for Python automation tools
  - `tests/` for validation framework
  - `integrations/` for external system connections
  - `assets/` for example outputs
- Development roadmap
- Provisional license (MIT under consideration)
- .gitignore for security and data protection

### Documentation
- Comprehensive README with quick start guides
- Complete system architecture documentation
- Three-week testing and validation protocol
- Field guide for sales team usage
- Integration map with related projects (Resonance Engine, ITPU Software)

### Status
- Repository ready for distributed AI team review
- Custom GPT prompt complete and ready for deployment
- Data templates prepared for Texas Choice validation
- Testing framework defined

---

## Version History Summary

| Version | Date       | Status      | Key Changes |
|---------|------------|-------------|-------------|
| 0.1.0   | 2026-01-03 | Pre-Alpha   | Initial repository setup and documentation |

---

## Release Notes

### v0.1.0 - Foundation Release

This is the initial release of iTCR, establishing the foundation for AI-powered multi-product roofing estimation. The repository contains:

**Core Deliverables:**
- Complete system prompt for Custom GPT deployment
- Multi-product pricing templates (metal, architectural, 3-tab)
- Comprehensive documentation suite
- Testing and validation framework

**Architecture:**
- Custom GPT-based implementation
- CSV data structure for pricing and products
- Modular design for future platform development

**Next Steps:**
- Phase 1 validation testing (Weeks 1-4)
- Integration with actual Texas Choice pricing
- Field testing with sales team
- Accuracy validation against historical jobs

**Known Limitations:**
- Pricing data is templated estimates (not actual Texas Choice costs)
- Custom GPT requires manual deployment
- No automated integrations yet
- Limited to photo-based estimation (no direct measurement)

**Success Criteria for v0.2:**
- <10% average measurement error
- ±8% pricing accuracy vs invoices
- <10 minutes per quote
- 80%+ sales team adoption

---

## Future Changelog Format

### [Version] - YYYY-MM-DD

#### Added
- New features or capabilities

#### Changed
- Changes to existing functionality

#### Deprecated
- Features marked for future removal

#### Removed
- Features removed in this version

#### Fixed
- Bug fixes and error corrections

#### Security
- Security improvements and vulnerability patches

---

**Maintained by:** Justin Bilyeu / Texas Choice Roofing
**Last Updated:** 2026-01-03
