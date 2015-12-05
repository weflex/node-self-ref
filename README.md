
# self-ref

Self referenced in node_modules way for Node.js project. Before using this module, please
notice the following:

- use `require('self-ref')` outside of your app project, this module should only be used
  at your test case.

## Installation

```sh
$ npm install self-ref --save-dev
```

## Usage

First of all, assuming your project looks like the below distrubition:

```
- app
  - package.json
  - app/lib/server.js
  - app/test/test-server.js
  - node_modules
    - node_modules/express
    - node_modules/self-ref
```

And update your package.json:

```json
{
  "main": "./lib/lib/server.js"
}
```

Finally in `app/test/test-server.js`, to reference the `server.js`:

```js
const app = require('self-ref');
```

## Why do we create this

Sometimes, in writing test cases, especially http application, we have to copy the `server.js`
like:

```js
const app = require('../../app/lib/server.js');
```

This might be friable and wrongable, so we, the [WeFlex](https://github.com/weflex) team created
this module to make it easy.

## License

MIT Licensed

