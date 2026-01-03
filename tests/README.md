# Testing Framework

## Structure

- `test_cases/` - Sample roof photos and expected results
- Test scripts will validate system accuracy

---

## Testing Phases

See `docs/03-testing-protocol.md` for complete framework.

### Phase 1: Baseline Accuracy
Historical job validation

**Goals:**
- <10% average measurement error
- ±8% pricing accuracy
- Identify systematic errors

### Phase 2: Cost Validation
Quote accuracy vs actual invoices

**Goals:**
- Validate material costs
- Validate labor calculations
- Validate ROI analysis

### Phase 3: Field Testing
Real customer properties

**Goals:**
- 80%+ sales team adoption
- <10 minutes per quote
- Professional output quality

### Phase 4: Edge Cases
Failure mode identification

**Goals:**
- Document limitations
- Test boundary conditions
- Improve error handling

---

## Test Case Structure

### test_cases/ Directory (Planned)

```
test_cases/
├── simple_gable/
│   ├── overhead.jpg
│   ├── side_view.jpg
│   ├── expected_results.json
│   └── notes.md
├── moderate_hip_roof/
│   ├── aerial.jpg
│   ├── expected_results.json
│   └── notes.md
├── complex_multi_dormer/
│   ├── photos/
│   ├── expected_results.json
│   └── notes.md
└── README.md
```

### expected_results.json Format

```json
{
  "property": {
    "address": "123 Example St, Austin, TX 78703",
    "actual_sqft": 2485,
    "pitch": "6/12",
    "complexity": "Moderate"
  },
  "expected_estimate": {
    "sqft_range": [2350, 2550],
    "confidence": "High",
    "metal_cost_range": [24000, 28000],
    "arch_cost_range": [13000, 16000],
    "3tab_cost_range": [9000, 11000]
  },
  "actual_costs": {
    "metal": 26500,
    "arch": 14800,
    "3tab": 9850
  },
  "notes": "Standard residential upgrade, two valleys"
}
```

---

## Current Status

**Empty** - Test cases will be populated during Phase 1 validation.

---

## Test Execution (Planned)

### Manual Testing (Phase 1)

1. Gather test case materials
2. Run through iTCR Custom GPT
3. Record results
4. Compare to expected values
5. Calculate error percentages
6. Document findings

### Automated Testing (Phase 3+)

```python
# Example test script (future)
import pytest
from itcr_platform import Estimator

def test_simple_gable_estimate():
    estimator = Estimator()
    result = estimator.estimate(
        photos=['test_cases/simple_gable/overhead.jpg'],
        address='123 Example St'
    )

    assert 2350 <= result.sqft <= 2550
    assert result.confidence == 'High'
    assert 24000 <= result.metal_cost <= 28000
```

---

## Test Categories

### Functionality Tests
- Quote generation completes successfully
- All product options provided
- ROI calculations present
- Output formatting correct

### Accuracy Tests
- Measurement within acceptable error
- Pricing within acceptable error
- Confidence scores calibrated
- Edge case handling

### Performance Tests
- Quote generation time <10 minutes (Phase 1)
- Quote generation time <3 seconds (Phase 3 platform)
- Handles multiple concurrent users (Phase 3)

### Usability Tests
- Sales team can use without training
- Output is customer-comprehensible
- Error messages are clear
- Recovery from failures is smooth

---

## Success Criteria

### Phase 1 (Week 1-4)
- 10 historical jobs tested
- <10% avg measurement error
- ±8% avg pricing error
- Documentation of all failures

### Phase 2 (Month 2-3)
- 20+ live field tests
- 80%+ sales team adoption
- Customer satisfaction >70%

### Phase 3 (Month 4-6)
- Automated test suite
- 100+ test cases
- CI/CD pipeline integration

---

## Reporting

### Test Report Format

```markdown
# Test Report: [Test Set Name]

## Summary
- Date: YYYY-MM-DD
- Tester: Name
- Test cases: X
- Success rate: X%

## Results

### Measurement Accuracy
- Average error: X.X%
- Range: X.X% to X.X%
- Cases outside threshold: X

### Pricing Accuracy
- Average error: X.X%
- Range: X.X% to X.X%
- Cases outside threshold: X

### Issues Identified
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

---

## Future Development

### Phase 2
- Build test case library (20+ cases)
- Develop testing templates
- Create validation scripts

### Phase 3
- Automated test suite (pytest)
- Continuous integration
- Regression testing
- Load testing

### Phase 4
- A/B testing framework
- Performance benchmarking
- Security testing
- Penetration testing

---

**Directory Owner:** QA Team / Testing Lead
**Last Updated:** 2026-01-03
**Related Documentation:** `docs/03-testing-protocol.md`
