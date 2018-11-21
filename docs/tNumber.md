# tNumber

```typescript
import { typedec, tNumber } from "typedec";

@typedec()
class TestClass {
    @tNumber() public foo: number;

    constructor(@tNumber() foo: number) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: 0 must be a number

const t: TestClass = new TestClass(100);

t.foo = "foo"; // TypeError: foo must be a number

t.foo = 100;
```
