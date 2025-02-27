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

## Captain Registration Endpoint

### Endpoint
`POST /captains/register`

### Description
This endpoint allows a new captain to register by providing their personal information and vehicle details. The endpoint validates the input data, hashes the password, and creates a new captain in the database. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the captain's details.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullName`: An object containing the captain's first and last name.
  - `firstName`: A string representing the captain's first name. Must be at least 3 characters long.
  - `lastName`: A string representing the captain's last name. Must be at least 3 characters long.
- `email`: A string representing the captain's email address. Must be a valid email format.
- `password`: A string representing the captain's password. Must be at least 6 characters long.
- `vehicle`: An object containing the vehicle's details.
  - `color`: A string representing the vehicle's color. Must be at least 3 characters long.
  - `plate`: A string representing the vehicle's plate number. Must be at least 3 characters long.
  - `capacity`: An integer representing the vehicle's capacity. Must be at least 1.
  - `vehicleType`: A string representing the type of vehicle. Must be one of `car`, `motorbike`, or `auto`.

Example:
```json
{
  "fullName": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Red",
    "plate": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Body
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null
  }
}
```

