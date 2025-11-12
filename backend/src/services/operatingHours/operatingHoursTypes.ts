/**
 * @interface WeeklyHours
 * @description Weekly operating hours entity
 *
 * @property {number} idOperatingHours - Operating hours identifier
 * @property {number} dayOfWeek - Day of week (0=Sunday, 6=Saturday)
 * @property {string} openTime - Opening time
 * @property {string} closeTime - Closing time
 * @property {boolean} closed - Closed flag
 */
export interface WeeklyHours {
  idOperatingHours: number;
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  closed: boolean;
}

/**
 * @interface SpecialHours
 * @description Special operating hours entity
 *
 * @property {number} idSpecialHours - Special hours identifier
 * @property {string} specialDate - Special date
 * @property {string | null} openTime - Opening time
 * @property {string | null} closeTime - Closing time
 * @property {boolean} closed - Closed flag
 * @property {string | null} description - Special date description
 */
export interface SpecialHours {
  idSpecialHours: number;
  specialDate: string;
  openTime: string | null;
  closeTime: string | null;
  closed: boolean;
  description: string | null;
}

/**
 * @interface OperatingHoursResponse
 * @description Combined operating hours response
 *
 * @property {WeeklyHours[]} weeklyHours - Weekly operating hours
 * @property {SpecialHours[]} specialHours - Special dates schedule
 */
export interface OperatingHoursResponse {
  weeklyHours: WeeklyHours[];
  specialHours: SpecialHours[];
}
