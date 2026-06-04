USE cafe_artesanal;
DESCRIBE Roles;
INSERT INTO Roles VALUES
	(NULL, "ADMIM", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, "Seller", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, "Customer", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	
INSERT INTO Users VALUES
	-- (NULL, 1 , "Jefe almacen", "Juan Carlos Bodoque", "juancarlos@31minutos.com", "$2a$12$bdGMxXTxElWuzVzte8UtHuQtDq6j75QMQuf4Pn/7dUfVXio3aqrPO", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 1 , "Jefe Materiales", "Juan Bodoque", "juancarlos@32minutos.com", "$2a$12$M4QX/zidJcM1kHpUSEePq.ds38f15fRyzpmTnvPhpRPgQt.NO2XHi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 2 , "Vendedo Mañana", "Maria Bodoque", "Maria@333minutos.com", "$2a$12$mOjFpeA38H8YlGx0IMplpORmAauF41v5ubhfCgVJyrvX7jdSj1rSi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 2 , "Vendedo Tarde", "Juanito Bodoque", "Maria@33minutos.com", "$2a$12$fHJ6kTmXnv7c34wd6UQi4.tvmdRzcvEfKsz9IpN0E7VJSxcnfhUi2", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 2 , "Vendedo Noche", "Pablo Bodoque", "Pablo@34minutos.com", "$2a$12$UyjJpch7vvn99ffRao1VTebGs450dJRZvqSIsxUVxhIy8rlWmNFVi", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 3 , "abril8", "abril", "abril@34minutos.com", "$2a$12$u0JVwgplIYNBkYuRERT.DeV4QxLiDOs6VMrQr0K9IjCvibQWGP.yK", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 3 , "marzo8", "marzo", "marzo@34minutos.com", "$2a$12$kOgfOXu1Ekae3NscZs7C7uFnZy5vpPtQhFdgqEJC38CFi/tw8ptn6", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 3 , "julio8", "julio", "julio@34minutos.com", "$2a$12$kPDAG284Ur7YTM.IVpEGXOqUxruDGy2VQvOGJqbZ6Vfcjf5SDoG2q", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 3 , "Agosto8", "Agosto", "Agosto@34minutos.com", "$2a$12$.lLeg.nZT6zjsGBNYfEG2uUMUs2lF.XwIwDVqzAZv5r4aQIjUqCOO", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	(NULL, 3 , "Septiembre8", "Septiembre", "Septiembre@34minutos.com", "$2a$12$N08DVC3qAMzuz0iRvJ.hgO3PpxvHTmK0xXQAGc.v.IsSENbyzxH9G", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	
	
	
INSERT INTO Posts VALUES
	(NULL, 16 , "Cafe Recomendable", "Cafe muy Rico para pasar la noche",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES
	(NULL, 17 , "Cafe chafa", "cafe de oro",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Posts VALUES
	(NULL, 18 , " pasteles muy ricos", "pastel muy bueno de 3 leches. ",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	
INSERT INTO Products VALUES
	(NULL, "Cafe Americano" , "Beberage", "Cafe 250ml ", 35.45, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES
	(NULL, "Cafe latte" , "Beberage", "latte 250ml ", 40.45, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Products VALUES
	(NULL, "Pastel 3 leches" , "Postre", "Rebanada ", 45.45, JSON_OBJECT('image', '[]'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	
	
	
INSERT INTO Sales VALUES
	(NULL, 16 , 45.45, 1, 2, CURRENT_TIMESTAMP);
INSERT INTO Sales VALUES
	(NULL, 17 , 75.90, 2, 2, CURRENT_TIMESTAMP);

INSERT INTO SaleDetails VALUES
	(NULL, 1 , 1, 2, 45.45, 90.90, CURRENT_TIMESTAMP);
INSERT INTO SaleDetails VALUES
	(NULL, 2 , 1, 1, 35.45, 35.45, CURRENT_TIMESTAMP);
INSERT INTO SaleDetails VALUES
	(NULL, 2 , 2, 1, 45.45, 45.45, CURRENT_TIMESTAMP);



SELECT * FROM Roles;

SELECT * FROM Users;

SELECT * FROM Posts;

SELECT * FROM Products;

SELECT * FROM Sales;

SELECT * FROM SaleDetails;