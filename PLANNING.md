# Wink
(description)

## Models
### Animal Model
| Property            | DataType          |
| ------------------- | ----------------- |
| _id                 | ObjectId          |
| name                | String            |
| type                | String            |
| Image               | [Image Schema]    |
| Activities          | [Activity Schema] |
| Foods               | [Food Schema]     |
| Health              | Number            |
| Happiness           | Number            |
| timestamps          | true              |

### Image Model
| Property            | DataType        |
| ------------------- | --------------- |
| _id                 | ObjectId        |
| url                 | String          |
| creatureId          | String          |

### Activity Model
| Property            | DataType        |
| ------------------- | --------------- |
| _id                 | ObjectId        |
| name                | String          |
| creatureId          | String          |
| timestamps          | true            |

### Food Model
| Property            | DataType        |
| ------------------- | --------------- |
| _id                 | ObjectId        |
| name                | String          |
| creatureId          | String          |
| timestamps          | true            |

## User Stories
### MVP
**As a user, I want to:**
- choose an animal type
- name that animal
- see created animals
- select activities + foods for the animals
- feed + play with the animals
- see if the animals are hungry or bored
### Icebox
**As a user, I want to:**
- be able to log in with google
- view the pets I have created
- view the pets others have created

## ERD
![ERD Diagram](library/planning-assets/P4-ERD.jpg)

## Links

## Wireframes
![Home page Wireframe](library/wireframes/home.png)

![Index page Wireframe](library/wireframes/index.png)

![Show page Wireframe](library/wireframes/show.png)

![Create page Wireframe](library/wireframes/create.png)




