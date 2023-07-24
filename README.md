# AngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server
ng serve
Run `` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Run 
# install Angular CLI globally, so open the node.js command prompt and run this command:
	npm install -g @angular/cli

## "npm list" gives the packages installed in the current folder. 
The global flag -g (or --global) lists all packages installed globally. 
Include the flag --depth 0, which lists only the top-level packages. Use --depth 1, --depth 2, etc., to discover the version of dependencies.
	npm list -g --depth 0
	
		C:\Users\mn_ma\AppData\Roaming\npm
		+-- @angular/cli@16.1.4
		+-- nodemon@2.0.22
		`-- redis-cli@2.1.1

install nvm
	https://github.com/coreybutler/nvm-windows/releases

Node.js version v14.17.6 detected. The Angular CLI requires a minimum Node.js version of either v14.20, v16.14 or v18.10.
	Remove your NodeJS installation completely and re-install NodeJS through NVM. 
	Can easily switch between multiple NodeJS versions and the other benefit of that for each active NodeJS version you may able to install specific Angular CLI version.
	nvm install 14  
	nvm install 16
	nvm install 18
	nvm alias default 18  npm 
	nvm use 16  
	npm install @angular/cli -g

	npm start
packages installed in the current folder
	npm list --depth 0

ng : File C:\Users\...\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information
	Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

find the version of Angular CLI in the current folder
	ng --version (or ng -v)

Standalone : 
	https://www.thisdot.co/blog/how-to-create-standalone-components-in-angular/	
	https://codelabs.developers.google.com/angular-standalone-components#0

	/angular16-dotnetcore (main) $ 
		ng generate application blog-app
		ng build blog-app
		ng serve blog-app
