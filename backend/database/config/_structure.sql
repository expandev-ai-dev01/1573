/**
 * @schema config
 * Configuration schema - system-wide settings and reference data
 */
CREATE SCHEMA [config];
GO

/**
 * @table restaurantInfo Basic restaurant information and branding
 * @multitenancy false
 * @softDelete false
 * @alias resInf
 */
CREATE TABLE [config].[restaurantInfo] (
  [idRestaurantInfo] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(50) NOT NULL,
  [slogan] NVARCHAR(100) NULL,
  [logoUrl] NVARCHAR(500) NOT NULL,
  [bannerImageUrl] NVARCHAR(500) NOT NULL,
  [aboutText] NVARCHAR(1000) NOT NULL,
  [aboutImageUrl] NVARCHAR(500) NULL,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkRestaurantInfo
 * @keyType Object
 */
ALTER TABLE [config].[restaurantInfo]
ADD CONSTRAINT [pkRestaurantInfo] PRIMARY KEY CLUSTERED ([idRestaurantInfo]);

/**
 * @table contactInfo Restaurant contact information
 * @multitenancy false
 * @softDelete false
 * @alias cntInf
 */
CREATE TABLE [config].[contactInfo] (
  [idContactInfo] INTEGER IDENTITY(1, 1) NOT NULL,
  [phone] VARCHAR(20) NOT NULL,
  [email] VARCHAR(100) NOT NULL,
  [whatsapp] VARCHAR(20) NULL,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkContactInfo
 * @keyType Object
 */
ALTER TABLE [config].[contactInfo]
ADD CONSTRAINT [pkContactInfo] PRIMARY KEY CLUSTERED ([idContactInfo]);

/**
 * @table locationInfo Restaurant location and address details
 * @multitenancy false
 * @softDelete false
 * @alias locInf
 */
CREATE TABLE [config].[locationInfo] (
  [idLocationInfo] INTEGER IDENTITY(1, 1) NOT NULL,
  [address] NVARCHAR(200) NOT NULL,
  [latitude] NUMERIC(10, 7) NOT NULL,
  [longitude] NUMERIC(10, 7) NOT NULL,
  [mapZoom] INTEGER NOT NULL DEFAULT 16,
  [parkingInfo] NVARCHAR(150) NULL,
  [transportInfo] NVARCHAR(200) NULL,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkLocationInfo
 * @keyType Object
 */
ALTER TABLE [config].[locationInfo]
ADD CONSTRAINT [pkLocationInfo] PRIMARY KEY CLUSTERED ([idLocationInfo]);

/**
 * @check chkLocationInfo_MapZoom Validate map zoom level
 * @enum {14} Minimum zoom level
 * @enum {18} Maximum zoom level
 */
ALTER TABLE [config].[locationInfo]
ADD CONSTRAINT [chkLocationInfo_MapZoom] CHECK ([mapZoom] BETWEEN 14 AND 18);

/**
 * @table operatingHours Weekly operating hours
 * @multitenancy false
 * @softDelete false
 * @alias oprHrs
 */
CREATE TABLE [config].[operatingHours] (
  [idOperatingHours] INTEGER IDENTITY(1, 1) NOT NULL,
  [dayOfWeek] INTEGER NOT NULL,
  [openTime] TIME NOT NULL,
  [closeTime] TIME NOT NULL,
  [closed] BIT NOT NULL DEFAULT 0,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkOperatingHours
 * @keyType Object
 */
ALTER TABLE [config].[operatingHours]
ADD CONSTRAINT [pkOperatingHours] PRIMARY KEY CLUSTERED ([idOperatingHours]);

/**
 * @check chkOperatingHours_DayOfWeek Validate day of week
 * @enum {0} Sunday
 * @enum {1} Monday
 * @enum {2} Tuesday
 * @enum {3} Wednesday
 * @enum {4} Thursday
 * @enum {5} Friday
 * @enum {6} Saturday
 */
ALTER TABLE [config].[operatingHours]
ADD CONSTRAINT [chkOperatingHours_DayOfWeek] CHECK ([dayOfWeek] BETWEEN 0 AND 6);

/**
 * @index uqOperatingHours_DayOfWeek Unique day of week
 * @type Unique
 */
CREATE UNIQUE NONCLUSTERED INDEX [uqOperatingHours_DayOfWeek]
ON [config].[operatingHours]([dayOfWeek]);

/**
 * @table specialHours Special operating hours for holidays
 * @multitenancy false
 * @softDelete false
 * @alias spcHrs
 */
CREATE TABLE [config].[specialHours] (
  [idSpecialHours] INTEGER IDENTITY(1, 1) NOT NULL,
  [specialDate] DATE NOT NULL,
  [openTime] TIME NULL,
  [closeTime] TIME NULL,
  [closed] BIT NOT NULL DEFAULT 0,
  [description] NVARCHAR(200) NULL,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkSpecialHours
 * @keyType Object
 */
ALTER TABLE [config].[specialHours]
ADD CONSTRAINT [pkSpecialHours] PRIMARY KEY CLUSTERED ([idSpecialHours]);

/**
 * @index uqSpecialHours_SpecialDate Unique special date
 * @type Unique
 */
CREATE UNIQUE NONCLUSTERED INDEX [uqSpecialHours_SpecialDate]
ON [config].[specialHours]([specialDate]);

/**
 * @table socialMedia Social media links
 * @multitenancy false
 * @softDelete false
 * @alias socMed
 */
CREATE TABLE [config].[socialMedia] (
  [idSocialMedia] INTEGER IDENTITY(1, 1) NOT NULL,
  [platform] NVARCHAR(50) NOT NULL,
  [url] NVARCHAR(500) NOT NULL,
  [iconName] VARCHAR(50) NOT NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT 0,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkSocialMedia
 * @keyType Object
 */
ALTER TABLE [config].[socialMedia]
ADD CONSTRAINT [pkSocialMedia] PRIMARY KEY CLUSTERED ([idSocialMedia]);

/**
 * @index ixSocialMedia_DisplayOrder Display order index
 * @type Performance
 */
CREATE NONCLUSTERED INDEX [ixSocialMedia_DisplayOrder]
ON [config].[socialMedia]([displayOrder]);
GO