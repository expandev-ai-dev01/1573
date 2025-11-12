import { dbRequest, ExpectedReturn, IRecordSet } from '@/utils/database';
import {
  WeeklyHours,
  SpecialHours,
  OperatingHoursResponse,
} from '@/services/operatingHours/operatingHoursTypes';

/**
 * @summary
 * Retrieves operating hours including weekly schedule and special dates
 *
 * @function operatingHoursGet
 * @module operatingHours
 *
 * @returns {Promise<OperatingHoursResponse>} Operating hours with weekly and special schedules
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function operatingHoursGet(): Promise<OperatingHoursResponse> {
  const results = (await dbRequest(
    '[functional].[spOperatingHoursGet]',
    {},
    ExpectedReturn.Multi
  )) as IRecordSet<any>[];

  const weeklyHours: WeeklyHours[] = results[0];
  const specialHours: SpecialHours[] = results[1];

  return {
    weeklyHours,
    specialHours,
  };
}
