### IQUADART TEST PROJECT
#### online files store
*****

Stack: Laravel 9.4, Vue 3, Inertia js, Vite

*****

### Requirements: 
1. PHP 8.1+
2. composer 2.x+
3. MySQL 8.0
4. node 16+
5. npm 8+
6. Mailhog
7. Redis (optional)
8. Docker & docker-compose (optional)

******

### How to setup

```bash
git clone https://github.com/m1n64/onlinestore-iquadart-test.git
```
```bash
cd onlinestore-iquadart-test/
```
```bash
#create database with name `onlinestore`
mysql -u root -p -e "CREATE DATABASE onlinestore"
```

```
if you'r mysql password not a default, 
in .env file add your password in line 
DB_PASSWORD=
```

```
(optional) if you use redis, change in .env file this lines from:

CACHE_DRIVER=file
SESSION_DRIVER=file

to

CACHE_DRIVER=redis
SESSION_DRIVER=redis
```

```bash
composer install
```

```bash
php artisan key:generate
```

```bash
php artisan storage:link
```

```bash
php artisan migrate
```

```bash
npm install
```

```bash
#(optional) for creating admin user:
php artisan admin:create
```

```bash
php artisan serve
```

Now, open in browser link [http://127.0.0.1:8000](http://127.0.0.1:8000)

******
