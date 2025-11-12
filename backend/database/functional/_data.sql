/**
 * @load menuCategory
 */
INSERT INTO [functional].[menuCategory]
([name], [description], [displayOrder])
VALUES
('Entradas', 'Deliciosas entradas para começar sua refeição', 1),
('Pratos Principais', 'Nossos pratos principais tradicionais', 2),
('Sobremesas', 'Sobremesas especiais para finalizar', 3),
('Bebidas', 'Bebidas tradicionais e especiais', 4);

/**
 * @load menuItem
 */
INSERT INTO [functional].[menuItem]
([idMenuCategory], [name], [description], [price], [imageUrl], [available], [chefRecommendation], [displayOrder])
VALUES
(1, 'Gyoza', 'Deliciosos pastéis japoneses fritos recheados com carne suína e vegetais', 18.90, '/images/menu/gyoza.jpg', 1, 0, 1),
(1, 'Harumaki', 'Rolinho primavera crocante com recheio de legumes', 16.50, '/images/menu/harumaki.jpg', 1, 0, 2),
(1, 'Edamame', 'Vagens de soja cozidas no vapor e levemente salgadas', 14.90, '/images/menu/edamame.jpg', 1, 0, 3),
(1, 'Sunomono', 'Salada de pepino japonês com molho agridoce', 12.90, '/images/menu/sunomono.jpg', 1, 0, 4),
(1, 'Temaki de Salmão', 'Cone de alga nori recheado com arroz, salmão e vegetais', 22.90, '/images/menu/temaki-salmao.jpg', 1, 1, 5),
(2, 'Sushi Combinado', 'Seleção especial de 12 peças de sushi variados', 68.90, '/images/menu/sushi-combinado.jpg', 1, 1, 1),
(2, 'Sashimi Misto', 'Fatias frescas de peixe cru - salmão, atum e peixe branco', 78.90, '/images/menu/sashimi-misto.jpg', 1, 1, 2),
(2, 'Yakisoba', 'Macarrão frito com legumes e carne à sua escolha', 42.90, '/images/menu/yakisoba.jpg', 1, 0, 3),
(2, 'Tempurá Misto', 'Camarões e legumes empanados em massa leve e crocante', 54.90, '/images/menu/tempura.jpg', 1, 0, 4),
(2, 'Teriyaki de Salmão', 'Filé de salmão grelhado com molho teriyaki', 62.90, '/images/menu/teriyaki-salmao.jpg', 1, 0, 5),
(3, 'Mochi', 'Bolinho de arroz macio com recheio de pasta de feijão doce', 16.90, '/images/menu/mochi.jpg', 1, 0, 1),
(3, 'Dorayaki', 'Panqueca japonesa recheada com pasta de feijão azuki', 14.90, '/images/menu/dorayaki.jpg', 1, 0, 2),
(3, 'Sorvete de Chá Verde', 'Sorvete cremoso com sabor autêntico de matcha', 18.90, '/images/menu/sorvete-matcha.jpg', 1, 0, 3),
(3, 'Tempurá de Sorvete', 'Sorvete empanado e frito rapidamente', 22.90, '/images/menu/tempura-sorvete.jpg', 1, 1, 4),
(3, 'Frutas da Estação', 'Seleção de frutas frescas da estação', 19.90, '/images/menu/frutas.jpg', 1, 0, 5),
(4, 'Saquê Tradicional', 'Saquê japonês servido quente ou frio', 38.90, '/images/menu/sake.jpg', 1, 0, 1),
(4, 'Chá Verde', 'Chá verde japonês tradicional', 8.90, '/images/menu/cha-verde.jpg', 1, 0, 2),
(4, 'Refrigerante', 'Refrigerantes variados', 6.90, '/images/menu/refrigerante.jpg', 1, 0, 3),
(4, 'Suco Natural', 'Sucos naturais de frutas frescas', 12.90, '/images/menu/suco.jpg', 1, 0, 4),
(4, 'Água Mineral', 'Água mineral com ou sem gás', 5.90, '/images/menu/agua.jpg', 1, 0, 5);

/**
 * @load galleryPhoto
 */
INSERT INTO [functional].[galleryPhoto]
([title], [description], [imageUrl], [thumbnailUrl], [category], [displayOrder])
VALUES
('Ambiente Principal', 'Nosso salão principal com decoração tradicional', '/images/gallery/ambiente-1.jpg', '/images/gallery/thumb/ambiente-1.jpg', 'Ambiente', 1),
('Área VIP', 'Espaço reservado para grupos e eventos especiais', '/images/gallery/ambiente-2.jpg', '/images/gallery/thumb/ambiente-2.jpg', 'Ambiente', 2),
('Bar de Sushi', 'Acompanhe a preparação dos pratos no nosso bar', '/images/gallery/ambiente-3.jpg', '/images/gallery/thumb/ambiente-3.jpg', 'Ambiente', 3),
('Sushi Especial', 'Combinado especial do chef', '/images/gallery/prato-1.jpg', '/images/gallery/thumb/prato-1.jpg', 'Pratos', 4),
('Sashimi Premium', 'Seleção premium de peixes frescos', '/images/gallery/prato-2.jpg', '/images/gallery/thumb/prato-2.jpg', 'Pratos', 5),
('Tempurá Artesanal', 'Tempurá preparado na hora', '/images/gallery/prato-3.jpg', '/images/gallery/thumb/prato-3.jpg', 'Pratos', 6),
('Evento Corporativo', 'Espaço ideal para eventos empresariais', '/images/gallery/evento-1.jpg', '/images/gallery/thumb/evento-1.jpg', 'Eventos', 7),
('Celebração Especial', 'Comemorações e datas especiais', '/images/gallery/evento-2.jpg', '/images/gallery/thumb/evento-2.jpg', 'Eventos', 8);
GO