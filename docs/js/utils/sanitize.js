// sanitize.js — Remove PII from user-provided text
// Prevents accidental inclusion of customer contact info in quotes

/**
 * PII detection patterns
 * Matches: emails, phone numbers (multiple formats), street addresses
 */
const PII_PATTERNS = {
  email: {
    pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
    replacement: '[EMAIL REDACTED]'
  },
  phone: {
    pattern: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
    replacement: '[PHONE REDACTED]'
  },
  address: {
    pattern: /\b\d+\s+[A-Za-z]+\s+(Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd|Court|Ct|Circle|Cir)\b/gi,
    replacement: '[ADDRESS REDACTED]'
  }
};

/**
 * Sanitize text by removing PII patterns
 * @param {string} text - Text to sanitize
 * @returns {string} Sanitized text with PII replaced by [REDACTED] markers
 */
export function sanitizePII(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let sanitized = text;
  let hadPII = false;

  for (const [type, config] of Object.entries(PII_PATTERNS)) {
    if (config.pattern.test(sanitized)) {
      hadPII = true;
      sanitized = sanitized.replace(config.pattern, config.replacement);
    }
  }

  // Log if PII was detected (for audit purposes)
  if (hadPII) {
    console.warn('PII detected and redacted from notes field');
  }

  return sanitized;
}

/**
 * Check if text contains PII without modifying it
 * @param {string} text - Text to check
 * @returns {boolean} True if PII patterns detected
 */
export function containsPII(text) {
  if (!text || typeof text !== 'string') {
    return false;
  }

  for (const config of Object.values(PII_PATTERNS)) {
    if (config.pattern.test(text)) {
      return true;
    }
  }
  return false;
}
