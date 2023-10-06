# Rest Api dan CRUD pada Node js

Saya memebuat ini bertujuan untuk pembelajaran tentang Rest Api dan CRUD

## Database diagram

![App Screenshot](/public/images/carsdbdiagram.png)

## Installation

Clone the project

```bash
  https://github.com/Mnuralim/binar-challenge4.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL`

`PORT`

<!-- cloudinary -->

`CLOUD_NAME`

`CLOUDINARY_APIKEY`

`CLOUDINARY_APISECRET`

## Tech Stack

**Server:** Node, Express, MongoDB

## API Reference

#### Get all cars

```http
  GET /api/v1/cars
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get car by id

```http
  GET /api/v1/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add new car

```http
  POST /api/v1/cars/
```

| Body    | Type     | Description   |
| :------ | :------- | :------------ |
| `name`  | `string` | **Required**. |
| `price` | `number` | **Required**. |
| `size`  | `string` | **Required**. |
| `image` | `string` | **Required**. |

#### update car

```http
  PATCH /api/v1/cars/${id}
```

| Body    | Type     | Description   |
| :------ | :------- | :------------ |
| `name`  | `string` | **Required**. |
| `price` | `number` | **Required**. |
| `size`  | `string` | **Required**. |
| `image` | `string` | **Optional**. |

#### Remove car

```http
  DELETE /api/v1/cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
