# tInstance

```typescript
import { typedec, tInstance } from "typedec";

class Foo {}

@typedec()
class TestClass {
    @tInstance(Foo) public foo: Foo;

    constructor(@tInstance(Foo) foo: Foo) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: 0 must be an instance of Foo

const t: TestClass = new TestClass(new Foo());

t.foo = 100; // TypeError: foo must be an instance of Foo

t.foo = new Foo();
```
