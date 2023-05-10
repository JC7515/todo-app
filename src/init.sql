CREATE DATABASE mydb;
CREATE TABLE todosdb (
  id UUID primary KEY not null,
  completed  BOOLEAN,
  todotext VARCHAR(100)
);
