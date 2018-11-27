# `currency-converter-app` — Currency Converter App

This is a currency converter app that can covert any currency.
It is using fixer.io to get currency rate updated.


## Getting Started

To get you started you can simply clone the `currency-converter-app` repository and install the dependencies:

### Prerequisites

You need git to clone the `currency-converter-app` repository.

We also use a number of Node.js tools to initialize and test `currency-converter-app`. You must have Node.js
and its package manager (npm) installed.

### Clone `currency-converter-app`

Clone the `currency-converter-app` repository using git:

```
git clone https://github.com/muhammadsumair/currency-converter-app.git
cd currency-converter-app
```

### Install Dependencies

We have dependencies of tools in this project. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].

We have preconfigured `npm` to downloaded automatically can simply do:

```
npm install
```

After that, you should find out that you have a new directory in
your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                  --> all of the source files for the application
  components/           --> all app components
    currencyConverter/            --> currency converter component template and logic
      currencyConverter.js          --> currencyConverter component controller logic
      template.html                 --> currencyConverter component template
  services/             --> all app services
  styles/               --> app stylesheet
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
test/                 --> unit tests
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```


## Testing

We are using unit tests in the `currency-converter-app` application.

### Running Unit Tests

The `currency-converter-app` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.