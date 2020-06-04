# Survey wizard for brands (Supplier version)

### Setup:

Please clone this repo:

```sh
git clone ssh://git-codecommit.eu-west-1.amazonaws.com/v1/repos/survey-wizard
```

Please change directory to this project: 

```sh
cd survey-wizard
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