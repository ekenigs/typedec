# tBoolean

```typescript
import { typedec, tBoolean } from "typedec";

@typedec()
class TestClass {
    @tBoolean() public foo: boolean;

    constructor(@tBoolean() foo: boolean) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: 0 must be an boolean

const t: TestClass = new TestClass(true);

t.foo = 100; // TypeError: foo must be an boolean

t.foo = false;
```
