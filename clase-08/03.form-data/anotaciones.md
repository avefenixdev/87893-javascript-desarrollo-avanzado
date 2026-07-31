# Trabajando con JSON SERVER

1. Instalación

```sh
npm install json-server -D
```

2. Creación del archivo db.json

```sh
mkdir data
touch data/db.json
```

3. Agrego el script en package.json

```json
 "scripts": {
    "server": "json-server ./data/db.json --port 8080"
},
```

4. Levantar el json server

```sh
npm run server
```