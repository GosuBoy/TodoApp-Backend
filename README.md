# Initialize Proyect:

```
$ npm install
$ npm start
```

## API

#### base_url: http://localhost:8080/

### GET:

> #### [base_url:](http://localhost:8080/)/tasks

- #### Response

```
// body:
[
    {
        name: String,
        id: String (UUID),
        completed: Boolean,
    } ,
    ...
]
```

### POST:

> #### base_url/tasks

- #### Request

```
// body:
{
  name: String,
  id: String (UUID),
  completed: Boolean,
}
```

- #### Response

```
// status: 201
```

### PUT:

> #### base_url/tasks/:id

- #### Request

```
// body:
{
  name: String,
  completed: Boolean,
}
```

- #### Response

```
// status: 200
```

### DELETE:

> #### base_url/tasks/:id

- #### Response

```
// status: 202

```
