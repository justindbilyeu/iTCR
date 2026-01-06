// dates.js — Deterministic date utilities for quote validity stamping
// No external dependencies; validates all inputs

/**
 * Add business days (Mon-Fri) to a date, skipping weekends
 * @param {Date} startDate - Starting date
 * @param {number} businessDays - Number of business days to add
 * @returns {Date} New date with business days added
 * @throws {Error} If inputs are invalid
 */
export function addBusinessDays(startDate, businessDays) {
  // Input validation
  if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
    throw new Error('addBusinessDays: startDate must be a valid Date object');
  }
  if (!Number.isInteger(businessDays) || businessDays < 0) {
    throw new Error('addBusinessDays: businessDays must be a non-negative integer');
  }

  const d = new Date(startDate);
  let added = 0;
  const maxIterations = businessDays * 3; // Safety: worst case is all weekends
  let iterations = 0;

  while (added < businessDays) {
    if (iterations++ > maxIterations) {
      throw new Error('addBusinessDays: exceeded maximum iterations (possible infinite loop)');
    }
    d.setDate(d.getDate() + 1);
    const day = d.getDay(); // 0=Sunday, 6=Saturday
    if (day !== 0 && day !== 6) {
      added += 1;
    }
  }
  return d;
}

/**
 * Convert Date to ISO 8601 string with timezone offset
 * @param {Date} date - Date to convert
 * @returns {string} ISO 8601 formatted string (e.g., "2026-01-03T14:22:35-06:00")
 * @throws {Error} If date is invalid
 */
export function toISOWithTZ(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('toISOWithTZ: date must be a valid Date object');
  }

  const pad = (n) => String(n).padStart(2, '0');
  const tz = -date.getTimezoneOffset();
  const sign = tz >= 0 ? '+' : '-';
  const hh = pad(Math.floor(Math.abs(tz) / 60));
  const mm = pad(Math.abs(tz) % 60);

  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` +
    `${sign}${hh}:${mm}`
  );
}

/**
 * Generate quote validity metadata for current timestamp
 * @returns {Object} Validity metadata object
 */
export function generateValidityMetadata() {
  const createdAt = new Date();
  const validUntil = addBusinessDays(createdAt, 7);

  return {
    created_at: toISOWithTZ(createdAt),
    valid_until: toISOWithTZ(validUntil),
    validity_business_days: 7,
    quote_disclaimer_version: 'policies.v1'
  };
}
