# iTCR - Intelligent Texas Choice Roofing

**AI-Powered Multi-Product Roofing Estimation System**

---

## Project Status

**Version:** 0.1.0 (Pre-Alpha)
**Status:** Repository Setup - Ready for Distributed AI Team Review
**Last Updated:** 2026-01-03

---

## Overview

iTCR (Intelligent Texas Choice Roofing) is an AI-powered roofing estimation system designed to transform how Texas Choice Roofing delivers quotes to customers. By leveraging computer vision and multi-product intelligence, iTCR provides transparent, accurate estimates with complete ROI analysis across three product lines:

1. **Class 4 Metal Roofing** - Premium impact-resistant standing seam systems
2. **Architectural Shingles** - Mid-tier dimensional asphalt products
3. **3-Tab Shingles** - Budget-friendly replacement options

---

## The Problem We're Solving

Traditional roofing sales are characterized by:
- **Opacity:** Customers don't understand pricing components
- **Slow turnaround:** Manual estimates take 2-5 days
- **Limited options:** Single-product quotes miss opportunities
- **No ROI analysis:** Insurance savings and energy efficiency ignored
- **Inconsistency:** Quote quality varies by sales rep experience

iTCR addresses each of these systematically.

---

## Key Features

### Current Capabilities (v0.1)
- **Multi-Product Analysis:** Compare metal, architectural, and 3-tab options side-by-side
- **Photo-Based Measurement:** Estimate square footage from overhead images
- **Complexity Assessment:** Analyze pitch, valleys, dormers, and accessibility
- **Intelligent Recommendations:** Suggest optimal product based on customer priorities
- **ROI Calculations:**
  - Insurance premium savings (by product and zip code)
  - Energy efficiency impact (cooling cost reductions)
  - Longevity value (replacement cycle analysis)
  - Total cost of ownership (30-year timeline)
- **Transparent Pricing:** Break down materials, labor, overhead, and margin

### Planned Capabilities (Roadmap)
- Integration with Texas Choice CRM and business systems
- Automated permit filing and material ordering
- Real-time insurance carrier API connections
- Advanced computer vision for pitch/complexity detection
- Mobile app for field teams
- Customer self-service portal

---

## Technology Stack

**Current Implementation (v0.1):**
- Custom GPT (ChatGPT Plus)
- Code Interpreter for image analysis
- CSV-based pricing data
- Manual deployment via sales team

**Future Architecture (v1.0+):**
- Standalone web application
- Cloud-hosted database (PostgreSQL)
- RESTful API backend
- React/Next.js frontend
- Integration with Resonance Engine and ITPU Software

---

## Repository Structure

```
iTCR/
├── docs/                   # Comprehensive documentation
│   ├── 00-project-overview.md
│   ├── 01-system-prompt.md          # Custom GPT instructions
│   ├── 02-setup-guide.md
│   ├── 03-testing-protocol.md
│   ├── 04-architecture.md
│   ├── 05-field-guide.md            # Sales team usage
│   ├── 06-product-catalog.md
│   └── 07-integration-map.md
│
├── data/                   # Pricing and product data
│   ├── products/          # Material specifications
│   ├── pricing/           # Labor rates and business costs
│   ├── savings/           # ROI calculation data
│   └── reference_measurements.csv  # Validation dataset
│
├── prompts/               # Versioned system prompts
│   └── v0.1-multi-product.md
│
├── scripts/               # Python tools (future)
├── tests/                 # Testing framework (future)
├── integrations/          # External system connections
└── assets/                # Example outputs and screenshots
```

---

## Quick Start

### For Sales Team (Current Usage)
1. Open the iTCR Custom GPT (link provided by management)
2. Upload overhead photo(s) of customer's roof
3. Provide address, current roof type, customer preferences
4. Review AI-generated multi-product quote
5. Download PDF comparison for customer presentation

See `docs/05-field-guide.md` for complete usage instructions.

### For Developers (Future Contributions)
1. Clone repository: `git clone https://github.com/justindbilyeu/iTCR.git`
2. Review `docs/04-architecture.md` for system design
3. Check `ROADMAP.md` for current development phase
4. See `CHANGELOG.md` for version history

---

## Development Phases

