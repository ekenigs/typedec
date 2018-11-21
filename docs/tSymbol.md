# tSymbol

```typescript
import { typedec, tSymbol } from "typedec";

@typedec()
class TestClass {
    @tSymbol() public foo: symbol;

    constructor(@tSymbol() foo: symbol) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: 0 must be a symbol

const t: TestClass = new TestClass(Symbol("foo"));

t.foo = 100; // TypeError: foo must be a symbol

t.foo = Symbol("foo");
```
