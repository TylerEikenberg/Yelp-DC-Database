#!/bin/bash

rm -rf ./db/data/* && 
touch ./db/data/places && 
curl -X GET 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Washington,DC' -H 'Authorization: Bearer fpLbcBy1thaWbp1z6_ECza87BCAiTqFrvXuLcu4mI4nJ2bCGKgzvkl5f-L7YRQdngbmKFa7wHzcqgshsJCqHkMEbz37TDNwXI8AuU6i6u1XLuEIIyc1OeqraJejSXXYx' -H 'Cache-Control: no-cache' > ./db/data/places.json


