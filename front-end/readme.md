
# Mono-Repo Project

## Description
This repository contains the configurations and scripts for the development of a monolithic repository for web applications.

## Setup
Clone this repository and install dependencies:
```bash
git clone <repository-url>
cd <repository-directory>
yarn install
```

## Development
To start the development server for the web application on local machine:
```bash
yarn develop:webapp
```

## Building
To build the web application for production ready code:
```bash
yarn build:webapp
```

## Scripts
- **develop:webapp**: Runs the development server for the web app.
- **start:webapp**: Alias to run the web app.
- **build:webapp**: Builds the web app for production use.

## Dependencies
- **Webpack**: Module bundler.
- **Babel**: JavaScript compiler.

## Ignored Files
- `node_modules`: Directory for project dependencies.
The code is fetched from Node package manager(YARN).

## License
This project is licensed under the MIT License.
