CREATE DATABASE mydb;
\c mydb;
CREATE TABLE todosdb (id UUID primary KEY, completed BOOLEAN, todotext VARCHAR(100));
INSERT INTO todosdb (id, completed, todotext) VALUES ('63f8f442-4a4f-4f58-a9f8-8da5e195aae7', true, 'TODO1');