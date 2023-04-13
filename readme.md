## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install dependecies.

```bash
npm install
```

Create a .env file in the root directory and add the following variables:

```bash
DB_USER='root'
DB_PASSWORD=''
DB_NAME='flop_db'
PORT='3000'
```

Create your database with:
```bash
npx sequelize-cli db:create
```
Create your scheme with:
```bash
npx sequelize-cli db:migrate
```

## Usage
To start the server run:
```bash
npm start
```

# Routes usage
## Questions Routes
### Get Questions
todo
### Get Reponses to Questions
todo
## Leaderboard Routes
### Get TOP 10
```bash
GET /resultat/
```
example result: 
```
{
    "top10": [
        {
            "username": "test1",
            "totalScore": 1
        },
        {
            "username": "test2",
            "totalScore": 2
        },
        {
            "username": "test3",
            "totalScore": 3
        },
        {
            "username": "test4",
            "totalScore": 4
        },
        {
            "username": "test5",
            "totalScore": 5
        },
        {
            "username": "test6",
            "totalScore": 6
        },
        {
            "username": "test7",
            "totalScore": 7
        },
        {
            "username": "test8",
            "totalScore": 8
        },
        {
            "username": "test9",
            "totalScore": 9
        },
        {
            "username": "test10",
            "totalScore": 10
        }
    ]
}
```