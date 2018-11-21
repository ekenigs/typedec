# Typedec

[![CircleCI](https://circleci.com/gh/ekenigs/typedec.svg?style=svg&circle-token=8feaceb705ad2091139caa70e6c2e3a8a2e9d755)](https://circleci.com/gh/ekenigs/typedec) [![Test Coverage](https://api.codeclimate.com/v1/badges/a89951c9f438588a6a20/test_coverage)](https://codeclimate.com/github/ekenigs/typedec/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/a89951c9f438588a6a20/maintainability)](https://codeclimate.com/github/ekenigs/typedec/maintainability)

Runtime type validation for TypeScript with decorators

---

```typescript
import { typedec, tString } from "typedec";

@typedec()
class TestClass {
    @tString() public foo: string;

    constructor(@tString() foo: string) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: 0 must be a string

const t: TestClass = new TestClass("foo");

t.foo = 100; // // TypeError: foo must be a string

t.foo = "baz";
```

---

## About

Typedec is created to help you protect your application/module entities by validating types in runtime. It's designed to be easy to use and integrate(or remove) in your application/module.

---

## Installation

```bash
npm i --save typedec reflect-metadata
```

## Requirements :warning:

* `reflect-metadata` polyfill should be imported only once in your entire application. More details about it [here](https://www.npmjs.com/package/reflect-metadata).

* Typedec requires TypeScript >= 2.0 and the `experimentalDecorators`, `emitDecoratorMetadata` compilation options in your `tsconfig.json` file.

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

---

## Supported types

* [string](./docs/tString.md) `@tString()`
* [number](./docs/tNumber.md) `@tNumber()`
* [boolean](./docs/tBoolean.md) `@tBoolean()`
* [symbol](./docs/tSymbol.md) `@tSymbol()`
* [Enum](./docs/tEnum.md) `@tEnum()`
* [Instance](./docs/tInstance.md) `@tInstance()`

---

## License

MIT License

Copyright (c) 2018 Elmars Kenigs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
