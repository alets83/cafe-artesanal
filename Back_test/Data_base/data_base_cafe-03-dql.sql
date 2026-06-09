USE Cafe_artesanal;

SELECT * FROM Roles;
SELECT * FROM Users;
SELECT * FROM Posts;
SELECT * FROM Products;
SELECT * FROM Sales;
SELECT * FROM SaleDetails;

SELECT *FROM Users
	where role_id = 3; 

SELECT *FROM Products
	where category_id = 2; 

SELECT *FROM Products
	where category_id = 2; 

SELECT Users.id, name, user_id, title, content 
	FROM Users
	JOIN Posts
	WHERE users.id = user_id;
	
	
SELECT Users.id, name, sale_id, quantity, unit_price, sub_total
	FROM Users
	JOIN SaleDetails
	WHERE users.id = sale_id;