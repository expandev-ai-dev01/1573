/**
 * @summary
 * Retrieves complete restaurant information including branding and about section
 *
 * @procedure spRestaurantInfoGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/restaurant-info
 *
 * @returns Restaurant information with all branding details
 *
 * @testScenarios
 * - Valid retrieval of restaurant information
 * - Handling of missing data gracefully
 */
CREATE OR ALTER PROCEDURE [functional].[spRestaurantInfoGet]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {RestaurantInfo, 1, n}
   * @column {INT} idRestaurantInfo - Restaurant info identifier
   * @column {NVARCHAR} name - Restaurant name
   * @column {NVARCHAR} slogan - Restaurant slogan
   * @column {NVARCHAR} logoUrl - Logo image URL
   * @column {NVARCHAR} bannerImageUrl - Banner image URL
   * @column {NVARCHAR} aboutText - About section text
   * @column {NVARCHAR} aboutImageUrl - About section image URL
   */
  SELECT
    [resInf].[idRestaurantInfo],
    [resInf].[name],
    [resInf].[slogan],
    [resInf].[logoUrl],
    [resInf].[bannerImageUrl],
    [resInf].[aboutText],
    [resInf].[aboutImageUrl]
  FROM [config].[restaurantInfo] [resInf];
END;
GO