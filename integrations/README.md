# Integrations

## Active Connections

### Resonance Engine
Experimental validation protocols for system accuracy testing.
- **Repository:** https://github.com/justindbilyeu/resonance-engine
- **Integration point:** Testing methodology
- **Status:** Active

### ITPU Software
Information-theoretic analysis for data processing.
- **Repository:** https://github.com/justindbilyeu/itpu-software
- **Integration point:** Statistical validation
- **Status:** Planned

---

## Planned Integrations

### Phase 2
- CRM systems (Salesforce, HubSpot, Pipedrive)
- QuickBooks for financial tracking
- Email automation (SendGrid, Mailchimp)
- Google Sheets (interim database)

### Phase 3
- Material supplier APIs (ABC Supply, SRS Distribution)
- Insurance carrier APIs (if available)
- Payment processors (Stripe, Square)
- Accounting/ERP systems

### Phase 4
- Permit filing systems (municipal APIs)
- Weather data services (NOAA, AccuWeather)
- Computer vision APIs (Google Cloud Vision, AWS Rekognition)
- Property data services (Zillow, county appraisal districts)

---

## Integration Architecture

See `docs/07-integration-map.md` for complete architecture and technical details.

### Current (Phase 1)
No external integrations. Standalone Custom GPT.

### Phase 2
Middleware-based integrations (Zapier/Make) connecting iTCR to basic business systems.

### Phase 3+
API-first architecture with direct integrations to external services.

---

## Configuration Files (Future)

When integrations are implemented:

```
integrations/
├── config/
│   ├── crm_config.json
│   ├── supplier_api_config.json
│   └── insurance_api_config.json
├── connectors/
│   ├── salesforce_connector.py
│   ├── quickbooks_connector.py
│   └── stripe_connector.py
├── tests/
│   ├── test_crm_integration.py
│   └── test_api_connectors.py
└── docs/
    ├── api_documentation.md
    └── integration_guide.md
```

---

## Security

All integration credentials will be:
- Stored in environment variables or secure vaults (AWS Secrets Manager)
- Never committed to repository
- Rotated regularly
- Encrypted at rest and in transit

---

## Monitoring

Integration health monitoring (Phase 3+):
- API call success/failure rates
- Response time tracking
- Error logging
- Automated alerts for failures

---

## Related Documentation

- **Integration Map:** `docs/07-integration-map.md` (comprehensive integration strategy)
- **Linked Repositories:** `integrations/linked-repositories.md` (related projects)
- **Architecture:** `docs/04-architecture.md` (technical architecture)

---

**Directory Owner:** Integration Lead / Technical Architect
**Last Updated:** 2026-01-03
