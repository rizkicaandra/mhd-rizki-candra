# RESTful Endpoint
  
List of available endpoints:
- `POST /generatetoken`
- `POST /users`
- `GET /users`
- `GET /users/:accountNumber`
- `GET /identitynumber/:identityNumber`
- `PUT /users/:id`
- `DELETE /users/:id`

### POST /generatetoken

mendapatkan token

Request:

- data:

```json
{
  "email": "admin@mail.com",
}
```
Response:

- status 200

```json
{
  "access_token" : "string",
}
```

Error Response:
- 500 internal server error

### POST /users

menambahkan data user.

Request:

- header:

```js
  "access_token": "string"
```

- data:

```json
{
  "userName": "string",
  "accountNumber": "integer",
  "emailAddress": "string",
  "identityNumber": "integer"
}
```
Response:

- status 201

```json
{
  "message":"string",
  "data": {
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer",
    "_id": "string"
  }
}
```

Error Response:
- 400 bad request
- 401 Unauthorized
- 500 internal server error

### GET /users

menampilkan seluruh data.

Request:

- header:

```json
  "access_token": "string"
```

Response:

- status 200

```json
{
  "message":"string",
  "data": [{
    "_id": "string",
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer"
  },
  {
    "_id": "string",
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer"
  }]
}
```

Error Response:
- 401 Unauthorized
- 500 internal server error

### GET /users/:accountNumber

menampilkan detail users berdasarkan account number.

Request:

- header:

```js
  "access_token": "string"
```

- params:
```js
  "accountNumber": "integer"
```

Response:

- status 200

```json
{
  "message":"string",
  "data": {
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer",
    "_id": "string"
  }
}
```

Error Response:
- 400 bad request
- 401 Unauthorized
- 500 internal server error

### GET /identitynumber/:identityNumber

menampilkan detail users berdasarkan identity number.

Request:

- header:

```js
  "access_token": "string"
```

- params:
```js
  "identityNumber": "integer"
```

Response:

- status 200

```json
{
  "message":"string",
  "data": {
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer",
    "_id": "string"
  }
}
```

Error Response:
- 400 bad request
- 401 Unauthorized
- 500 internal server error

### PUT /users/:id

mengubah data user.

Request:

- header:

```js
  "access_token": "string"
```

- params:

```js
  "id": "string"
```

- data:

```json
{
  "userName": "string",
  "accountNumber": "integer",
  "emailAddress": "string",
  "identityNumber": "integer"
}
```
Response:

- status 200

```json
{
  "message":"string",
  "data": {
    "userName": "string",
    "accountNumber": "integer",
    "emailAddress": "string",
    "identityNumber": "integer",
    "_id": "string"
  }
}
```

Error Response:
- 400 bad request
- 401 Unauthorized
- 500 internal server error

### DELETE /users/:id

menghapus data user berdasarkan id

Request:

- header:

```js
  "access_token": "string"
```

- params:
```js
  "id": "integer"
```

Response:

- status 200

```json
{
  "message":"string",
}
```

Error Response:
- 400 bad request
- 401 Unauthorized
- 500 internal server error

### ERROR RESPONSE DETAIL

- 400 Bad Request / Validation Error

```json
{
  "name": "Custom_Error",
  "errorCode": "Validation Error",
  "message": "Invalid Input",
  "status": 400
}
```

- 401 Unauthorized

```json
{
  "name": "Custom_Error",
  "errorCode": "Not Authorized",
  "message": "Not Authorized",
  "status": 401
}
```

- 404 Error Not Found

```json
{
  "name": "Custom_Error",
  "errorCode": "Not Found",
  "message": "Data Not Found",
  "status": 404
}
```
- 500 Internal Server Error

```json
{ 
    "error": "Internal Server Error"
}
```