/**
 * @summary
 * Retrieves complete contact information including phone, email, WhatsApp and social media
 *
 * @procedure spContactInfoGet
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - GET /api/v1/external/contact-info
 *
 * @returns Contact information with social media links
 *
 * @testScenarios
 * - Valid retrieval of contact information
 * - Social media links ordered by display order
 */
CREATE OR ALTER PROCEDURE [functional].[spContactInfoGet]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {ContactInfo, 1, n}
   * @column {INT} idContactInfo - Contact info identifier
   * @column {VARCHAR} phone - Phone number
   * @column {VARCHAR} email - Email address
   * @column {VARCHAR} whatsapp - WhatsApp number
   */
  SELECT
    [cntInf].[idContactInfo],
    [cntInf].[phone],
    [cntInf].[email],
    [cntInf].[whatsapp]
  FROM [config].[contactInfo] [cntInf];

  /**
   * @output {SocialMedia, n, n}
   * @column {INT} idSocialMedia - Social media identifier
   * @column {NVARCHAR} platform - Platform name
   * @column {NVARCHAR} url - Social media URL
   * @column {VARCHAR} iconName - Icon identifier
   * @column {INT} displayOrder - Display order
   */
  SELECT
    [socMed].[idSocialMedia],
    [socMed].[platform],
    [socMed].[url],
    [socMed].[iconName],
    [socMed].[displayOrder]
  FROM [config].[socialMedia] [socMed]
  ORDER BY [socMed].[displayOrder];
END;
GO