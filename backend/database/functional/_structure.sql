/**
 * @schema functional
 * Functional schema - business logic and menu data
 */
CREATE SCHEMA [functional];
GO

/**
 * @table menuCategory Menu categories
 * @multitenancy false
 * @softDelete true
 * @alias mnuCat
 */
CREATE TABLE [functional].[menuCategory] (
  [idMenuCategory] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [description] NVARCHAR(500) NOT NULL DEFAULT '',
  [displayOrder] INTEGER NOT NULL DEFAULT 0,
  [deleted] BIT NOT NULL DEFAULT 0,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkMenuCategory
 * @keyType Object
 */
ALTER TABLE [functional].[menuCategory]
ADD CONSTRAINT [pkMenuCategory] PRIMARY KEY CLUSTERED ([idMenuCategory]);

/**
 * @index ixMenuCategory_DisplayOrder Display order for active categories
 * @type Performance
 * @filter Active categories only
 */
CREATE NONCLUSTERED INDEX [ixMenuCategory_DisplayOrder]
ON [functional].[menuCategory]([displayOrder])
WHERE [deleted] = 0;

/**
 * @index uqMenuCategory_Name Unique category name
 * @type Unique
 * @filter Active categories only
 */
CREATE UNIQUE NONCLUSTERED INDEX [uqMenuCategory_Name]
ON [functional].[menuCategory]([name])
WHERE [deleted] = 0;

/**
 * @table menuItem Menu items
 * @multitenancy false
 * @softDelete true
 * @alias mnuItm
 */
CREATE TABLE [functional].[menuItem] (
  [idMenuItem] INTEGER IDENTITY(1, 1) NOT NULL,
  [idMenuCategory] INTEGER NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [description] NVARCHAR(500) NOT NULL DEFAULT '',
  [price] NUMERIC(18, 6) NOT NULL,
  [imageUrl] NVARCHAR(500) NULL,
  [available] BIT NOT NULL DEFAULT 1,
  [chefRecommendation] BIT NOT NULL DEFAULT 0,
  [displayOrder] INTEGER NOT NULL DEFAULT 0,
  [deleted] BIT NOT NULL DEFAULT 0,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkMenuItem
 * @keyType Object
 */
ALTER TABLE [functional].[menuItem]
ADD CONSTRAINT [pkMenuItem] PRIMARY KEY CLUSTERED ([idMenuItem]);

/**
 * @foreignKey fkMenuItem_MenuCategory Menu category relationship
 * @target functional.menuCategory
 */
ALTER TABLE [functional].[menuItem]
ADD CONSTRAINT [fkMenuItem_MenuCategory] FOREIGN KEY ([idMenuCategory])
REFERENCES [functional].[menuCategory]([idMenuCategory]);

/**
 * @index ixMenuItem_Category Category lookup for active items
 * @type ForeignKey
 * @filter Active items only
 */
CREATE NONCLUSTERED INDEX [ixMenuItem_Category]
ON [functional].[menuItem]([idMenuCategory])
INCLUDE ([name], [price], [available], [chefRecommendation])
WHERE [deleted] = 0;

/**
 * @index ixMenuItem_ChefRecommendation Chef recommendations lookup
 * @type Search
 * @filter Active chef recommendations only
 */
CREATE NONCLUSTERED INDEX [ixMenuItem_ChefRecommendation]
ON [functional].[menuItem]([chefRecommendation])
INCLUDE ([idMenuCategory], [name], [price], [imageUrl])
WHERE [deleted] = 0 AND [chefRecommendation] = 1;

/**
 * @table galleryPhoto Gallery photos
 * @multitenancy false
 * @softDelete true
 * @alias galPht
 */
CREATE TABLE [functional].[galleryPhoto] (
  [idGalleryPhoto] INTEGER IDENTITY(1, 1) NOT NULL,
  [title] NVARCHAR(100) NOT NULL,
  [description] NVARCHAR(500) NOT NULL DEFAULT '',
  [imageUrl] NVARCHAR(500) NOT NULL,
  [thumbnailUrl] NVARCHAR(500) NOT NULL,
  [category] NVARCHAR(50) NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT 0,
  [deleted] BIT NOT NULL DEFAULT 0,
  [dateCreated] DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
  [dateModified] DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);

/**
 * @primaryKey pkGalleryPhoto
 * @keyType Object
 */
ALTER TABLE [functional].[galleryPhoto]
ADD CONSTRAINT [pkGalleryPhoto] PRIMARY KEY CLUSTERED ([idGalleryPhoto]);

/**
 * @index ixGalleryPhoto_Category Category filter for active photos
 * @type Search
 * @filter Active photos only
 */
CREATE NONCLUSTERED INDEX [ixGalleryPhoto_Category]
ON [functional].[galleryPhoto]([category])
INCLUDE ([displayOrder], [thumbnailUrl])
WHERE [deleted] = 0;

/**
 * @index ixGalleryPhoto_DisplayOrder Display order for active photos
 * @type Performance
 * @filter Active photos only
 */
CREATE NONCLUSTERED INDEX [ixGalleryPhoto_DisplayOrder]
ON [functional].[galleryPhoto]([displayOrder])
WHERE [deleted] = 0;
GO