### Phase 1: Custom GPT Validation (Weeks 1-4)
**Status:** Ready to Begin
**Goal:** Validate accuracy and usability with real customers
**Success Criteria:**
- <10% average measurement error vs actual jobs
- ±8% pricing accuracy vs final invoices
- <10 minutes per quote generation
- 80%+ sales team adoption

### Phase 2: Refinement & Integration (Months 2-3)
**Status:** Planned
**Goal:** Optimize prompts, expand data, integrate with CRM
**Dependencies:** Phase 1 success

### Phase 3: Platform Development (Months 4-6)
**Status:** Planned
**Goal:** Build standalone web application
**Dependencies:** Phase 2 completion, funding secured

### Phase 4: Advanced Features (Months 7-12)
**Status:** Research
**Goal:** Computer vision, API integrations, mobile app
**Dependencies:** Platform stability

---

## Team & Collaboration

### Human Team
- **Justin Bilyeu** - Project Lead, Texas Choice Roofing
- **Sales Team** - Field testing and feedback
- **Development Team** - TBD based on Phase 1 results

### AI Team (Distributed Review System)
This repository is being reviewed by multiple AI systems for diverse perspectives:
- **Claude** (Anthropic) - Primary development and architecture
- **Sage** - Strategic planning and business logic
- **Grok** (xAI) - Creative problem-solving
- **DeepSeek** - Technical optimization
- **Gemini** (Google) - Data analysis and validation

Each AI provides unique insights to strengthen the system before human development begins.

---

## Related Projects

- **[Resonance Engine](https://github.com/justindbilyeu/resonance-engine)** - Experimental validation protocols
- **[ITPU Software](https://github.com/justindbilyeu/itpu-software)** - Information-theoretic processing
- **Neural-AI Interface System** (Research phase) - BCI-based customer preference detection

See `docs/07-integration-map.md` for integration details.

---

## Documentation

| Document | Purpose |
|----------|---------|
| `docs/00-project-overview.md` | Market context and business case |
| `docs/01-system-prompt.md` | Complete Custom GPT instructions |
| `docs/02-setup-guide.md` | Deployment instructions |
| `docs/03-testing-protocol.md` | 3-week validation framework |
| `docs/04-architecture.md` | Technical design and evolution |
| `docs/05-field-guide.md` | Sales team usage manual |
| `docs/06-product-catalog.md` | Product specifications and comparisons |
| `docs/07-integration-map.md` | External system connections |

## Policies

- [Quote Validity & Privacy](docs/policies/QUOTE_VALIDITY_AND_PRIVACY.md)
- [PDF Footer Language](docs/policies/PDF_FOOTER_LANGUAGE.md)

---

## Data Files

All pricing and product data is located in `/data/`:
- **products/** - Material costs and specifications (metal, architectural, 3-tab)
- **pricing/** - Labor rates, complexity matrices, business costs
- **savings/** - Insurance discounts, energy savings, longevity value
- **reference_measurements.csv** - Historical jobs for accuracy validation

**Important:** Current data files are TEMPLATES with realistic market estimates. Production deployment requires actual Texas Choice pricing validation.

---

## Testing & Validation

See `docs/03-testing-protocol.md` for the complete 3-week testing framework:

1. **Week 1:** Baseline accuracy testing with historical jobs
2. **Weeks 2-3:** Field testing with real customer properties
3. **Week 3:** Edge case testing and blind spot identification

**Go/No-Go Decision:** After Week 3, evaluate whether to proceed to Phase 2 or iterate on Phase 1.

---

## Contributing

**Current Status:** Internal testing only
**Future Contributions:** Will be accepted after platform development (Phase 3+)

For now, feedback should be directed to Justin Bilyeu via Texas Choice Roofing channels.

---

## License

**Status:** Provisional (MIT License under consideration)

Final licensing decision pending Phase 1 completion. Options include:
- Full open source (MIT)
- Dual license (commercial/non-commercial)
- Proprietary (business use only)

See `LICENSE` file for current terms.

---

## Contact

**Project Lead:** Justin Bilyeu
**Company:** Texas Choice Roofing
**Location:** Austin, Texas Metro

For inquiries about iTCR or collaboration opportunities, contact through Texas Choice Roofing official channels.

---

## Acknowledgments

Special thanks to:
- The Austin roofing community for market insights
- Texas Choice sales team for real-world testing commitment
- The distributed AI team for comprehensive review and feedback

---

**Built with intelligence. Deployed with transparency. Designed for customers.**
