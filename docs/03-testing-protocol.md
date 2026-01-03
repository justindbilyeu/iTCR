# Testing Protocol: 3-Week Validation Framework

**Document Version:** 1.0
**Last Updated:** 2026-01-03
**Purpose:** Structured testing approach for Phase 1 validation

---

## Overview

This protocol defines a systematic 3-week testing framework to validate iTCR accuracy, usability, and business value before full deployment. The framework balances speed (get to market quickly) with rigor (ensure quality and accuracy).

**Timeline:** 3 weeks
**Objective:** Validate or invalidate Phase 1 success criteria
**Decision Point:** Go/No-Go for Phase 2 at week 3

---

## Success Criteria (Phase 1)

iTCR must demonstrate:
- **Measurement Accuracy:** <10% average error vs. actual measurements
- **Pricing Accuracy:** ±8% of final invoiced costs
- **Speed:** <10 minutes per quote generation
- **Adoption:** 80%+ sales team regular usage
- **Quality:** Professional output, customer comprehension

**If criteria not met:** Iterate for 2-4 additional weeks or re-evaluate approach.

---

## Week 1: Baseline Accuracy Testing

### Objectives
1. Validate measurement estimation accuracy
2. Validate pricing calculation accuracy
3. Identify systematic errors
4. Establish baseline performance metrics

### Test Set: Historical Jobs

**Requirements:**
- 10 completed roofing projects
- Known actual measurements (from final invoices or install reports)
- Known final costs
- Range of complexity levels (simple, moderate, complex)
- Mix of product types if available

**Ideal Historical Test Set:**
- 3-4 simple jobs (1 story, standard gable, <2000 sq ft)
- 4-5 moderate jobs (2 story, 2-3 valleys, 2000-3000 sq ft)
- 2-3 complex jobs (steep pitch, dormers, >3000 sq ft)
- Mix of metal, architectural, and 3-tab (if available)

### Testing Process

**For Each Historical Job:**

1. **Gather Materials:**
   - Photos used for original estimate (or current overhead view)
   - Property address
   - Actual final measurements (sq ft)
   - Actual final invoice (total cost and breakdown if available)
   - Product type installed

2. **Run iTCR Estimate:**
   - Input photos and basic info to iTCR
   - Do NOT provide actual measurements (test estimation capability)
   - Record iTCR's estimated square footage
   - Record iTCR's estimated total cost
   - Record confidence score provided
   - Record time taken to generate quote

3. **Compare to Actuals:**
   - Calculate measurement error: (iTCR sq ft - Actual sq ft) / Actual sq ft × 100
   - Calculate pricing error: (iTCR cost - Actual cost) / Actual cost × 100
   - Note: Positive error = overestimate, negative = underestimate

4. **Document Results:**
   Use testing template:
   ```
   Job ID: [Reference number]
   Property: [Address]
   Product Type: [Metal/Arch/3-Tab]
   Complexity: [Simple/Moderate/Complex]

   MEASUREMENTS:
   iTCR Estimate: [sq ft]
   Actual: [sq ft]
   Error: [±%]
   Confidence: [High/Med/Low]

   PRICING:
   iTCR Estimate: $[amount]
   Actual Invoice: $[amount]
   Error: [±%]

   TIME TO QUOTE: [minutes]

   NOTES:
   - [Any issues, edge cases, or observations]
   ```

### Analysis

**After 10 Tests:**

1. **Calculate Statistics:**
   - Average measurement error (absolute)
   - Average pricing error (absolute)
   - Systematic bias (overestimate vs underestimate)
   - Error range (min to max)
   - Correlation with complexity level
   - Correlation with confidence scores

2. **Identify Patterns:**
   - Do certain roof types show higher errors?
   - Does iTCR consistently over/underestimate?
   - Are low-confidence estimates less accurate?
   - Do specific features cause problems (steep pitch, valleys, etc.)?

3. **Root Cause Analysis:**
   For any error >15%:
   - What caused the discrepancy?
   - Was it measurement error, pricing error, or scope difference?
   - Could it have been avoided with better photos or information?
   - Does system prompt need adjustment?

