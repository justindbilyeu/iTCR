# Scripts Directory

## Purpose

Python tools for data analysis, validation, and automation.

---

## Planned Scripts

### Phase 1
- `accuracy_validator.py` - Compare AI estimates vs actual measurements
- `data_updater.py` - Refresh pricing from Texas Choice systems
- `image_preprocessor.py` - Enhance/standardize roof photos

### Phase 2
- `roi_calculator.py` - Standalone ROI analysis tool
- `report_generator.py` - Batch quote generation
- `crm_sync.py` - Integration with CRM systems

### Phase 3
- `api_client.py` - Client library for iTCR platform API
- `batch_processor.py` - Process multiple quotes at once
- `analytics_dashboard.py` - Data visualization and reporting

---

## Current Status

**Empty** - Scripts will be developed during testing and refinement phases.

---

## Requirements

When scripts are added, create `requirements.txt` with dependencies:

```
pandas>=2.0.0
numpy>=1.24.0
Pillow>=10.0.0
requests>=2.31.0
python-dotenv>=1.0.0
```

---

## Development Guidelines

### Script Structure

```python
#!/usr/bin/env python3
"""
Script Name: script_name.py
Purpose: Brief description
Author: Name
Date: YYYY-MM-DD
"""

import argparse
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='Script description')
    # Add arguments
    args = parser.parse_args()

    # Script logic here

if __name__ == '__main__':
    main()
```

### Best Practices

- Use argparse for command-line arguments
- Implement logging (not print statements)
- Handle errors gracefully
- Include docstrings
- Follow PEP 8 style guide
- Add unit tests

---

## Usage Examples

### Accuracy Validator (Planned)

```bash
python scripts/accuracy_validator.py \
    --estimates data/reference_measurements.csv \
    --actuals data/actual_measurements.csv \
    --output reports/accuracy_report.pdf
```

### Data Updater (Planned)

```bash
python scripts/data_updater.py \
    --source texas_choice_pricing.xlsx \
    --output data/products/ \
    --backup
```

### Image Preprocessor (Planned)

```bash
python scripts/image_preprocessor.py \
    --input photos/ \
    --output processed/ \
    --resize 1920x1080 \
    --enhance
```

---

## Future Development

As iTCR evolves, scripts will be added to automate:
- Data quality checks
- Pricing updates
- Quote accuracy validation
- Report generation
- Integration testing

Check ROADMAP.md for development timeline.

---

**Directory Owner:** Development Team
**Last Updated:** 2026-01-03
