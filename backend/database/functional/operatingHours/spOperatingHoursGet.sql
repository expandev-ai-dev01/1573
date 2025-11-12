/**
 * @summary
 * Retrieves operating hours including weekly schedule and special dates
 *
 * @procedure spOperatingHoursGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/operating-hours
 *
 * @returns Weekly operating hours and special dates schedule
 *
 * @testScenarios
 * - Valid retrieval of operating hours
 * - Special hours override regular hours
 * - Days ordered from Sunday to Saturday
 */
CREATE OR ALTER PROCEDURE [functional].[spOperatingHoursGet]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {WeeklyHours, n, n}
   * @column {INT} idOperatingHours - Operating hours identifier
   * @column {INT} dayOfWeek - Day of week (0=Sunday, 6=Saturday)
   * @column {TIME} openTime - Opening time
   * @column {TIME} closeTime - Closing time
   * @column {BIT} closed - Closed flag
   */
  SELECT
    [oprHrs].[idOperatingHours],
    [oprHrs].[dayOfWeek],
    [oprHrs].[openTime],
    [oprHrs].[closeTime],
    [oprHrs].[closed]
  FROM [config].[operatingHours] [oprHrs]
  ORDER BY [oprHrs].[dayOfWeek];

  /**
   * @output {SpecialHours, n, n}
   * @column {INT} idSpecialHours - Special hours identifier
   * @column {DATE} specialDate - Special date
   * @column {TIME} openTime - Opening time
   * @column {TIME} closeTime - Closing time
   * @column {BIT} closed - Closed flag
   * @column {NVARCHAR} description - Special date description
   */
  SELECT
    [spcHrs].[idSpecialHours],
    [spcHrs].[specialDate],
    [spcHrs].[openTime],
    [spcHrs].[closeTime],
    [spcHrs].[closed],
    [spcHrs].[description]
  FROM [config].[specialHours] [spcHrs]
  WHERE [spcHrs].[specialDate] >= CAST(GETUTCDATE() AS DATE)
  ORDER BY [spcHrs].[specialDate];
END;
GO