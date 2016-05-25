rem @echo off
mongorestore
mongoimport --db test --collection students --drop --file grades.json
start mongo