# System Architecture: iTCR

**Document Version:** 1.0
**Last Updated:** 2026-01-03
**Audience:** Technical team, developers, architects

---

## Overview

This document describes the technical architecture of iTCR across its evolutionary phases, from Custom GPT implementation (Phase 1) through standalone platform (Phase 3+). Understanding this progression is critical for planning development and avoiding technical debt.

---

## Phase 1 Architecture: Custom GPT (Current)

### High-Level Design

```
┌─────────────────────────────────────────────────────────────┐
│                         USER (Sales Rep)                     │
│                    ChatGPT Plus Interface                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ Natural Language Input
                         │ + Photo Upload
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   iTCR CUSTOM GPT                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              System Prompt (Instructions)            │   │
│  │  - Identity & purpose                                │   │
│  │  - Workflow protocol (6-phase process)               │   │
│  │  - Product recommendation logic                      │   │
│  │  - Quality control rules                             │   │
│  │  - Communication guidelines                          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Knowledge Base (CSV Files)                   │   │
│  │  - Products: metal, architectural, 3-tab             │   │
│  │  - Pricing: labor, business costs, regional          │   │
│  │  - Savings: insurance, energy, longevity             │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Code Interpreter Capability                │   │
│  │  - Image analysis (measurement)                      │   │
│  │  - CSV data parsing                                  │   │
│  │  - Mathematical calculations                         │   │
│  │  - Output formatting                                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│                   ┌──────────────┐                           │
│                   │ GPT-4 Turbo  │                           │
│                   │  LLM Core    │                           │
│                   └──────────────┘                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ Formatted Quote Output
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    SALES REP                                 │
│  - Reviews quote                                             │
│  - Presents to customer                                      │
│  - Manual entry into CRM                                     │
└──────────────────────────────────────────────────────────────┘
```

### Component Details

#### 1. Custom GPT Configuration
**Platform:** OpenAI ChatGPT Plus
**Model:** GPT-4 Turbo (as of 2026-01)
**Capabilities:**
- Code Interpreter: Enabled
- Web Browsing: Disabled
- DALL·E: Disabled

**System Prompt:**
- Single large text block (~6,000 words)
- Defines identity, workflow, logic, quality rules
- Version controlled in repository (`prompts/v0.1-multi-product.md`)

#### 2. Data Layer (CSV Files)
**Storage:** Uploaded to Custom GPT Knowledge Base
**Format:** CSV (Comma-Separated Values)
**Access:** Read-only by Code Interpreter

**Data Files:**
```
products/
├── metal_roofing.csv (11 components)
├── architectural_shingles.csv (11 components)
├── 3tab_shingles.csv (7 components)
└── product_comparison.csv (comparison matrix)

pricing/
├── labor_complexity_matrix.csv (4 complexity tiers × 3 products)
├── business_costs.csv (overhead, profit, permits, disposal)
└── regional_adjustments.csv (zip code multipliers)

savings/
├── insurance_discounts.csv (discounts by product & zip)
├── energy_savings.csv (cooling savings by product & color)
└── longevity_value.csv (replacement cycle costs)

reference_measurements.csv (validation dataset)
```

**Update Process:**
- Manual re-upload via Custom GPT configuration interface
- No API or automated update capability in Phase 1
- Version control in GitHub repository

#### 3. Code Interpreter
**Purpose:** Execute Python code for analysis and calculations

**Capabilities:**
- Image processing (PIL library)
- Data manipulation (pandas)
- Mathematical calculations (numpy)
- Output formatting

**Limitations:**
- Temporary execution environment (resets per conversation)
- No persistent state between sessions
- No external API calls
- Limited to OpenAI-provided libraries

**Typical Usage:**
```python
# Example: Image analysis for measurement
from PIL import Image
import numpy as np

img = Image.open('roof_photo.jpg')
# Analyze dimensions, detect reference objects
# Calculate square footage estimate

# Example: CSV data retrieval
import pandas as pd

labor_rates = pd.read_csv('labor_complexity_matrix.csv')
rate = labor_rates.loc[
    (labor_rates['Complexity_Level'] == 'Moderate') &
    (labor_rates['Product'] == 'Metal'),
    'Metal_Rate_SqFt'
].values[0]

# Example: ROI calculation
total_cost_30yr = (
    initial_cost +
    (replacements * future_cost) -
    (insurance_savings_30yr + energy_savings_30yr)
)
```

