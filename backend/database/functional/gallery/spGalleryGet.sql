/**
 * @summary
 * Retrieves gallery photos with optional category filtering
 *
 * @procedure spGalleryGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/gallery
 *
 * @parameters
 * @param {NVARCHAR(50)} category
 *   - Required: No
 *   - Description: Optional category filter
 *
 * @returns Gallery photos ordered by display order
 *
 * @testScenarios
 * - Valid retrieval of all gallery photos
 * - Valid retrieval filtered by category
 * - Photos ordered by display order
 * - Only active photos returned
 */
CREATE OR ALTER PROCEDURE [functional].[spGalleryGet]
  @category NVARCHAR(50) = NULL
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {GalleryPhotos, n, n}
   * @column {INT} idGalleryPhoto - Photo identifier
   * @column {NVARCHAR} title - Photo title
   * @column {NVARCHAR} description - Photo description
   * @column {NVARCHAR} imageUrl - Full image URL
   * @column {NVARCHAR} thumbnailUrl - Thumbnail image URL
   * @column {NVARCHAR} category - Photo category
   * @column {INT} displayOrder - Display order
   */
  SELECT
    [galPht].[idGalleryPhoto],
    [galPht].[title],
    [galPht].[description],
    [galPht].[imageUrl],
    [galPht].[thumbnailUrl],
    [galPht].[category],
    [galPht].[displayOrder]
  FROM [functional].[galleryPhoto] [galPht]
  WHERE [galPht].[deleted] = 0
    AND ((@category IS NULL) OR ([galPht].[category] = @category))
  ORDER BY [galPht].[displayOrder];
END;
GO