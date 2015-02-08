Building-Stuff
==============
Learning to create a project that hosts different builders and their projects.

## Installation

- Clone the Repo
- `$ cd Building-Stuff`
- `$ npm install`


## Task List

### Design / Concepts
- Database Scheme
- Name for the site
- Design Layout



## Database Scheme

**Users** - Anyone who has an account. They will have permissions (admin, user).

**Projects** - Users can have multiple projects, multiple users can work on the same project. A Project is going to be a group of articles.

**Articles** - Content, either text, images, videos, links.

```
Users: [{
  "id": "ObjectId"
  "first_name": "blah",
  "last_name": "grr",
  "skill_level": 5
}]

Projects: [{
  user_ids: [123, 234],
  name: "Blah",
  articles: [{
    "title": "blah"
  }]
}]
```

## 3rd Party Tools
- Look into Disqus for comments
- Google Analytics