### Data Flow

**Quote Generation Workflow:**

1. **Input:**
   - User provides natural language request
   - Uploads photos (roof images)
   - Provides property information (address, preferences)

2. **Processing:**
   - GPT parses user intent and extracts information
   - Code Interpreter analyzes photos for measurements
   - GPT retrieves relevant pricing data from CSVs
   - Code Interpreter performs cost calculations
   - GPT applies product recommendation logic
   - Code Interpreter computes ROI analysis
   - GPT formats comprehensive quote output

3. **Output:**
   - Formatted text quote with full breakdown
   - Presented in chat interface
   - Sales rep manually copies/saves

4. **Manual Steps:**
   - Sales rep reviews quote
   - Sales rep enters data into CRM (if applicable)
   - Sales rep presents to customer
   - No automated tracking or follow-up

### Advantages of Phase 1 Architecture

**Speed to Deploy:**
- Setup in hours, not months
- No custom development required
- Iteration via prompt changes (minutes to deploy)

**Low Cost:**
- No infrastructure costs
- No development team required
- Only cost: ChatGPT Plus subscription (~$20/month)

**Flexibility:**
- Easy to modify system prompt
- Easy to update data files
- Rapid experimentation and refinement

**Powerful AI Foundation:**
- State-of-the-art LLM (GPT-4 Turbo)
- Multimodal (text + image analysis)
- Built-in code execution

### Limitations of Phase 1 Architecture

**No Integrations:**
- Cannot pull data from CRM
- Cannot push quotes to business systems
- Cannot call external APIs (insurance carriers, suppliers)
- Manual data entry required

**No Automation:**
- No automated quote tracking
- No follow-up workflows
- No batch processing
- No scheduled tasks

**Limited Customization:**
- Constrained by ChatGPT interface
- No custom UI
- No mobile app
- No customer-facing portal

**Data Constraints:**
- CSV files only (no database)
- Manual updates required
- No real-time pricing
- Limited analytics

**Scalability:**
- One user per conversation session
- No multi-user support
- No role-based access control
- No audit logging

**Security/Privacy:**
- Data stored on OpenAI servers
- Conversation history retained (30 days)
- Limited control over data residency
- Dependent on OpenAI uptime and policies

---

## Phase 2 Architecture: CRM Integration (Planned)

### Goals
- Maintain Custom GPT foundation
- Add basic integrations with Texas Choice systems
- Automate quote delivery and tracking
- Improve data update workflow

### Proposed Architecture

```
┌──────────────┐         ┌──────────────┐
│   CRM        │◄───────►│ Zapier/Make  │◄───────┐
│  (HubSpot/   │         │  Integration │        │
│   Pipedrive) │         │   Platform   │        │
└──────────────┘         └──────────────┘        │
                                                  │
                         ┌──────────────┐         │
                         │ Google       │         │
                         │ Sheets       │◄────────┤
                         │ (Pricing DB) │         │
                         └──────────────┘         │
                                                  │
                         ┌──────────────┐         │
                         │  iTCR        │         │
                         │  Custom GPT  │◄────────┘
                         │              │
                         └──────┬───────┘
                                │
                         ┌──────▼───────┐
                         │  Sales Rep   │
                         └──────────────┘
```

### Key Additions

**CRM Integration (via Zapier/Make):**
- Trigger: New contact/opportunity in CRM
- Action: Auto-populate customer data to iTCR context
- Trigger: iTCR quote generated
- Action: Create quote record in CRM

**Google Sheets as Pricing Database:**
- Replace static CSV uploads
- Enable easier updates by admin
- Version history tracking
- Still read by iTCR Custom GPT

**Automated Quote Delivery:**
- Email quote PDF to customer
- Log in CRM for tracking
- Set follow-up reminders

**Limitations:**
- Still manual steps required
- Integration reliability depends on third-party platforms
- No custom UI yet

---

## Phase 3 Architecture: Standalone Platform (Future)

### Goals
- Full control over user experience
- Advanced integrations
- Scalability to multiple users/companies
- Customer-facing capabilities

### Proposed Technical Stack

#### Frontend
**Technology:** React + Next.js
**Hosting:** Vercel or AWS Amplify

