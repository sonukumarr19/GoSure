# Backend API Documentation

## User Registration Endpoint

### Endpoint
`POST /users/register`

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. The endpoint validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing the user's first and last name.
  - `firstName`: A string representing the user's first name. Must be at least 3 characters long.
  - `lastName`: A string representing the user's last name. Must be at least 3 characters long.
- `email`: A string representing the user's email address. Must be a valid email format.
- `password`: A string representing the user's password. Must be at least 6 characters long.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Body
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned along with the user details.

### Request Body
The request body should be a JSON object containing the following fields:

- `email`: A string representing the user's email address. Must be a valid email format.
- `password`: A string representing the user's password. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Body
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint retrieves the authenticated user's profile information. The request requires a valid JWT token to be passed via the `Authorization` header.

### Request Headers
- `Authorization`: Bearer `your_jwt_token`

### Response Body
```json
{
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## User Logout Endpoint

### Endpoint
`POST /users/logout`

### Description
This endpoint logs out the authenticated user by invalidating the JWT token. The request requires a valid JWT token to be passed via the `Authorization` header.

### Request Headers
- `Authorization`: Bearer `your_jwt_token`

### Response Body
```json
{
  "message": "User successfully logged out."
}
```

