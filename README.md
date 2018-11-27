# code-server

# Sql
## 1: Login:
```mysql
  mysql -u root -p
```

## 2: Create user and grant permission

```mysql
  //1
  CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  //2
  GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
  //3
  FLUSH PRIVILEGES;
  //4 
  SHOW GRANTS FOR 'techonthenet';
```
