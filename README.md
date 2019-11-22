# Top 100 Restaurants in DC Database

REST routes for the Restaurants model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/restaurants`       | `/restaurants`          | `GET`    | #index  | List of all restaurants                     |
| `/restaurants`       | `/:id`                  | `GET`    | #show   | Displays a single restaurant by id          |
| `/restaurants`       | `name/:name`            | `GET`    | #show   | Displays all restaurants by name            |
| `/restaurants`       | `category/:category`    | `GET`    | #show   | Displays all restaurants by category        |
 
REST routes for the Reviews model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/reviews`           | `/reviews`              | `GET`    | #index  | List of all reviews                         |
| `/reviews`           | `/create`               | `POST`   | #create | Create a new review                         |
| `/reviews/update`    | `/:id`                  | `PUT`    | #update | Update an existing review in the database   | 
| `/reviews/delete`    | `/:id`                  | `DELETE` | #delete | Removes an existing review the database     | 
  