# Setup Guide: iTCR Custom GPT

**Document Version:** 1.0
**Last Updated:** 2026-01-03
**Target Audience:** Technical administrators, project managers

---

## Overview

This guide provides step-by-step instructions for deploying iTCR as a Custom GPT in ChatGPT Plus. The setup process takes approximately 30-45 minutes and requires ChatGPT Plus subscription access.

---

## Prerequisites

### Required Access
- [ ] ChatGPT Plus subscription ($20/month)
- [ ] Access to iTCR repository: https://github.com/justindbilyeu/iTCR
- [ ] Custom GPT creation permissions (included with ChatGPT Plus)

### Required Files
All files located in this repository:
- **System Prompt:** `docs/01-system-prompt.md` (or `prompts/v0.1-multi-product.md`)
- **Data Files:** All CSV files from `data/` directory
  - `data/products/metal_roofing.csv`
  - `data/products/architectural_shingles.csv`
  - `data/products/3tab_shingles.csv`
  - `data/products/product_comparison.csv`
  - `data/pricing/labor_complexity_matrix.csv`
  - `data/pricing/business_costs.csv`
  - `data/pricing/regional_adjustments.csv`
  - `data/savings/insurance_discounts.csv`
  - `data/savings/energy_savings.csv`
  - `data/savings/longevity_value.csv`
  - `data/reference_measurements.csv`

### Pre-Deployment Checklist
- [ ] Review system prompt and verify all pricing data is current
- [ ] Replace template pricing with actual Texas Choice costs (if ready)
- [ ] Verify labor rates match current crew pricing
- [ ] Confirm overhead and profit percentages
- [ ] Update insurance discount ranges with current carrier data
- [ ] Test data files for formatting errors (open in Excel/Google Sheets)

---

## Setup Instructions

### Step 1: Create Custom GPT

1. **Navigate to ChatGPT**
   - Go to https://chat.openai.com
   - Ensure you're logged in with ChatGPT Plus account

2. **Access Custom GPT Builder**
   - Click your profile icon (bottom left)
   - Select "My GPTs"
   - Click "Create a GPT" button (top right)

3. **Choose Configuration Mode**
   - You'll see two options: "Create" (conversational) and "Configure" (manual)
   - Click **"Configure"** tab for direct setup

### Step 2: Basic Information

1. **Name**
   ```
   iTCR - Texas Choice Roofing Estimator
   ```

2. **Description**
   ```
   AI-powered multi-product roofing estimation system for Texas Choice Roofing.
   Generates transparent quotes with ROI analysis for metal, architectural, and
   3-tab roofing options based on photo analysis.
   ```

3. **Profile Picture** (Optional but recommended)
   - Upload a Texas Choice Roofing logo or generic roofing icon
   - Dimensions: 512x512px recommended
   - If no logo available, skip for now

### Step 3: Configure Instructions

1. **Open System Prompt File**
   - Navigate to `docs/01-system-prompt.md` in this repository
   - Select all content (Ctrl+A or Cmd+A)
   - Copy entire contents

2. **Paste into Instructions Field**
   - In the Custom GPT configuration, find the large "Instructions" text box
   - Paste the complete system prompt
   - Verify it pasted correctly (scroll through to check)

3. **Review Formatting**
   - Ensure markdown formatting is preserved
   - Check that all sections are present
   - Verify no truncation occurred

### Step 4: Upload Data Files

1. **Locate Knowledge Upload Section**
   - In the Custom GPT configuration, scroll to "Knowledge" section
   - You'll see an upload area

2. **Upload All CSV Files**
   - Click "Upload files" button
   - Navigate to the `data/` directory
   - Select all CSV files (you can upload multiple at once):
     - All files from `data/products/`
     - All files from `data/pricing/`
     - All files from `data/savings/`
     - `data/reference_measurements.csv`
   - Upload in batches if needed (some browsers limit simultaneous uploads)

3. **Verify Upload**
   - Confirm all 11 CSV files are listed
   - Check file sizes are non-zero
   - If any uploads failed, retry individually

