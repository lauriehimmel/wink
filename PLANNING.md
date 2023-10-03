# Wink
Wink is a full-stack MERN application that allows users to create and interact with digital pets.

## Models
### Animal Model
| Property            | DataType          |
| ------------------- | ----------------- |
| _id                 | ObjectId          |
| name                | String            |
| type                | String            |
| foods               | [Food Schema]     |
| hunger              | Number            |
| lastFed             | Number            |
| color               | Number            |
| timestamps          | true              |

### Food Model
| Property            | DataType        |
| ------------------- | --------------- |
| _id                 | ObjectId        |
| name                | String          |
| meal                | String          |
| date                | String          |
| timestamps          | true            |

## User Stories
### MVP
**As a user, I want to:**
- choose an animal type
- name that animal
- see created animals
- select foods for the animals
- feed the animals
- see if the animals are hungry
### Icebox
**As a user, I want to:**
- be able to log in with google
- view the pets I have created
- view the pets others have created
- select toys for the animals
- play with the animals
- see if the animals are bored

## ERD
![ERD Diagram](library/planning-assets/P4-ERD.jpg)

## Wireframes
![Home page Wireframe](library/wireframes/home.png)

![Index page Wireframe](library/wireframes/index.png)

![Show page Wireframe](library/wireframes/show.png)

![Create page Wireframe](library/wireframes/create.png)




