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

new TestClass(null); // TypeError: must be an instance of Foo

const t: TestClass = new TestClass(new Foo());

t.foo = 100; // // must be an instance of Foo

t.foo = new Foo();
```