**File Checklist:**
- [ ] metal_roofing.csv
- [ ] architectural_shingles.csv
- [ ] 3tab_shingles.csv
- [ ] product_comparison.csv
- [ ] labor_complexity_matrix.csv
- [ ] business_costs.csv
- [ ] regional_adjustments.csv
- [ ] insurance_discounts.csv
- [ ] energy_savings.csv
- [ ] longevity_value.csv
- [ ] reference_measurements.csv

### Step 5: Configure Capabilities

**Enable these capabilities:**
- [x] **Code Interpreter** - REQUIRED (for image analysis and calculations)
- [ ] **Web Browsing** - OFF for now (not needed in v0.1)
- [ ] **DALL·E Image Generation** - OFF (not needed)

**Note:** Code Interpreter is critical for iTCR functionality. It enables:
- Image analysis for roof measurement
- CSV data parsing
- Cost calculations
- ROI analysis

### Step 6: Set Conversation Starters (Optional)

Add helpful prompts to guide users. Suggestions:

```
Generate a quote from these roof photos
```

```
I need a metal vs architectural comparison
```

```
Estimate my roof replacement cost
```

```
What's the ROI on metal roofing for my zip code?
```

These appear as clickable buttons when users first open iTCR.

### Step 7: Configure Additional Settings

**Allow Custom GPT to Use:**
- [x] Code Interpreter
- [x] Uploaded files (Knowledge)

**Privacy Settings:**
- **Sharing:** Set to "Only people with the link" initially (for testing)
- **After validation:** Can change to "Anyone" or create shareable link for sales team

**Note:** Do NOT select "Public" until after Phase 1 validation and pricing review.

### Step 8: Save and Test

1. **Click "Create" or "Update"** (top right)
   - Give it a moment to save

2. **Initial Test Query**
   - Click "View GPT" to open a conversation
   - Try a simple test:
     ```
     Hello! Can you explain what you do?
     ```
   - iTCR should respond with its identity and capabilities

3. **Data Access Test**
   - Ask:
     ```
     What's the labor rate for metal roofing at moderate complexity?
     ```
   - iTCR should reference the labor_complexity_matrix.csv file
   - Expected response: $5.75/sq ft (verify against actual file data)

4. **Quick Validation Test**
   - Upload a sample roof photo (can use Google Maps satellite view)
   - Provide minimal info (address optional)
   - Ask for a multi-product quote
   - Review output for completeness and formatting

---

## Validation Testing

Before deploying to sales team, run through validation checklist:

### Basic Functionality
- [ ] iTCR responds to greeting with role explanation
- [ ] System can access and read CSV files
- [ ] Image upload and analysis works
- [ ] Multi-product quotes generate successfully
- [ ] ROI calculations include all components (insurance, energy, longevity)
- [ ] Output formatting is clear and professional

### Data Accuracy
- [ ] Material costs match uploaded CSV values
- [ ] Labor rates correspond to complexity tiers correctly
- [ ] Overhead and profit percentages applied accurately
- [ ] Insurance discounts within defined ranges
- [ ] Energy savings calculations use correct product/color data
- [ ] Replacement cycle logic accurate (0 for metal, 1 for arch, 2 for 3-tab)

### Error Handling
- [ ] Gracefully handles missing photos
- [ ] Requests critical information when absent
- [ ] Provides confidence scores
- [ ] Flags unusual measurements for review
- [ ] Escalates complex properties appropriately

### Edge Cases
- [ ] Very large roof (>4,000 sq ft)
- [ ] Very small roof (<1,000 sq ft)
- [ ] Steep pitch (>10/12)
- [ ] Complex architecture (multiple dormers, valleys)
- [ ] Poor quality photos

**If any validation fails, troubleshoot before sales team deployment.**

---

## Troubleshooting

### Common Issues

**Issue: "I don't have access to those files"**
- **Cause:** CSV files not uploaded or upload failed
- **Solution:** Re-upload data files in Knowledge section
- **Verification:** Ask iTCR to "list the files you have access to"

**Issue: Incorrect pricing calculations**
- **Cause:** Wrong values in CSV or formula error
- **Solution:** Download CSV from Knowledge section, verify data, re-upload
- **Note:** Cannot edit CSVs in place; must re-upload

**Issue: Image analysis fails**
- **Cause:** Code Interpreter not enabled
- **Solution:** Edit GPT configuration, enable Code Interpreter, save

