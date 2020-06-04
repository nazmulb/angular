# Survey

### Setup:

Please clone this repo:

```sh
git clone https://github.com/nazmulb/angular.git
```

Please change directory to this project:

```sh
cd angular/projects/survey
```

### Run the App:

```sh
docker-compose up
```

### Run DB migration:

```sh
docker exec api bash -c "npm run migration:run"
```

### Open your browser and use the below URL:
`http://localhost:4200/`