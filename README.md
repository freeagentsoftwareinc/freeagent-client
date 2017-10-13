FreeAgent Network NodeJS Client
=========

A small nodejs client library that communicates with FreeAgent Network graphQL REST API

## Installation

```
  npm install --save freeagent-client
```

## Usage examples

#### Creating a deal

```
  var freeagent = new FreeAgentClient({
    clientId: 'your-client-id',
    clientSecret: 'your-secret-id',
    oauthURL: 'freeagent-network-oauth-url',
    graphQLEndpoint: 'freeagent-network-graphql-url',
  });

  freeagent.addDeal(deal).then((createdDeal) => {
    // createdDeal contains the deal information
  }).catch(error => {
    // something went wrong
  });
```

## Tests

```
  $ npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.2 Updating leads body
* 0.1.1 Updating deals body
* 0.1.0 Initial release
