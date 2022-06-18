# Laravel + VueJS + Sanctum

This project has the basic settings to use Laravel 9.x + VueJs 2.x in separate environments using Sanctum authentication

Installation:

# Frontend
- Open a **terminal** and go to **/frontend**
- run: `npm i`
- run: `npm run serve`

# Backend
- Open a **terminal** and go to **/backend**
- run: `composer install`
- run: `npm i`
- run: `php artisan key:generate`
- run: `chmod -R o+w storage`
- run: `php artisan config:cache`
- run: `php artisan route:cache`
- run: `composer dumpautoload`
- run: `php artisan migrate:refresh --seed`
- run: `php artisan serve`

# Test
- Check component **LoginForm.vue** to test Login, Logout and get user information
