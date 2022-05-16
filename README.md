# Pets Management

This single page application allows user to view list of pets and filter them by status. Also it is possible ot create new pets, update or delete them.

There is a smart “Pets” component which is master-details view. It uses three presentation components - “Pets List”, “Pet Details” and “Pets Filter”.
Some Material UI components are used for interface, such as Card, List, Form elements etc.

Flexbox is used for layouts.

State is managing with NgRx library. Devtools module is turned on on production, so it’s possible to observe state changes with Chrom browser Developer Tools.

There are unit test suits for pets component pets service and pet details form.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
