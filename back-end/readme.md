# CRUD API

TypeScript with Express to create, read, update, and delete data.

## Installation

1. Clone the repository: `git clone https://github.com/HaykaramNik/dataArt_challenge_2.git`
2. Navigate to the project directory: `cd back-end`
3. Install dependencies: 
```bash
yarn install
```
4. Run docker-compose containers (postgresql container)
```bash
yarn db-up
```
5. Init tables
```bash
yarn db-init
```

## Usage

1. Start the project: 
```bash
yarn dev
```

2. Open the application in your browser: `http://localhost:your_port`

## Remove

1. Remove tables:
```bash
yarn db-undo
```
2. Down docker containers:
```bash
yarn db-down
```

## Technologies

- TypeScript
- Express
- PostgreSQL
- Sequelize
