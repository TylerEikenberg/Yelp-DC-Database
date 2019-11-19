# Top 100 Restaurants in DC Database

REST routes for the Restaurants model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/restaurants`       | `/restaurants`          | `GET`    | #index  | List of all restaurants                     |
| `/restaurants`       | `/:id`                  | `GET`    | #show   | Displays a single restaurant by id          |
| `/restaurants/category`| `/:category`          | `GET`    | #show   | Displays all restaurants with category      | 
  