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

## Login Captain

**Endpoint:**
```
POST /captains/login
```

**Description:**
This endpoint allows a captain to log in using their email and password. Upon successful authentication, it returns an access token and captain details.

**Request Body:**
```json
{
  "email": "captain@example.com",
  "password": "yourpassword"
}
```

**Success Response:**
```json
{
  "token": "your-jwt-token",
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "captain@example.com",
    "status": "active",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Error Responses:**
- `400 Bad Request` – Validation errors in the request body.
- `401 Unauthorized` – Invalid email or password.

---

## Get Captain Profile

**Endpoint:**
```
GET /captains/profile
```

**Description:**
This endpoint fetches the currently authenticated captain's profile. The request must include a valid authentication token.

**Headers:**
```
Authorization: Bearer your-jwt-token
```

**Success Response:**
```json
{
  "captain": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "captain@example.com",
    "status": "active",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Error Responses:**
- `401 Unauthorized` – Missing or invalid token.

---

## Logout Captain

**Endpoint:**
```
POST /captains/logout
```

**Description:**
Logs out the currently authenticated captain by blacklisting the token.

**Headers:**
```
Authorization: Bearer your-jwt-token
```

**Success Response:**
```json
{
  "message": "Logout successful"
}
```

**Error Responses:**
- `401 Unauthorized` – Missing or invalid token.

---

## Request Structure

### Captain Object
```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "car | motorbike | auto"
  }
}
```

### Authorization Header
```
Authorization: Bearer your-jwt-token
```

---

## Notes
- Ensure that the JWT token is sent in the Authorization header for protected routes.
- Validate input fields as per the request structure.

## Maps Endpoints

### Get Coordinates Endpoint

**Endpoint:**  
`GET /maps/get-coordinates`

**Description:**  
This endpoint returns the geographical coordinates (latitude and longitude) for a given address.

**Query Parameters:**  
- `address` (string): The address to geocode. Must be at least 3 characters long.

**Request Headers:**  
- `Authorization`: Bearer `your_jwt_token`

**Sample Request:**  
```
GET {{baseurl}}/maps/get-coordinates?address=1600+Amphitheatre+Parkway HTTP/1.1
Authorization: Bearer your_jwt_token
```

**Sample Response:**  
```json
{
  "coordinates": {
    "lat": 37.4224764,
    "lng": -122.0842499
  },
  "message": "Coordinates retrieved successfully."
}
```

---

### Get Distance and Time Endpoint

**Endpoint:**  
`GET /maps/get-distance-time`

**Description:**  
This endpoint returns the travel distance and estimated time between an origin and a destination address.

**Query Parameters:**  
- `origin` (string): The starting address. Must be at least 3 characters long.
- `destination` (string): The destination address. Must be at least 3 characters long.

**Request Headers:**  
- `Authorization`: Bearer `your_jwt_token`

**Sample Request:**  
```
GET {{baseurl}}/maps/get-distance-time?origin=Place+A&destination=Place+B HTTP/1.1
Authorization: Bearer your_jwt_token
```

**Sample Response:**  
```json
{
  "distance": {
    "text": "10 km",
    "value": 10000
  },
  "duration": {
    "text": "15 mins",
    "value": 900
  },
  "message": "Distance and travel time retrieved successfully."
}
```

---

### Get Suggestions Endpoint

**Endpoint:**  
`GET /maps/get-suggestions`

**Description:**  
This endpoint returns a list of location suggestions based on the provided input string.

**Query Parameters:**  
- `input` (string): The search term for location suggestions. Must be at least 3 characters long.

**Request Headers:**  
- `Authorization`: Bearer `your_jwt_token`

**Sample Request:**  
```
GET {{baseurl}}/maps/get-suggestions?input=Central HTTP/1.1
Authorization: Bearer your_jwt_token
```

**Sample Response:**  
```json
{
  "suggestions": [
    "Central Park, New York, NY, USA",
    "Central Station, Sydney, Australia",
    "Central Market, Los Angeles, CA, USA"
  ],
  "message": "Suggestions retrieved successfully."
}
```

---

### Create Ride Endpoint

**Endpoint:**  
`POST /rides/create`

**Description:**  
This endpoint creates a new ride request for the authenticated user. It validates the pickup and destination addresses, computes the fare based on the selected vehicle type and route, generates a six-digit OTP for ride confirmation, and returns the ride details.

**Request Headers:**  
- `Authorization`: Bearer `your_jwt_token`

**Request Body:**  
```json
{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

**Sample Request:**  
```
POST {{baseurl}}/rides/create HTTP/1.1
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "vehicleType": "car"
}
```

**Sample Response:**  
```json
{
  "_id": "ride_id_here",
  "user": "user_id_here",
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "fare": 110,
  "otp": "123456",
  "status": "pending",
  "message": "Ride created successfully."
}
```

## Get Fare Endpoint

### Endpoint
`GET /rides/get-fare`

### Description
This endpoint calculates the estimated fare for a ride based on the provided pickup and destination addresses. It computes fare estimates for available vehicle types (auto, car, and motorbike) using travel distance and time.

### Request Headers
- `Authorization`: Bearer `your_jwt_token`

### Query Parameters
- `pickup` (string): The pickup address. Must be at least 3 characters long.
- `destination` (string): The destination address. Must be at least 3 characters long.

### Response Body
Example successful response:
```json
{
  "auto": 75,
  "car": 110,
  "motorbike": 55
}
```