### Week 1 Deliverables

**Accuracy Report:**
```
WEEK 1 BASELINE ACCURACY TESTING RESULTS

Test Set: 10 historical jobs
Date Range: [dates]
Tester: [name]

MEASUREMENT ACCURACY:
- Average error: [X.X]%
- Error range: [min]% to [max]%
- Systematic bias: [over/under]estimate by [X]%
- Success rate (<10% error): [X/10]

PRICING ACCURACY:
- Average error: [X.X]%
- Error range: [min]% to [max]%
- Systematic bias: [over/under]estimate by [X]%
- Success rate (±8% error): [X/10]

SPEED:
- Average time to quote: [X] minutes
- Range: [min] to [max] minutes

ANALYSIS:
[Summary of patterns, root causes, recommendations]

RECOMMENDATIONS FOR PROMPT REFINEMENT:
1. [Specific adjustment based on findings]
2. [...]

GO/NO-GO FOR WEEK 2 FIELD TESTING:
[Decision and reasoning]
```

### Week 1 Decision Point

**GO to Week 2 if:**
- Average measurement error <15% (allows room for improvement to <10%)
- Average pricing error <12% (allows room for improvement to ±8%)
- No critical systematic issues discovered
- Identified errors are addressable through prompt refinement

**NO-GO / Iterate if:**
- Fundamental accuracy issues (>20% average error)
- Systematic problems requiring architectural changes
- Data quality issues (CSV files incorrect)
- Unusable output or critical functionality gaps

**If NO-GO:** Spend additional 1-2 weeks refining, then retest.

---

## Week 2-3: Field Testing with Real Customers

### Objectives
1. Validate accuracy in live sales scenarios
2. Test sales team usability and adoption
3. Measure quote generation speed in practice
4. Collect customer feedback
5. Identify real-world edge cases

### Test Set: Live Customer Properties

**Requirements:**
- 15-20 live customer properties
- Range of customer types (insurance claim, upgrade, budget)
- Range of property types (complexity, size, product fit)
- Mix across sales team (3+ reps testing)

**Testing Approach: Parallel Estimation**
- Sales rep uses iTCR to generate quote
- Also create manual quote using traditional method (for comparison)
- Present iTCR quote to customer (or both, for comparison)
- Track outcomes and feedback

### Testing Process

**For Each Live Job:**

1. **Pre-Quote:**
   - Sales rep collects photos and customer info
   - Notes customer priorities and budget expectations
   - Records start time

2. **Generate iTCR Quote:**
   - Input info to iTCR
   - Generate multi-product quote
   - Record time taken
   - Review output for completeness and professionalism

3. **Generate Manual Quote (Optional):**
   - For comparison, create traditional estimate
   - Compare iTCR vs manual estimates
   - Note differences and which seems more accurate

4. **Present to Customer:**
   - Show iTCR quote (or both for comparison)
   - Observe customer reaction and comprehension
   - Answer questions
   - Note customer feedback

5. **Post-Quote Tracking:**
   - Record customer decision (which product, if any)
   - If job proceeds, track actual measurements and costs
   - Compare iTCR estimate to actuals (when available)

6. **Document:**
   ```
   Job ID: [Reference]
   Date: [date]
   Sales Rep: [name]
   Customer Type: [Insurance/Upgrade/Budget]

   PROPERTY:
   Address: [address]
   Estimated Size: [iTCR sq ft]
   Complexity: [tier]

   QUOTE GENERATION:
   Time to create iTCR quote: [minutes]
   Products quoted: [Metal/Arch/3-Tab]
   Confidence score: [High/Med/Low]

   COMPARISON (if manual quote created):
   iTCR estimate: $[amount]
   Manual estimate: $[amount]
   Difference: [±%]

   CUSTOMER FEEDBACK:
   Quote comprehension: [1-5 scale]
   Professional appearance: [1-5 scale]
   Transparency: [1-5 scale]
   Comments: "[verbatim customer comments]"

   SALES REP FEEDBACK:
   Ease of use: [1-5 scale]
   Time savings vs manual: [±X minutes]
   Confidence in accuracy: [1-5 scale]
   Would use again: [Yes/No]
   Issues encountered: "[description]"

   OUTCOME:
   Customer decision: [Product selected / No decision / Declined]
   If declined, reason: "[reason if known]"

   ACTUAL RESULTS (when job completes):
   Actual measurements: [sq ft] (Error: [±%])
   Actual final cost: $[amount] (Error: [±%])
   ```

