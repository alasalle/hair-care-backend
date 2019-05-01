# hair-care-backend

## User

- google_id:string
- username:string

## Likes

- user_id:integer
- post_id:integer
- liked:boolean

## Rating

- user_id:integer
- stylist_id:integer
- rating:integer
- description:string
- image_1:string
- image_2:string
- image_3:string

## Posts

- image:string
- description:string
- user_id:integer

## Tags

- tag:string

## Tags_Posts

- post_id:integer
- tag_id:integer

## Hairstylist

- google_id:string
- username:string
- profile_picture:string
- first_name:string
- last_name:string
- bio:text
- location:string
- phone_number:string