**Applications:**
1. **Admin Dashboard:**
   - Pricing data management
   - Quote review and approval
   - Analytics and reporting
   - User management

2. **Sales Team App:**
   - Quote generation interface
   - Customer management
   - Photo upload and analysis
   - Quote tracking

3. **Customer Portal:**
   - Self-service quote requests
   - Product comparison tools
   - ROI calculators
   - Quote status tracking

**Key Features:**
- Mobile-responsive design
- Offline capability (PWA)
- Real-time updates (WebSocket)
- Role-based dashboards

#### Backend
**Technology:** Node.js (Express or NestJS)
**Hosting:** AWS (EC2/Lambda) or Google Cloud

**API Layer:**
- RESTful API for all operations
- GraphQL for complex queries (optional)
- Authentication/authorization (JWT)
- Rate limiting and security

**Core Services:**
1. **Estimation Service:**
   - Photo analysis (computer vision API)
   - Measurement calculation
   - Cost estimation logic
   - Product recommendation engine

2. **Pricing Service:**
   - Material cost management
   - Labor rate calculations
   - Regional adjustments
   - Real-time updates

3. **ROI Service:**
   - Insurance savings calculator
   - Energy efficiency modeling
   - Longevity analysis
   - Total cost of ownership

4. **Integration Service:**
   - CRM connectors (Salesforce, HubSpot, etc.)
   - Insurance carrier APIs
   - Material supplier APIs
   - Permit filing systems

5. **Notification Service:**
   - Email delivery
   - SMS alerts
   - In-app notifications
   - Webhook triggers

#### Database
**Technology:** PostgreSQL (primary), Redis (caching)

**Schema Design:**
```sql
-- Core entities
users (id, name, email, role, company_id, ...)
companies (id, name, settings, ...)
customers (id, name, email, address, ...)
properties (id, customer_id, address, measurements, ...)
quotes (id, property_id, product_type, cost_breakdown, roi_analysis, ...)
products (id, name, type, specifications, ...)
pricing_data (id, component, unit, cost, effective_date, ...)

-- Supporting entities
photos (id, property_id, url, analysis_results, ...)
insurance_carriers (id, name, api_credentials, ...)
materials (id, supplier_id, product_id, current_price, ...)
audit_log (id, user_id, action, timestamp, details, ...)
```

**Data Access:**
- ORM: Sequelize or TypeORM
- Query optimization: Indexes, materialized views
- Backup: Automated daily backups
- Replication: Read replicas for analytics

#### AI/ML Layer
**Primary AI:** OpenAI API (GPT-4 for quote generation logic)
**Computer Vision:** Google Cloud Vision API or Amazon Rekognition
**Custom ML Models (future):** TensorFlow/PyTorch for specialized tasks

**AI Integration:**
```
┌──────────────────┐
│  Application     │
│  Layer           │
└────────┬─────────┘
         │
         │ API calls
         │
┌────────▼─────────┐
│  AI Orchestrator │  (Custom service)
│  - Route requests│
│  - Manage context│
│  - Aggregate     │
│    responses     │
└────────┬─────────┘
         │
    ┌────┴────┬──────────┬──────────┐
    │         │          │          │
┌───▼───┐ ┌──▼───┐ ┌────▼────┐ ┌───▼────┐
│OpenAI │ │Google│ │ Custom  │ │ Other  │
│  API  │ │Vision│ │  Model  │ │  APIs  │
└───────┘ └──────┘ └─────────┘ └────────┘
```

**Benefits:**
- Flexibility to use best AI for each task
- Reduce dependency on single provider
- Enable custom fine-tuned models
- Cost optimization

#### Infrastructure

**Cloud Platform:** AWS (preferred) or Google Cloud

**Components:**
- **Compute:** ECS (containers) or Lambda (serverless)
- **Storage:** S3 for photos, CloudFront CDN
- **Database:** RDS (PostgreSQL), ElastiCache (Redis)
- **Monitoring:** CloudWatch, DataDog
- **Security:** WAF, VPC, encryption at rest/in transit

**CI/CD Pipeline:**
```
GitHub → GitHub Actions → Build & Test → Deploy to Staging → Manual Approval → Deploy to Production
```

**Deployment Strategy:**
- Blue-green deployment
- Automated rollback on errors
- Feature flags for gradual rollout

