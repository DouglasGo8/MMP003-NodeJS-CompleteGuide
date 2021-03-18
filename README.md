# NodeJS - The Complete Guide

---

```shell
node -v
```

---

[***DDD Hexagonal Sample***](https://github.com/eugenp/tutorials/tree/master/ddd)

[***Mastering Async Functions***](https://blog.risingstack.com/mastering-async-await-in-nodejs/)

## Async functions with Babel

```bash
npm i @babel/core @babel/preset-env @babel/register @babel/polyfill --save-dev
```

```html
app.js { // only content
    const Koa = require('koa') -> import Koa from 'koa';
    import '@babel/polyfill';
    async f1 (p) => {
        return 'Hello ' + p;
    }
    const resp = await f1('param');
}

.babelrc { // only content
    {
        "presets": [
            "@babel/preset-env"
        ]
    }
}

bootstrap.js { // only content
    require('@babel/register')({})
    module.exports = require('./app.js)
}

package.json { // only content
    "start": "node bootstrap.js"
}
```

## Core Modules

* http
* https
* fs
* path
* os

## NodeJS Event Loop

* Keeps on running as long as there are event listeners registered, e.g http.createServer(...).listen(port)