### Sales Team Training & Support

**Before Field Testing:**
1. **Training Session (1 hour):**
   - Demo iTCR capabilities
   - Walk through example quote generation
   - Hands-on practice (each rep generates 1-2 test quotes)
   - Q&A

2. **Provide Resources:**
   - Quick reference guide (simplified field guide)
   - Example good/bad photos
   - Troubleshooting tips
   - Support contact for issues

**During Field Testing:**
- Daily check-ins (first few days)
- Weekly team sync to share learnings
- Rapid response to issues (<24 hours)
- Collect and address feedback continuously

### Customer Feedback Collection

**After Quote Presentation:**
Ask customer (verbally or via brief survey):
1. "How clear was the quote breakdown?" (1-5 scale)
2. "Did you understand the differences between the product options?" (Yes/No)
3. "Did the ROI analysis (insurance savings, energy efficiency) help your decision?" (Yes/No)
4. "How professional did the quote appear?" (1-5 scale)
5. "What questions do you still have?" (Open-ended)

### Week 2-3 Deliverables

**Field Testing Report:**
```
WEEK 2-3 FIELD TESTING RESULTS

Test Set: [X] live customer properties
Date Range: [dates]
Sales Reps: [names, X total]

USAGE METRICS:
- Total quotes generated: [X]
- Average quotes per rep: [X]
- Sales team participation: [X/X] ([X]%)
- Average time to quote: [X] minutes
- Success rate (quote completed): [X]%

ACCURACY (for jobs where actuals available):
- Measurement error: [X]% average ([X] jobs tracked)
- Pricing error: [X]% average ([X] jobs tracked)

CUSTOMER FEEDBACK ([X] responses):
- Quote clarity: [X.X]/5 average
- Comprehension: [X]% understood product differences
- ROI helpfulness: [X]% found it helpful
- Professional appearance: [X.X]/5 average

SALES REP FEEDBACK ([X] responses):
- Ease of use: [X.X]/5 average
- Time savings: [X] minutes average vs manual
- Confidence in accuracy: [X.X]/5 average
- Would use again: [X]% Yes
- Adoption rate: [X]% using regularly

EDGE CASES IDENTIFIED:
1. [Description of edge case, frequency, how handled]
2. [...]

ISSUES ENCOUNTERED:
1. [Issue description, impact, resolution]
2. [...]

CUSTOMER OUTCOMES ([X] decisions made):
- Selected option: [X]% (Metal: [X]%, Arch: [X]%, 3-Tab: [X]%)
- No decision yet: [X]%
- Declined: [X]% (reasons: [summary])

ANALYSIS:
[Insights on what's working, what needs improvement]

RECOMMENDATIONS:
1. [Specific improvements for v0.2]
2. [...]
```

---

## Week 3: Edge Case Testing & Refinement

### Objectives
1. Deliberately test failure modes
2. Document blind spots and limitations
3. Refine system prompt based on Weeks 1-2 learnings
4. Prepare for Go/No-Go decision

### Edge Case Test Set

**Deliberately test these scenarios:**

1. **Extreme Size:**
   - Very large property (>5,000 sq ft)
   - Very small property (<800 sq ft)

2. **Extreme Complexity:**
   - Steep pitch (>10/12)
   - Many valleys and dormers (7+)
   - Unusual architecture (historical, unique design)

3. **Poor Data Quality:**
   - Low-quality photos
   - No clear reference objects
   - Obstructed views (trees, shadows)

4. **Unusual Requirements:**
   - Partial replacement (not full roof)
   - Repairs only
   - Non-standard materials
   - Customer budget constraints (<$5K)

