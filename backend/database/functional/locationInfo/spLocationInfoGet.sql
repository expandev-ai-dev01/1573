/**
 * @summary
 * Retrieves complete location information including address, coordinates and additional details
 *
 * @procedure spLocationInfoGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/location-info
 *
 * @returns Location information with map coordinates
 *
 * @testScenarios
 * - Valid retrieval of location information
 * - Coordinates within valid range
 */
CREATE OR ALTER PROCEDURE [functional].[spLocationInfoGet]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {LocationInfo, 1, n}
   * @column {INT} idLocationInfo - Location info identifier
   * @column {NVARCHAR} address - Complete address
   * @column {NUMERIC} latitude - Latitude coordinate
   * @column {NUMERIC} longitude - Longitude coordinate
   * @column {INT} mapZoom - Map zoom level
   * @column {NVARCHAR} parkingInfo - Parking information
   * @column {NVARCHAR} transportInfo - Transport information
   */
  SELECT
    [locInf].[idLocationInfo],
    [locInf].[address],
    [locInf].[latitude],
    [locInf].[longitude],
    [locInf].[mapZoom],
    [locInf].[parkingInfo],
    [locInf].[transportInfo]
  FROM [config].[locationInfo] [locInf];
END;
GO