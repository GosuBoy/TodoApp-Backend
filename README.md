# Initialize Proyect:

```
$ npm install
$ npm start
```

## API

> base_url: http://localhost:8080/

### GET:

> #### base_url/tasks

- #### Response body:

```
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

- #### Request body:

```
{
  name: String,
  id: String (UUID),
  completed: Boolean,
}
```

### UPDATE:

> #### base_url/tasks/:id

- #### Request body:

```
{
  name: String,
  completed: Boolean,
}
```

### DELETE:

> #### base_url/tasks/:id

- #### Request body: -none-

- #### Response body: -none-

```
{
  name: String,
  completed: Boolean,
}
```