5. **Zip Code Edge Cases:**
   - Zip codes not in database
   - Rural/suburban areas with different pricing
   - New developments

**For Each Edge Case:**
- Run through iTCR
- Document how system handles it
- Note whether escalation triggers properly
- Identify if manual intervention needed
- Recommend system improvements

### System Prompt Refinement

**Based on Weeks 1-3 findings:**

1. **Measurement Accuracy Improvements:**
   - Adjust pitch multipliers if systematic bias found
   - Refine complexity addition factors
   - Improve confidence scoring logic

2. **Pricing Adjustments:**
   - Update any incorrect CSV data
   - Adjust labor rates if consistently off
   - Fine-tune overhead/profit if needed

3. **Communication Improvements:**
   - Clarify confusing output sections
   - Add explanations where customers struggled
   - Improve error messages

4. **Edge Case Handling:**
   - Add specific guidance for identified blind spots
   - Improve escalation triggers
   - Document known limitations clearly

**Create v0.2 System Prompt:**
- Document all changes from v0.1
- Test thoroughly before deploying
- Update CHANGELOG.md

### Week 3 Deliverables

**Edge Case Report:**
```
WEEK 3 EDGE CASE TESTING RESULTS

Test Set: [X] edge case scenarios
Date: [dates]
Tester: [name]

EDGE CASES TESTED:
1. [Scenario]: [Outcome, how system handled it]
2. [...]

BLIND SPOTS IDENTIFIED:
1. [Limitation]: [Impact, recommended solution]
2. [...]

SYSTEM IMPROVEMENTS NEEDED:
1. [Specific improvement, priority]
2. [...]
```

**System Prompt v0.2:**
- Updated prompt file with refinements
- Change log documenting v0.1 → v0.2 changes
- Testing validation of v0.2

---

## Phase 1 Completion Report

### Comprehensive Phase 1 Analysis

**After Week 3, compile:**

```
iTCR PHASE 1 VALIDATION REPORT
3-Week Testing Period: [dates]

EXECUTIVE SUMMARY:
[2-3 paragraph summary of results, recommendation]

SUCCESS CRITERIA ASSESSMENT:

1. Measurement Accuracy (<10% target):
   - Result: [X]% average error
   - Status: [MET / NOT MET / PARTIALLY MET]
   - Details: [explanation]

2. Pricing Accuracy (±8% target):
   - Result: [X]% average error
   - Status: [MET / NOT MET / PARTIALLY MET]
   - Details: [explanation]

3. Speed (<10 min target):
   - Result: [X] minutes average
   - Status: [MET / NOT MET / PARTIALLY MET]
   - Details: [explanation]

4. Sales Team Adoption (80% target):
   - Result: [X]% regular usage
   - Status: [MET / NOT MET / PARTIALLY MET]
   - Details: [explanation]

5. Professional Quality:
   - Customer satisfaction: [X.X]/5
   - Sales rep satisfaction: [X.X]/5
   - Status: [MET / NOT MET / PARTIALLY MET]
   - Details: [explanation]

QUANTITATIVE RESULTS:
- Total quotes generated: [X]
- Total customers served: [X]
- Measurement error: [X]% avg (range: [min] to [max]%)
- Pricing error: [X]% avg (range: [min] to [max]%)
- Quote time: [X] min avg (range: [min] to [max] min)
- Customer comprehension: [X]%
- Sales team adoption: [X]%

QUALITATIVE INSIGHTS:
- What worked well: [summary]
- What needs improvement: [summary]
- Unexpected findings: [summary]
- Customer reactions: [summary]
- Sales team feedback: [summary]

EDGE CASES & LIMITATIONS:
1. [Limitation / Edge case and impact]
2. [...]

RECOMMENDATIONS FOR v0.2:
1. [Specific improvement, rationale]
2. [...]

BUSINESS IMPACT (if measurable):
- Quote volume: [baseline] → [with iTCR]
- Time savings: [X] hours per week
- Close rate impact: [if trackable]
- Premium product mix: [if trackable]

PHASE 2 RECOMMENDATION:

☐ GO - Proceed to Phase 2 (Refinement & Integration)
  Justification: [why criteria met or exceeded]

☐ ITERATE - Continue Phase 1 for [X] more weeks
  Justification: [what needs improvement, timeline]

☐ NO-GO - Re-evaluate approach
  Justification: [fundamental issues identified]

NEXT STEPS:
1. [Immediate action item]
2. [...]

```

