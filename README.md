# duplicate-mongo-db

[![npm version](https://badge.fury.io/js/duplicate-mongo-db.svg)](https://badge.fury.io/js/duplicate-mongo-db) [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A simple and efficient npm package for duplicating data between MongoDB databases, even within the same URI.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, use npm:

```bash
npm install duplicate-mongo-db
```

Or with yarn:

```bash
yarn add duplicate-mongo-db
```

## Usage

Here's how you can use this package in your project:

```javascript
const duplicateMongoDB = require('duplicate-mongo-db');

const options = {
  sourceURI: 'mongodb://sourceURI',
  targetURI: 'mongodb://targetURI',
  sourceDBName: 'sourceDatabase',
  targetDBName: 'targetDatabase',
};

duplicateMongoDB(options)
  .then(() => {
    console.log('Duplication successful!');
  })
  .catch((error) => {
    console.error('Duplication failed:', error);
  });
```

## Options

- `sourceURI`: The connection string for the source MongoDB server. Can be the same as `targetURI`.
- `targetURI`: The connection string for the target MongoDB server. Can be the same as `sourceURI`.
- `sourceDBName`: The name of the source MongoDB database to be duplicated.
- `targetDBName`: The name of the target MongoDB database where the data will be duplicated.

## Examples

### Duplicate Databases (Same URI)

```javascript
const options = {
  sourceURI: 'mongodb://localhost:27017',
  targetURI: 'mongodb://localhost:27017',
  sourceDBName: 'sourceDatabase',
  targetDBName: 'targetDatabase',
};

duplicateMongoDB(options)
  .then(() => {
    console.log('Database duplicated successfully!');
  })
  .catch((error) => {
    console.error('Duplication failed:', error);
  });
```

### Duplicate Databases (Different URIs)

```javascript
const options = {
  sourceURI: 'mongodb://sourceURI',
  targetURI: 'mongodb://targetURI',
  sourceDBName: 'sourceDatabase',
  targetDBName: 'targetDatabase',
};

duplicateMongoDB(options)
  .then(() => {
    console.log('Database duplicated successfully!');
  })
  .catch((error) => {
    console.error('Duplication failed:', error);
  });
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
