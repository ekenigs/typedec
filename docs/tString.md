# tString

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

t.foo = 100; // TypeError: foo must be a string

t.foo = "baz";
```
