

## for the database

docker run --name reactive-sql -p 3306:3306 -e MYSQL_DATABASE=reactive -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql --default-authentication-plugin=mysql_native_password