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
### Get Questions + Reponses + score total possible
```bash
GET /question/serve10
```
example result: 
```json
[
    {
        "id": 4,
        "value": "Mise en situation : Tu parles tranquillement à ton pote, et là il ne comprend pas ce que tu dis. Soudainement il te balance un « quoi ? ». Que réponds-tu ?",
        "reponses": [
            {
                "id": 5,
                "value": "Feur!",
                "nbDePoints": 1,
                "idQuestion": 4
            },
            {
                "id": 6,
                "value": "Quoicoubeh",
                "nbDePoints": 2,
                "idQuestion": 4
            },
            {
                "id": 7,
                "value": "Quoicoubaka",
                "nbDePoints": 3,
                "idQuestion": 4
            },
            {
                "id": 8,
                "value": "*Tu répètes ta phrase*",
                "nbDePoints": 0,
                "idQuestion": 4
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 13,
        "value": "Mise en situation : Tu dois rentrer chez toi après une soirée (très) arrosée, tu dois choisir un taxi. Qui choisis tu ?",
        "reponses": [
            {
                "id": 45,
                "value": "GMK",
                "nbDePoints": 2,
                "idQuestion": 13
            },
            {
                "id": 46,
                "value": "Un taxi lambda",
                "nbDePoints": 1,
                "idQuestion": 13
            },
            {
                "id": 47,
                "value": "Pierre Palmade",
                "nbDePoints": 3,
                "idQuestion": 13
            },
            {
                "id": 48,
                "value": "Tu rentres à pieds",
                "nbDePoints": 0,
                "idQuestion": 13
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 6,
        "value": "Mise en situation : Tu vas au cinéma avec ta meuf, tu as le choix entre 4 films. Que choisis-tu ?",
        "reponses": [
            {
                "id": 21,
                "value": "Les Gardiens de la Galaxie",
                "nbDePoints": 0,
                "idQuestion": 6
            },
            {
                "id": 22,
                "value": "Super Mario Bros. le film",
                "nbDePoints": 1,
                "idQuestion": 6
            },
            {
                "id": 23,
                "value": "Fast and Furious 46",
                "nbDePoints": 2,
                "idQuestion": 6
            },
            {
                "id": 24,
                "value": "Astérix et Obélix : L'Empire du Milieu",
                "nbDePoints": 3,
                "idQuestion": 6
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 11,
        "value": "Tu sors de soirée et avec ta bande d'amis vous avez super faim. Que proposes tu ?",
        "reponses": [
            {
                "id": 37,
                "value": "On va manger?",
                "nbDePoints": 0,
                "idQuestion": 11
            },
            {
                "id": 38,
                "value": "Allons fluncher!",
                "nbDePoints": 2,
                "idQuestion": 11
            },
            {
                "id": 39,
                "value": "J'ai la quoicoudalle!",
                "nbDePoints": 3,
                "idQuestion": 11
            },
            {
                "id": 40,
                "value": "On va manger un morceau?",
                "nbDePoints": 1,
                "idQuestion": 11
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 8,
        "value": "As-tu déjà fêté ton anniversaire au Mcdo/Quick ?",
        "reponses": [
            {
                "id": 29,
                "value": "Oui",
                "nbDePoints": 1,
                "idQuestion": 8
            },
            {
                "id": 30,
                "value": "Non",
                "nbDePoints": 0,
                "idQuestion": 8
            }
        ],
        "cringeMax": 1
    },
    {
        "id": 1,
        "value": "Quel est ton réseau social favori?",
        "reponses": [
            {
                "id": 13,
                "value": "Facebook",
                "nbDePoints": 3,
                "idQuestion": 1
            },
            {
                "id": 14,
                "value": "Tiktok",
                "nbDePoints": 1,
                "idQuestion": 1
            },
            {
                "id": 15,
                "value": "Pinterest",
                "nbDePoints": 2,
                "idQuestion": 1
            },
            {
                "id": 16,
                "value": "BeReal",
                "nbDePoints": 0,
                "idQuestion": 1
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 9,
        "value": "Quel est ton fast-food préféré ?",
        "reponses": [
            {
                "id": 31,
                "value": "Five Guys",
                "nbDePoints": 0,
                "idQuestion": 9
            },
            {
                "id": 32,
                "value": "Flunch",
                "nbDePoints": 3,
                "idQuestion": 9
            },
            {
                "id": 33,
                "value": "Burger King",
                "nbDePoints": 1,
                "idQuestion": 9
            },
            {
                "id": 34,
                "value": "Quick",
                "nbDePoints": 2,
                "idQuestion": 9
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 5,
        "value": "Quel est ton streamer préféré ?",
        "reponses": [
            {
                "id": 17,
                "value": "Doigby",
                "nbDePoints": 1,
                "idQuestion": 5
            },
            {
                "id": 18,
                "value": "Asterion",
                "nbDePoints": 3,
                "idQuestion": 5
            },
            {
                "id": 19,
                "value": "Grimkujow",
                "nbDePoints": 2,
                "idQuestion": 5
            },
            {
                "id": 20,
                "value": "Loupiote3",
                "nbDePoints": 0,
                "idQuestion": 5
            }
        ],
        "cringeMax": 3
    },
    {
        "id": 10,
        "value": "Tes potes te trouvent généralement drôle ?",
        "reponses": [
            {
                "id": 35,
                "value": "Oui",
                "nbDePoints": 0,
                "idQuestion": 10
            },
            {
                "id": 36,
                "value": "Non",
                "nbDePoints": 1,
                "idQuestion": 10
            }
        ],
        "cringeMax": 1
    },
    {
        "id": 12,
        "value": "Quel est ton humoriste favori ? ",
        "reponses": [
            {
                "id": 41,
                "value": "Jonathan Cohen",
                "nbDePoints": 0,
                "idQuestion": 12
            },
            {
                "id": 42,
                "value": "Norman",
                "nbDePoints": 2,
                "idQuestion": 12
            },
            {
                "id": 43,
                "value": "Franck Dubosc",
                "nbDePoints": 1,
                "idQuestion": 12
            },
            {
                "id": 44,
                "value": "Kev Adams",
                "nbDePoints": 3,
                "idQuestion": 12
            }
        ],
        "cringeMax": 3
    },
    {
        "totalCringeMax": 26
    }
]
```
###Get question by id
```bash
GET /question/getbyid/{id}
```
example result :
```JSON
{
    "id": 1,
    "value": "Quel est ton réseau social favori?",
    "reponses": [
        {
            "id": 13,
            "value": "Facebook",
            "nbDePoints": 3,
            "idQuestion": 1
        },
        {
            "id": 14,
            "value": "Tiktok",
            "nbDePoints": 1,
            "idQuestion": 1
        },
        {
            "id": 15,
            "value": "Pinterest",
            "nbDePoints": 2,
            "idQuestion": 1
        },
        {
            "id": 16,
            "value": "BeReal",
            "nbDePoints": 0,
            "idQuestion": 1
        }
    ],
    "cringeMax": 3
}
```
##Leaderboard routes
###Get top 10
```bash
GET /resultat/
```
example result :
```JSON
[
    {
        "id": 12,
        "prenom": "sbss",
        "nom": "nombnobsm",
        "totalScore": 5
    },
    {
        "id": 15,
        "prenom": "sbss",
        "nom": "qqqqsd",
        "totalScore": 12
    },
    {
        "id": 11,
        "prenom": "sss",
        "nom": "nombnobm",
        "totalScore": 13
    },
    {
        "id": 2,
        "prenom": "Truc",
        "nom": "Machin",
        "totalScore": 23
    },
    {
        "id": 1,
        "prenom": "test",
        "nom": "test",
        "totalScore": 24
    },
    {
        "id": 3,
        "prenom": "tructruc",
        "nom": "nomnom",
        "totalScore": 36
    },
    {
        "id": 4,
        "prenom": "tructrucc",
        "nom": "nomnom",
        "totalScore": 36
    },
    {
        "id": 5,
        "prenom": "tructrcucc",
        "nom": "nomnom",
        "totalScore": 36
    },
    {
        "id": 6,
        "prenom": "tructrcuccc",
        "nom": "nomnom",
        "totalScore": 36
    },
    {
        "id": 7,
        "prenom": "tructrcuccsc",
        "nom": "nomnom",
        "totalScore": 36
    }
]
```
###Add result to leaderboard
```bash
PUT /resultat/add
```
example input:
```JSON
{
    "nom": "Machin",
    "prenom": "Truc",
    "totalscore" : 23
}
```
example succesful output:
```JSON
{
    "id": 2,
    "prenom": "Truc",
    "nom": "Machin",
    "totalScore": 23
}
```