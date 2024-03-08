## Configuraciones para ejecutar proyecto
Install [NodeJS](https://dev.mysql.com/downloads/windows/installer/8.0.html), [MySQL](https://nodejs.org/en/download/) 

Install mysql2 (NodeJS dependency) 
```
npm install mysql2
```
Create local .env file to access local database

```
.env template
MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PASSWORD='root'
MYSQL_DATABASE='prueba'
```