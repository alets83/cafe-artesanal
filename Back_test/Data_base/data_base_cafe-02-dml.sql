USE cafe_artesanal;
DESCRIBE Roles;

INSERT INTO Roles VALUES
	(NULL, "ADMIM", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, "Seller", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, "Customer", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO Users VALUES
	(NULL, 1 , "Jefe almacen", "Juan Carlos Bodoque", "juancarlos@31minutos.com", "$2a$12$bdGMxXTxElWuzVzte8UtHuQtDq6j75QMQuf4Pn/7dUfVXio3aqrPO", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 1 , "Jefe Materiales", "Juan Bodoque", "juancarlos@32minutos.com", "$2a$12$M4QX/zidJcM1kHpUSEePq.ds38f15fRyzpmTnvPhpRPgQt.NO2XHi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 2 , "Vendedo Mañana", "Maria Bodoque", "Maria@333minutos.com", "$2a$12$mOjFpeA38H8YlGx0IMplpORmAauF41v5ubhfCgVJyrvX7jdSj1rSi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 2 , "Vendedo Tarde", "Juanito Bodoque", "Maria@33minutos.com", "$2a$12$fHJ6kTmXnv7c34wd6UQi4.tvmdRzcvEfKsz9IpN0E7VJSxcnfhUi2", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 2 , "Vendedo Noche", "Pablo Bodoque", "Pablo@34minutos.com", "$2a$12$UyjJpch7vvn99ffRao1VTebGs450dJRZvqSIsxUVxhIy8rlWmNFVi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 3 , "abril8", "abril", "abril@34minutos.com", "$2a$12$u0JVwgplIYNBkYuRERT.DeV4QxLiDOs6VMrQr0K9IjCvibQWGP.yK", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 3 , "marzo8", "marzo", "marzo@34minutos.com", "$2a$12$kOgfOXu1Ekae3NscZs7C7uFnZy5vpPtQhFdgqEJC38CFi/tw8ptn6", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 3 , "julio8", "julio", "julio@34minutos.com", "$2a$12$kPDAG284Ur7YTM.IVpEGXOqUxruDGy2VQvOGJqbZ6Vfcjf5SDoG2q", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 3 , "Agosto8", "Agosto", "Agosto@34minutos.com", "$2a$12$.lLeg.nZT6zjsGBNYfEG2uUMUs2lF.XwIwDVqzAZv5r4aQIjUqCOO", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Users VALUES
	(NULL, 3 , "Septiembre8", "Septiembre", "Septiembre@34minutos.com", "$2a$12$N08DVC3qAMzuz0iRvJ.hgO3PpxvHTmK0xXQAGc.v.IsSENbyzxH9G", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO Posts VALUES 
	(NULL, 1, "Excelente café latte", "El mejor café latte que he probado. Suave, bien balanceado y a la temperatura perfecta.", '2025-03-10 10:30:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 2, "Pastel de chocolate increíble", "Muy húmedo y con un sabor intenso a chocolate. La cobertura no es empalagosa.", '2025-03-12 15:45:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 3, "Jugo verde refrescante", "Perfecto después del ejercicio. Se nota que usan ingredientes frescos.", '2025-03-14 09:15:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 4, "Capuchino con mucha espuma", "Me encantó la espuma, pero el café estaba un poco amargo para mi gusto.", '2025-03-11 11:20:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 5, "Cheesecake de fresa delicioso", "La fresa natural le da un toque fresco. La base crujiente perfecta.", '2025-03-13 17:00:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 6, "Jugo de naranja muy natural", "Realmente recién exprimido. Sin azúcar añadido, tal como me gusta.", '2025-03-15 08:30:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 7, "Caramel Macchiato espectacular", "Dulce en su punto justo. El toque de caramelo combina muy bien con el espresso.", '2025-03-09 16:10:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 8, "Tarta de limón muy ácida", "El sabor a limón era demasiado fuerte para mí, pero el merengue estaba bien hecho.", '2025-03-14 12:45:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 1, "Combinación de jugos", "Pedí el jugo de piña con menta y me sorprendió gratamente. Muy refrescante.", '2025-03-12 14:20:00', CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES 
	(NULL, 1, "Buena atención y calidad", "Probé el café latte y el pastel de chocolate. Ambos excelentes. Volveré.", '2025-03-16 10:05:00', CURRENT_TIMESTAMP);


INSERT INTO Category VALUES
	(NULL, "Bebida" , CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);	
INSERT INTO Category VALUES
	(NULL, "Alimentos" , CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	

INSERT INTO Products VALUES 
	(NULL, "Café Latte", 1, "Suave espresso con leche vaporizada y una pequeña capa de espuma. Perfecto para comenzar el día.", 45.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Pastel de Chocolate", 2, "Delicioso bizcocho de chocolate oscuro con cobertura cremosa y chispas de cacao.", 55.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Jugo Verde", 1, "Mezcla refrescante de espinaca, manzana verde, apio, pepino y un toque de limón.", 40.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Capuchino", 1, "Café espresso con partes iguales de leche vaporizada y espuma de leche. Espolvoreado con canela.", 45.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Cheesecake de Fresa", 2, "Base crujiente de galleta, queso crema suave y salsa natural de fresa encima.", 50.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Jugo de Naranja", 1, "Recién exprimido, natural y sin azúcares añadidos. Ideal para un desayuno saludable.", 35.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Caramel Macchiato", 1, "Café vainilla con leche al vapor, espresso y un toque de caramelo. Dulce y suave.", 50.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Tarta de Limón", 2, "Masa quebrada con relleno cremoso de limón y merengue tostado en la superficie.", 48.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES (NULL, "Juego de Piña y Menta", 1, "Jugo tropical con piña fresca, hierbabuena y un poco de hielo triturado.", 42.00, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO Sales VALUES
	(NULL, 2 , 45.45, 1, 2, CURRENT_TIMESTAMP);
INSERT INTO Sales VALUES
	(NULL, 4 , 75.90, 2, 2, CURRENT_TIMESTAMP);


INSERT INTO SaleDetails VALUES
	(NULL, 1 , 1, 2, 45.45, 90.90, CURRENT_TIMESTAMP);
INSERT INTO SaleDetails VALUES
	(NULL, 2 , 1, 1, 35.45, 35.45, CURRENT_TIMESTAMP);
INSERT INTO SaleDetails VALUES
	(NULL, 2 , 2, 1, 45.45, 45.45, CURRENT_TIMESTAMP);