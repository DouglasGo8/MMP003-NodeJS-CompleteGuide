# NodeJS - The Complete Guide

---

```shell
node -v
```

---

[***DDD Hexagonal Sample***](https://github.com/eugenp/tutorials/tree/master/ddd)

[***Mastering Async Functions***](https://blog.risingstack.com/mastering-async-await-in-nodejs/)

## Async functions with Babel

```html

npm i @babel/core @babel/preset-env @babel/register @babel/polyfill --saved-dev

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