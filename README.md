# EldoradoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running locally

Dependencies:
- Docker
- docker-compose
- Angular-CLI
- Make

How to:
1. If you are running the backend of this application locally change its url in `src/assets/config.ts` to `http://localhost:1234`.
2. After having installed all dependencies, simply run the command `make build`, to generate a dist directory with all necessary files.
3. Open the `etc/hosts` file add the following line `127.0.0.1  ec2-18-212-130-42.compute-1.amazonaws.com`. Remove this line again after testing the application.
4. Use the command `make up` to start a container running nginx to serve the files.
5. Optionally you can use `make log` to see nginx's output.
6. Open the address http://ec2-18-212-130-42.compute-1.amazonaws.com in the web browser.
7. After you're done, use `make down` to stop the nginx container.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
