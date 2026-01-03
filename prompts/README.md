# System Prompts

## Overview

This directory contains versioned system prompts for the iTCR Custom GPT.

---

## Current Version

**v0.1-multi-product.md** - Initial multi-product estimation system

**Status:** Production ready for Phase 1 deployment
**Last Updated:** 2026-01-03

---

## Usage

### Deploying to Custom GPT

1. Open Custom GPT configuration in ChatGPT
2. Open the current version file (`v0.1-multi-product.md`)
3. Select all content (Ctrl+A or Cmd+A)
4. Copy entire contents
5. Paste into "Instructions" field in Custom GPT configuration
6. Upload data files from `/data/` directory
7. Enable Code Interpreter capability
8. Save Custom GPT

See `docs/02-setup-guide.md` for complete deployment instructions.

---

## Version History

### v0.1 (2026-01-03)
**Status:** Active

**Features:**
- Multi-product support (metal, architectural, 3-tab)
- Six-phase estimation workflow
- Photo-based measurement analysis
- Product recommendation logic
- Cost calculation with transparent breakdown
- ROI analysis (insurance, energy, longevity)
- Quality control rules
- Error handling protocols

**Data Files Required:**
- All CSV files from `/data/` directory (11 files total)

**Known Limitations:**
- Manual photo interpretation (no automated computer vision yet)
- Template pricing (not actual Texas Choice costs)
- No external API integrations
- Conservative pitch estimation from photos

---

## Maintenance

### When to Create New Version

**Minor Updates (v0.1 → v0.1.1):**
- Clarify wording
- Fix typos
- Add examples
- Improve error messages

**Major Updates (v0.1 → v0.2):**
- Change workflow logic
- Add new products
- Modify calculation formulas
- Significant prompt restructuring

### Update Process

1. **Create New Version File:**
   ```bash
   cp prompts/v0.1-multi-product.md prompts/v0.2-description.md
   ```

2. **Make Changes:**
   - Edit new version file
   - Document changes in header
   - Test thoroughly

3. **Update Documentation:**
   - Add entry to this README
   - Update CHANGELOG.md
   - Note breaking changes

4. **Deploy:**
   - Follow deployment process (see above)
   - Keep previous version as rollback option
   - Monitor for issues

5. **Deprecate Old Version (if needed):**
   - Mark old version as deprecated in README
   - Maintain for reference
   - Delete after confirmed stable replacement

---

## Version Naming Convention

Format: `v[major].[minor]-[description].md`

**Examples:**
- `v0.1-multi-product.md` (initial version)
- `v0.2-improved-measurements.md` (major update)
- `v0.2.1-clarifications.md` (minor update)
- `v1.0-platform-integration.md` (Phase 3 platform version)

---

## Testing Before Deployment

**Checklist:**

- [ ] Paste prompt into Custom GPT test environment
- [ ] Upload all required data files
- [ ] Test basic functionality:
  - [ ] Identity and role explanation
  - [ ] Photo upload and analysis
  - [ ] Multi-product quote generation
  - [ ] ROI calculations
  - [ ] Error handling (missing data)
- [ ] Compare to previous version (if updating)
- [ ] Test edge cases
- [ ] Get second review from team member

---

## Prompt Engineering Best Practices

### Structure

- Clear sections with headers
- Logical flow (identity → workflow → details)
- Specific instructions over general guidance
- Examples where helpful

### Language

- Direct, imperative tone ("Calculate X", not "You should calculate X")
- Define all terms and acronyms
- Use consistent terminology
- Be specific about formats and outputs

### Error Prevention

- Include quality control checks
- Define confidence thresholds
- Specify escalation triggers
- Handle edge cases explicitly

### Maintaining Context

- Remind of identity and purpose periodically
- Reinforce core principles
- Reference specific data files by name
- Use consistent variable names

---

## Rollback Procedure

If deployed version has critical issues:

1. **Immediate:**
   - Open Custom GPT configuration
   - Paste previous stable version
   - Save immediately

2. **Notify Team:**
   - Alert sales team of rollback
   - Communicate known issues
   - Provide timeline for fix

3. **Debug:**
   - Identify root cause in new version
   - Test fix in isolated environment
   - Re-deploy when validated

---

## Changelog

Track all prompt changes in CHANGELOG.md at repository root.

**Format:**
```markdown
## [Version] - YYYY-MM-DD

### Prompt Updates (v0.X → v0.Y)
- Added: [new features]
- Changed: [modifications to existing]
- Fixed: [bug fixes or corrections]
- Removed: [deprecated features]
```

---

## Contributing

### Prompt Improvement Suggestions

**From Sales Team:**
- Submit via feedback form or Slack
- Describe what's confusing or inaccurate
- Provide example scenarios

**From Testing:**
- Document recurring errors
- Identify patterns in failures
- Suggest specific wording improvements

**From Customers:**
- Collect feedback on quote clarity
- Note questions customers frequently ask
- Identify confusing sections

### Review Process

1. Collect suggestions
2. Evaluate impact and priority
3. Draft prompt changes
4. Internal testing
5. Pilot with select users
6. Full deployment
7. Monitor and iterate

---

## Related Documentation

- `docs/01-system-prompt.md` - Master reference copy (same content as current version)
- `docs/02-setup-guide.md` - Deployment instructions
- `docs/05-field-guide.md` - Sales team usage guide
- `CHANGELOG.md` - Version history

---

## Future Versions (Planned)

### v0.2 (Post Phase 1 Testing)
**Target:** February 2026
**Focus:** Refinements based on 3-week validation

**Planned Improvements:**
- Adjusted measurement formulas (if systematic bias found)
- Improved edge case handling
- Enhanced confidence scoring
- Clearer error messages

### v0.3 (Phase 2)
**Target:** March-April 2026
**Focus:** CRM integration preparation

**Planned Improvements:**
- Structured data output for CRM import
- Batch quote generation support
- Enhanced product recommendation logic

### v1.0 (Phase 3 - Platform)
**Target:** June-July 2026
**Focus:** Standalone platform integration

**Planned Changes:**
- API-friendly output formats
- Real-time data integration
- Advanced computer vision instructions
- Multi-user support

---

**Document Owner:** Project Lead / AI Engineer
**Last Updated:** 2026-01-03
**Questions?** Contact [Technical Team]