**Issue: Quotes missing ROI analysis**
- **Cause:** Insurance/energy savings CSV files missing
- **Solution:** Verify all 11 CSV files uploaded, re-upload if needed

**Issue: Inconsistent output format**
- **Cause:** System prompt truncated or missing sections
- **Solution:** Re-copy complete system prompt from docs/01-system-prompt.md

**Issue: GPT gives generic ChatGPT responses**
- **Cause:** Custom instructions not saved properly
- **Solution:** Return to Configure tab, verify Instructions field has content, save

### Diagnostic Commands

Test these in a conversation with iTCR:

1. **Check file access:**
   ```
   List all CSV files you have access to
   ```
   Expected: 11 files listed

2. **Check specific data:**
   ```
   What's in the product_comparison.csv file?
   ```
   Expected: Table showing metal, arch, 3-tab comparison

3. **Check prompt awareness:**
   ```
   What are the three products you support?
   ```
   Expected: Metal, Architectural, 3-Tab with descriptions

4. **Check calculation logic:**
   ```
   Walk me through how you calculate 30-year cost of ownership
   ```
   Expected: Explanation matching system prompt methodology

---

## Deployment to Sales Team

### Phase 1: Pilot Testing (Week 1)

**Select 2-3 pilot users:**
- Experienced sales reps who can provide quality feedback
- Tech-comfortable individuals
- Mix of personalities (skeptical + enthusiastic)

**Pilot Instructions:**
1. Share Custom GPT link
2. Provide this guide (or simplified version)
3. Request they test on 3-5 properties
4. Collect feedback via form or interview
5. Document issues and edge cases

### Phase 2: Full Team Rollout (Week 2)

**Training Session (1 hour):**
- Demo iTCR capabilities (15 min)
- Walk through example quote generation (15 min)
- Hands-on practice with sample properties (20 min)
- Q&A and troubleshooting (10 min)

**Provide to team:**
- Custom GPT link
- Quick reference guide (simplified version of field guide)
- Example quotes showing expected output
- Escalation contact for issues

### Phase 3: Monitoring & Support (Weeks 2-4)

**Track metrics:**
- Usage frequency per rep
- Types of quotes generated
- Common issues/questions
- Customer feedback
- Quote-to-sale conversion (if trackable)

**Support channels:**
- Slack channel or email for quick questions
- Weekly check-ins with each rep
- Collect and address feedback rapidly

---

## Updating iTCR

### When to Update

**Immediate updates required:**
- Pricing changes (material costs, labor rates)
- Business policy changes (overhead, profit margins)
- Insurance discount data updates

**Periodic updates (monthly/quarterly):**
- System prompt refinements based on feedback
- New edge case handling
- Improved error messages

**Major updates (Phase 2+):**
- Additional product support
- New features (permit automation, etc.)
- Integration capabilities

### Update Process

**For Data Changes (CSV files):**
1. Edit CSV files locally
2. Open Custom GPT configuration
3. Go to Knowledge section
4. Delete old version of file
5. Upload new version
6. Save GPT
7. Test changed calculations

**For Prompt Changes:**
1. Edit system prompt in repository
2. Update version number
3. Copy updated prompt
4. Open Custom GPT configuration
5. Replace Instructions field content
6. Save GPT
7. Test new behavior

**For Major Changes:**
1. Consider creating iTCR v0.2 as separate Custom GPT
2. Test thoroughly before switching team over
3. Keep v0.1 available as fallback
4. Document changes in CHANGELOG.md

### Version Control

**Maintain versions:**
- `prompts/v0.1-multi-product.md` (current)
- `prompts/v0.2-xxxxx.md` (future)
- Always document what changed and why

**Track in repository:**
- Commit all CSV updates with clear messages
- Tag releases (v0.1, v0.2, etc.)
- Update CHANGELOG.md with each version

---

## Advanced Configuration

### Custom Pricing for Different Markets

If Texas Choice expands to other cities:

1. **Create market-specific CSV files:**
   - `data/pricing/regional_adjustments_houston.csv`
   - Update zip codes and multipliers

2. **Update system prompt:**
   - Add logic to detect market from zip code
   - Reference appropriate regional file

3. **Or create market-specific Custom GPTs:**
   - iTCR-Austin
   - iTCR-Houston
   - Each with market-specific data

