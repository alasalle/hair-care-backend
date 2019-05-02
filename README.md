# hair-care-backend

## Installation

### Commands

1. to install packages use the `yarn` command
2. to run the program use the `yarn server` script found in the package.json file

### environment variables

These are the following environment variables you need in your .env file in the base of the repository

- DB_ENV=`<development or testing or production>`
- PORT=`<any port of your choosing>`
- DATABASE_URL=`<link to hosted postgres database for example 'postgres://`xxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxx-xxxx-xxx-xxx.compute-1.amazonaws.com:xxxx/xxxxxxxxxxxx'>
- CLIENT_ID=`<client id for google+ api>`
- CLIENT_SECRET=`<client secret for google+ api>`
- COOKIE_KEY=`<session key of your choosing>`
- JWT_SECRET=`<jwt secret of your choosing>`

## Models

### Likes

- user_id:integer
- post_id:integer

### Rating

- user_id:integer
- stylist_id:integer
- rating:integer
- description:string
- image_1:string
- image_2:string
- image_3:string

### Posts

- image:string
- description:string
- user_id:integer

### Tags

- tag:string

### Tags_Posts

- post_id:integer
- tag_id:integer

### User

- google_id:string
- username:string
- profile_picture:string
- first_name:string
- last_name:string
- bio:text
- location:string
- phone_number:string
- stylist:boolean
