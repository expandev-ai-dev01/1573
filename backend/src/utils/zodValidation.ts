import { z } from 'zod';

/**
 * @summary Common Zod validation schemas
 * @description Reusable validation schemas for common data types
 */

/**
 * @summary String validation with max length
 */
export const zString = z.string().min(1);

/**
 * @summary Nullable string with max length
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary Name field validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @summary Description field validation (max 500 characters)
 */
export const zDescription = z.string().max(500);

/**
 * @summary Nullable description field
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary Foreign key validation (positive integer)
 */
export const zFK = z.number().int().positive();

/**
 * @summary Nullable foreign key
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @summary Bit/Boolean validation (0 or 1)
 */
export const zBit = z.union([z.literal(0), z.literal(1)]);

/**
 * @summary Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @summary Email validation
 */
export const zEmail = z.string().email();

/**
 * @summary Nullable email validation
 */
export const zNullableEmail = z.string().email().nullable();

/**
 * @summary Phone number validation
 */
export const zPhone = z.string().min(10).max(20);

/**
 * @summary Nullable phone number
 */
export const zNullablePhone = z.string().min(10).max(20).nullable();

/**
 * @summary URL validation
 */
export const zUrl = z.string().url();

/**
 * @summary Nullable URL validation
 */
export const zNullableUrl = z.string().url().nullable();

/**
 * @summary Numeric validation with precision
 */
export const zNumeric = z.number();

/**
 * @summary Nullable numeric validation
 */
export const zNullableNumeric = z.number().nullable();

/**
 * @summary Price validation (18,6 precision)
 */
export const zPrice = z.number().nonnegative();

/**
 * @summary Nullable price validation
 */
export const zNullablePrice = z.number().nonnegative().nullable();