### Integration with CRM (Phase 2)

**Not currently available in Custom GPT but future platform:**
- API to pull customer data
- API to push completed quotes
- Automated follow-up triggers

**Workaround for Phase 1:**
- Manual copy/paste of quotes into CRM
- Sales rep enters customer data manually to iTCR

### Multi-Language Support (Future)

**Spanish language support:**
- Translate system prompt
- Create Spanish-language Custom GPT version
- Maintain parallel data files with Spanish labels

---

## Security & Privacy Considerations

### Data Security

**What's stored in Custom GPT:**
- System instructions (permanent)
- Uploaded CSV files (permanent)
- Conversation history (per user, 30-day retention)

**What's NOT stored:**
- Customer photos (processed but not permanently saved)
- Personal customer information (only if user inputs it)

**Best Practices:**
- Don't include actual customer names in prompts
- Use property addresses only when needed for calculations
- Don't upload sensitive Texas Choice financial data beyond pricing templates
- Remind sales team not to share confidential customer info with AI

### Pricing Data Protection

**Template vs. Production Data:**
- Repository contains TEMPLATE pricing (industry averages)
- Production Custom GPT should use actual Texas Choice pricing
- Actual pricing CSVs should NOT be committed to public repository

**Update .gitignore:**
```
data/**/actual_*.csv
data/**/production_*.csv
```

**Use naming convention:**
- `metal_roofing_template.csv` (in repository)
- `metal_roofing_actual.csv` (in production GPT only, not in repo)

### Access Control

**Who should have access:**
- Texas Choice sales team (Custom GPT link)
- Management (admin access to edit GPT)
- Approved pilot testers

**Who should NOT have access:**
- General public (keep "Only people with link" until validated)
- Competitors (never make public with actual pricing data)

---

## Maintenance Schedule

### Daily (During Phase 1)
- Monitor for critical errors
- Respond to sales team questions
- Collect usage feedback

### Weekly
- Review quotes generated
- Compare estimates to actual measurements (when available)
- Adjust system prompt for recurring issues
- Update FAQ based on common questions

### Monthly
- Update pricing data (material costs, labor rates)
- Review insurance discount data for changes
- Analyze accuracy metrics
- Plan prompt improvements for next version

### Quarterly
- Major system prompt updates
- Comprehensive data validation
- Sales team training refresher
- Evaluate transition to Phase 2/3

---

## Success Metrics

Track these KPIs to measure iTCR effectiveness:

### Usage Metrics
- Number of quotes generated per week
- Number of active users (sales reps)
- Average quotes per user
- Time to generate quote (user feedback)

### Quality Metrics
- Measurement accuracy (vs. actual measurements)
- Pricing accuracy (vs. final invoices)
- Customer comprehension (feedback)
- Quote professional appearance (feedback)

### Business Metrics
- Quote-to-sale conversion rate
- Average project value (track premium product mix)
- Customer satisfaction scores
- Sales rep satisfaction scores

**Target for Phase 1:**
- 80%+ sales team adoption
- <10% measurement error average
- ±8% pricing accuracy
- <10 minutes quote generation time

---

## Support Resources

### Documentation
- **System Prompt:** `docs/01-system-prompt.md` (technical reference)
- **Field Guide:** `docs/05-field-guide.md` (sales team usage)
- **Testing Protocol:** `docs/03-testing-protocol.md` (validation framework)

### Repository
- **GitHub:** https://github.com/justindbilyeu/iTCR
- **Issues:** Report bugs and feature requests via GitHub Issues

### Contacts
- **Technical Issues:** [Technical administrator contact]
- **Pricing Questions:** [Texas Choice management contact]
- **General Feedback:** [Project lead contact]

---

## Next Steps

After completing setup:

1. **Validate** - Run through validation testing checklist
2. **Pilot** - Deploy to 2-3 pilot users for 1 week
3. **Refine** - Collect feedback and make adjustments
4. **Train** - Conduct team training session
5. **Deploy** - Roll out to full sales team
6. **Monitor** - Track metrics and support users

**See ROADMAP.md for complete Phase 1 timeline and objectives.**

---

**Document maintained by:** Justin Bilyeu
**Last reviewed:** 2026-01-03
**Next review:** After Phase 1 Week 1 (pilot testing complete)
