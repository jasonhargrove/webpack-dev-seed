# webpack-dev-seed

A simple development environment using webpack, with support for ES2015 and SASS.

## Usage

Install Node.js and npm:

https://nodejs.org

Make a new repository:

http://github.com

Clone this repo:

```
$ git clone --bare https://github.com/jasonhargrove/webpack-dev-seed.git

$ cd webpack-dev-seed

$ git push --mirror https://github.com/exampleuser/new-repository.git

$ cd ..

$ rm -rf weback-dev-seed.git
```
Now clone the new repository:

```
$ git clone https://github.com/exampleuser/new-repository.git

$ cd new-repository
```

Install the modules:

```
$ npm install
```

Start the Webpack Dev Server:

```
$ npm start
```

Open your browser:

http://localhost:8080

The server will watch for changes, injecting SASS or causing browser reload as needed.

Build site for deployment:

```
$ webpack
```

The site will be built in `/build`.
