# offices-app
 Simple application to show office locations

Overall Goal:
Display a list of office locations on a webpage that allows the user to apply various filters
that meet their search requirements.
System Requirements
Please run your Laravel application with the following:
- PHP 8.1+
- Laravel 9+
- MySQL 8.0 or MariaDB 10.3 or Sqlite3
- Your choice of Javascript framework (please provide local setup instructions for
installing required dependencies and building your frontend)
Data Management
1. Using the provided CSV data, create an API route using Laravel that allows the
data to be filtered and returns data in a JSON format.
2. The API should be searchable on:
● Name
○ Should also match on partial names
● Number of Offices
● Number of Tables
● Square Metres
○ Range (between $X and $Y)
● Price
○ Range (between $X and $Y)
3. All search parameters are optional.
4. The user should be able to apply multiple filters at the same time.
5. The data must be stored and queried from a SQL database and not flat files.
6. Please provide a copy of your database with your solution, or write a Laravel
seed within your solution for us to be able to seed your data.
Data Presentation
1. Choose how you wish to present the data; data table, cards, list etc.
2. Query the API using AJAX and pass data using JSON structure.
3. A loading indicator must be present whilst the queries are processed to show
progress to the visitor.
4. A message should be displayed if no results are found.

to run this project do as follow:

1. cd /backend
2. run composer install
3. setup your database
4. configure your .env and .env.testing(sqlite db is used for tests, you can use .env.testing in the repo)
5. run php artisan migrate
6. run php artisan db:seed
7. run vendor/bin/pest for tests
8. run php artisan serve (serve on 8000 so frontend app could interact with the backend)
9. cd /frontend
10. run npm install
11. run npm start
