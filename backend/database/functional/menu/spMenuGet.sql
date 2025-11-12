/**
 * @summary
 * Retrieves complete menu with categories and items including chef recommendations
 *
 * @procedure spMenuGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/menu
 *
 * @returns Menu categories with all items and chef recommendations
 *
 * @testScenarios
 * - Valid retrieval of menu structure
 * - Categories ordered by display order
 * - Items ordered by display order within categories
 * - Only active items returned
 * - Chef recommendations properly flagged
 */
CREATE OR ALTER PROCEDURE [functional].[spMenuGet]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {MenuCategories, n, n}
   * @column {INT} idMenuCategory - Category identifier
   * @column {NVARCHAR} name - Category name
   * @column {NVARCHAR} description - Category description
   * @column {INT} displayOrder - Display order
   */
  SELECT
    [mnuCat].[idMenuCategory],
    [mnuCat].[name],
    [mnuCat].[description],
    [mnuCat].[displayOrder]
  FROM [functional].[menuCategory] [mnuCat]
  WHERE [mnuCat].[deleted] = 0
  ORDER BY [mnuCat].[displayOrder];

  /**
   * @output {MenuItems, n, n}
   * @column {INT} idMenuItem - Item identifier
   * @column {INT} idMenuCategory - Category identifier
   * @column {NVARCHAR} name - Item name
   * @column {NVARCHAR} description - Item description
   * @column {NUMERIC} price - Item price
   * @column {NVARCHAR} imageUrl - Item image URL
   * @column {BIT} available - Availability flag
   * @column {BIT} chefRecommendation - Chef recommendation flag
   * @column {INT} displayOrder - Display order
   */
  SELECT
    [mnuItm].[idMenuItem],
    [mnuItm].[idMenuCategory],
    [mnuItm].[name],
    [mnuItm].[description],
    [mnuItm].[price],
    [mnuItm].[imageUrl],
    [mnuItm].[available],
    [mnuItm].[chefRecommendation],
    [mnuItm].[displayOrder]
  FROM [functional].[menuItem] [mnuItm]
    JOIN [functional].[menuCategory] [mnuCat] ON ([mnuCat].[idMenuCategory] = [mnuItm].[idMenuCategory])
  WHERE [mnuItm].[deleted] = 0
    AND [mnuCat].[deleted] = 0
  ORDER BY
    [mnuItm].[idMenuCategory],
    [mnuItm].[displayOrder];
END;
GO