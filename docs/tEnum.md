# tEnum

Only [String Enums](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html#string-enums) supported :warning:

```typescript
import { typedec, tEnum } from "typedec";

enum TestEnum {
    A = "A",
    B = "B",
}

@typedec()
class TestClass {
    @tEnum(TestEnum) public foo: TestEnum;

    constructor(@tEnum(TestEnum) foo: TestEnum) {
        this.foo = foo;
    }
}

new TestClass(null); // TypeError: must be one of A,B

const t: TestClass = new TestClass(TestEnum.A);

t.foo = 100; // // TypeError: must be one of A,B

t.foo = TestEnum.B;
```