---

## Testing Best Practices

### Photo Quality Standards

**Good Photos for Testing:**
- Clear overhead view
- Visible reference objects (cars, garage)
- Entire roof visible
- Adequate lighting
- Minimal obstructions

**Use varied quality in testing:**
- Mix of excellent, good, and adequate photos
- Intentionally test poor photos in Week 3
- Document how photo quality affects accuracy

### Documentation Discipline

**Record everything:**
- Use standardized templates
- Capture verbatim customer comments
- Note environmental factors (time pressure, customer mood, etc.)
- Track even "failed" quotes (errors, abandoned attempts)

**Why it matters:**
- Patterns emerge from comprehensive data
- Edge cases often yield the most valuable insights
- Documentation enables future improvements

### Feedback Culture

**Encourage honest feedback:**
- Sales team should feel safe reporting issues
- Customers' negative feedback is valuable
- "This didn't work" is more useful than "everything's great"

**Act on feedback rapidly:**
- Address critical issues within 24-48 hours
- Show team their input drives improvements
- Maintain feedback log and resolution status

### Comparison Discipline

**When comparing iTCR to manual estimates:**
- Use same source data (photos, customer info)
- Same sales rep creates both (eliminates skill variance)
- Don't "help" iTCR by providing extra info not in prompt
- Record which estimate customer prefers and why

---

## Risks & Mitigation

### Testing Risks

**Risk: Sales team resistance**
- Mitigation: Voluntary participation, incentivize feedback, show time savings
- Mitigation: Start with enthusiastic early adopters

**Risk: Insufficient test cases**
- Mitigation: Set minimum numbers (10 historical, 15 live)
- Mitigation: Ensure diversity in test set

**Risk: Customer confusion or negative reaction**
- Mitigation: Position as "AI-assisted" not "AI-only"
- Mitigation: Sales rep reviews before presenting
- Mitigation: Have manual fallback ready

**Risk: Inaccurate results damage brand**
- Mitigation: Confidence scoring, human review for low-confidence
- Mitigation: Test thoroughly before customer-facing deployment
- Mitigation: Present as estimates, require verification

### Data Collection Risks

**Risk: Incomplete documentation**
- Mitigation: Use templates, make reporting easy
- Mitigation: Assign dedicated tester for Week 1
- Mitigation: Daily check-ins to ensure documentation

**Risk: Bias in feedback collection**
- Mitigation: Mix of positive and skeptical testers
- Mitigation: Anonymous customer surveys
- Mitigation: Quantitative metrics alongside qualitative

---

## Post-Testing: Continuous Improvement

### Ongoing Accuracy Tracking

**After Phase 1:**
- Continue comparing iTCR estimates to actuals
- Maintain accuracy log
- Monthly review of error rates
- Adjust system prompt and data as needed

### Feedback Loop

**Systematic collection:**
- Sales rep end-of-week reports
- Customer satisfaction surveys
- Quarterly team retrospectives

**Systematic improvement:**
- Monthly prompt refinements
- Quarterly major updates
- Annual strategic review

---

## Conclusion

This 3-week testing protocol balances speed with rigor. By Week 3, you'll have concrete data to support Phase 2 investment or identify needed iterations.

**Remember:** The goal isn't perfection—it's validation of business value and path to improvement.

---

**Document Owner:** Justin Bilyeu
**Last Updated:** 2026-01-03
**Related Documents:**
- `docs/02-setup-guide.md` (deployment instructions)
- `ROADMAP.md` (Phase 1 objectives and decision framework)
- `docs/05-field-guide.md` (sales team usage during testing)
