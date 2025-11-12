/**
 * @load restaurantInfo
 */
INSERT INTO [config].[restaurantInfo]
([name], [slogan], [logoUrl], [bannerImageUrl], [aboutText])
VALUES
('Restaurante Japonês', 'Tradição e Sabor Autêntico', '/images/logo.png', '/images/banner.jpg', 'Há mais de 20 anos trazendo o melhor da culinária japonesa para você. Nossa tradição é servir pratos autênticos preparados com ingredientes frescos e de alta qualidade.');

/**
 * @load contactInfo
 */
INSERT INTO [config].[contactInfo]
([phone], [email], [whatsapp])
VALUES
('(11) 98765-4321', 'contato@restaurantejapones.com.br', '(11) 98765-4321');

/**
 * @load locationInfo
 */
INSERT INTO [config].[locationInfo]
([address], [latitude], [longitude], [mapZoom], [parkingInfo], [transportInfo])
VALUES
('Rua das Flores, 123 - Centro, São Paulo - SP, 01234-567', -23.5505199, -46.6333094, 16, 'Estacionamento conveniado disponível', 'Próximo ao metrô República');

/**
 * @load operatingHours
 */
INSERT INTO [config].[operatingHours]
([dayOfWeek], [openTime], [closeTime], [closed])
VALUES
(0, '12:00', '22:00', 0),
(1, '00:00', '00:00', 1),
(2, '11:30', '15:00', 0),
(3, '11:30', '15:00', 0),
(4, '11:30', '15:00', 0),
(5, '11:30', '23:00', 0),
(6, '12:00', '23:00', 0);

/**
 * @load socialMedia
 */
INSERT INTO [config].[socialMedia]
([platform], [url], [iconName], [displayOrder])
VALUES
('Instagram', 'https://instagram.com/restaurantejapones', 'instagram', 1),
('Facebook', 'https://facebook.com/restaurantejapones', 'facebook', 2),
('Twitter', 'https://twitter.com/restaurantejapones', 'twitter', 3);
GO