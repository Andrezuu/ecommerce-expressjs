## Configuraciones para ejecutar proyecto
Install [NodeJS](https://nodejs.org/en/download/), [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html) 

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

Run from terminal
```
npm start
```