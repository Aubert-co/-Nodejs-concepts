CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  price DECIMAL(10, 2) NOT NULL,
  img_path VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(50),
  quantity INTEGER NOT NULL
);