### Phase 3 Data Flow

**Quote Generation (Platform Version):**

1. **User Input:**
   - Sales rep logs into web app
   - Selects customer (from CRM sync or creates new)
   - Uploads photos via drag-and-drop
   - Enters or confirms property details

2. **Backend Processing:**
   - API receives request
   - Photos uploaded to S3
   - Computer vision API analyzes images → measurements
   - Estimation service retrieves pricing data from database
   - AI service applies recommendation logic
   - ROI service calculates savings
   - Quote generated and stored in database

3. **Output:**
   - PDF generated server-side
   - Quote displayed in web interface
   - Automatically saved to CRM
   - Email sent to customer (if requested)
   - Analytics logged

4. **Customer Interaction:**
   - Customer receives email with link to quote
   - Views quote in customer portal
   - Compares product options interactively
   - Accepts quote or requests changes
   - Status updated in real-time for sales rep

### Scalability Considerations

**Horizontal Scaling:**
- Stateless backend services (scale independently)
- Load balancer distributes traffic
- Database read replicas for query load
- CDN for static assets and photos

**Performance Targets:**
- Quote generation: <3 seconds
- API response time: <500ms (95th percentile)
- Uptime: 99.9% (8.76 hours downtime per year max)

**Capacity Planning:**
- Support 1000+ quotes per day
- 50+ concurrent users
- Store 100K+ customer records
- Retain 5 years of quote history

---

## Phase 4 Architecture: Advanced Features (Future)

### Advanced Capabilities

#### 1. Real-Time Insurance Verification
**Integration:** Direct API connections to insurance carriers
**Flow:**
- User inputs customer insurance carrier and policy number
- System calls carrier API to verify current premium
- Real-time calculation of actual savings (not estimates)
- Generate insurance discount verification letter

#### 2. Automated Permit Filing
**Integration:** Municipal permitting systems
**Flow:**
- System generates permit application from quote data
- Automatically populates city/county forms
- Submits electronically
- Tracks approval status
- Alerts sales rep when permit ready

#### 3. Material Ordering Automation
**Integration:** Supplier APIs (ABC Supply, SRS, etc.)
**Flow:**
- When quote accepted, material list auto-generated
- Check supplier inventory in real-time
- Place order automatically or with one-click approval
- Track delivery status
- Integrate with crew scheduling

#### 4. Advanced Computer Vision
**Capabilities:**
- 3D roof modeling from photos
- Drone footage processing
- Current material identification
- Damage assessment (hail, wear)
- Automated pitch/complexity detection

**Technology:**
- Custom-trained models (TensorFlow)
- 3D reconstruction algorithms
- Photogrammetry techniques

#### 5. Predictive Analytics
**Capabilities:**
- Quote success probability scoring
- Optimal pricing recommendations
- Customer lifetime value prediction
- Crew scheduling optimization
- Material demand forecasting

**Technology:**
- Machine learning models (scikit-learn, XGBoost)
- Time series analysis
- A/B testing framework

### Phase 4 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACES                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Web App │  │ Mobile   │  │ Customer │  │   API    │   │
│  │  (Sales) │  │   App    │  │  Portal  │  │  Access  │   │
│  └─────┬────┘  └─────┬────┘  └─────┬────┘  └─────┬────┘   │
└────────┼─────────────┼─────────────┼─────────────┼────────┘
         │             │             │             │
         └─────────────┴─────────────┴─────────────┘
                           │
                  ┌────────▼────────┐
                  │   API Gateway   │
                  │  (Auth, Rate    │
                  │   Limiting)     │
                  └────────┬────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │  Core   │      │Advanced │      │External │
    │Services │      │AI/ML    │      │Integra  │
    │         │      │Services │      │tions    │
    └────┬────┘      └────┬────┘      └────┬────┘
         │                │                 │
    - Estimation      - Computer       - Insurance
    - Pricing           Vision           APIs
    - ROI             - 3D Modeling    - Suppliers
    - User Mgmt       - Predictive     - CRM
    - Quotes            Analytics      - Permitting
                      - Custom ML
                        Models
         │                │                 │
         └────────┬───────┴─────────────────┘
                  │
           ┌──────▼──────┐
           │  Data Layer │
           ├─────────────┤
           │ PostgreSQL  │ (Primary data)
           │ Redis       │ (Cache, sessions)
           │ S3          │ (Photos, files)
           │ ElasticSearch│ (Search, analytics)
           └─────────────┘
