CREATE TABLE laptops (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    processor VARCHAR(255),
    ram VARCHAR(100),
    storage VARCHAR(100),
    price DECIMAL(10, 2),
    image_url TEXT
);

INSERT INTO laptops (model, processor, ram, storage, price, image_url) VALUES
('Dell XPS 13', 'Intel Core i7-1165G7', '16GB', '512GB SSD', 1199.99, 'https://example.com/images/xps13.jpg'),
('MacBook Air M2', 'Apple M2', '8GB', '256GB SSD', 999.99, 'https://example.com/images/macbookair.jpg'),
('HP Spectre x360', 'Intel Core i5-1235U', '8GB', '512GB SSD', 1099.00, 'https://example.com/images/spectre.jpg'),
('Lenovo ThinkPad X1 Carbon', 'Intel Core i7-1260P', '16GB', '1TB SSD', 1499.00, 'https://example.com/images/thinkpad.jpg'),
('ASUS ROG Zephyrus G14', 'AMD Ryzen 9 6900HS', '32GB', '1TB SSD', 1799.99, 'https://example.com/images/zephyrus.jpg');