```

---

## Security Architecture

### Phase 1 Security
**Current (Custom GPT):**
- Relies on OpenAI security
- ChatGPT Plus authentication
- No additional security controls
- Data stored on OpenAI servers

**Best Practices:**
- Don't upload actual customer PII
- Use generic examples in testing
- Don't commit production pricing to public repo
- Limit Custom GPT sharing to sales team only

### Phase 3+ Security

**Authentication & Authorization:**
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)
- Single sign-on (SSO) integration
- Session management with JWT

**Data Protection:**
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- Database encryption
- Secure key management (AWS KMS)

**Network Security:**
- VPC with private subnets
- WAF for DDoS protection
- Rate limiting per API key
- IP whitelisting (optional)

**Compliance:**
- GDPR considerations (if expanding internationally)
- SOC 2 Type II certification (future)
- Regular security audits
- Penetration testing

**Monitoring & Incident Response:**
- Real-time intrusion detection
- Automated alerting
- Audit logging of all actions
- Incident response playbook

---

## Testing & Quality Assurance Architecture

### Phase 1 Testing
- Manual testing by sales team
- Comparison to historical jobs
- Feedback-driven iteration

### Phase 3+ Testing Strategy

**Unit Testing:**
- Jest (JavaScript/TypeScript)
- Coverage target: >80%
- Automated on each commit

**Integration Testing:**
- API endpoint testing
- Database integration tests
- External API mocking

**End-to-End Testing:**
- Cypress or Playwright
- Critical user journeys
- Run before each deployment

**Performance Testing:**
- Load testing (Apache JMeter)
- Stress testing
- Target: <3s quote generation under load

**Security Testing:**
- OWASP Top 10 vulnerability scanning
- Dependency vulnerability checking
- Penetration testing (annual)

---

## Migration Path

### Phase 1 → Phase 2
**Changes:**
- Add Zapier/Make integrations
- Migrate CSV to Google Sheets
- Maintain Custom GPT core

**Data Migration:**
- None required (data already external)

**Training:**
- Sales team learns new workflows
- Admin learns Google Sheets management

### Phase 2 → Phase 3
**Changes:**
- Build standalone platform
- Migrate from Custom GPT to custom AI integration
- Implement database

**Data Migration:**
```
Google Sheets → PostgreSQL database
- Export all current pricing data
- Transform to database schema
- Import with validation
- Verify accuracy
```

**User Migration:**
- Create user accounts in new platform
- Transfer Custom GPT conversations to CRM (if needed)
- Training on new interface

**Cutover Strategy:**
- Parallel operation period (2-4 weeks)
- Gradual user migration
- Custom GPT remains fallback
- Full cutover after validation

---

## Technology Decisions & Rationale

### Why Custom GPT for Phase 1?
- **Speed:** Deploy in days, not months
- **Cost:** Minimal investment to validate
- **Flexibility:** Easy to iterate
- **Risk:** Low financial risk if concept fails

### Why PostgreSQL for Phase 3?
- **Reliability:** Proven at scale
- **Features:** Advanced querying, JSON support
- **Ecosystem:** Rich tooling and community
- **Cost:** Open source, predictable scaling costs

### Why React/Next.js for Frontend?
- **Performance:** Server-side rendering
- **Developer Experience:** Large talent pool
- **Ecosystem:** Rich component libraries
- **SEO:** Important for customer portal

### Why AWS?
- **Maturity:** Comprehensive service offering
- **Reliability:** Industry-leading uptime
- **Integration:** Easy integration with AI services
- **Support:** Enterprise support options

---

## Conclusion

iTCR's architecture evolves from simple (Custom GPT) to sophisticated (enterprise platform) as business value is validated at each phase. This phased approach minimizes risk while maintaining flexibility for future growth.

**Key Principles:**
- Start simple, evolve based on validated learning
- Maintain data portability between phases
- Plan for scale but don't over-engineer early
- Security and quality from day one

---

**Document Owner:** Justin Bilyeu / Technical Lead
**Last Updated:** 2026-01-03
**Next Review:** After Phase 1 completion
