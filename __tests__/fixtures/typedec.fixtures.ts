import { typedec, tString, tBoolean, tNumber, tSymbol, tEnum, tInstance } from "../../src";
import { TestEnum, TestInstance } from "./";

@typedec()
export class TestClass1 {
    @tString() public testString?: string;
    @tBoolean() public testBool?: boolean;
    @tNumber() public testNumber?: number;
    @tSymbol() public testSymbol?: number;
    @tEnum(TestEnum) public testEnum?: TestEnum;
    @tInstance(TestInstance) public testInstance?: TestInstance;
    public testAny: any;
}

@typedec()
export class TestClass2 extends TestClass1 {
    @tString() public testString2?: string;
    @tBoolean() public testBool2?: boolean;
    @tNumber() public testNumber2?: number;
    @tSymbol() public testSymbol2?: number;
    @tEnum(TestEnum) public testEnum2?: TestEnum;
    @tInstance(TestInstance) public testInstance2?: TestInstance;
    public testAny2: any;
}

@typedec()
export class AnyParamClass {
    public testAny: any;
    constructor(testAny: any) {
        this.testAny = testAny;
    }
}

@typedec()
export class StringParamClass {
    public testString?: string;
    constructor(@tString() testString: string) {
        this.testString = testString;
    }
}

@typedec()
export class BooleanParamClass {
    public testBool?: boolean;
    constructor(@tBoolean() testBool: boolean) {
        this.testBool = testBool;
    }
}

@typedec()
export class NumberParamClass {
    public testNumber?: number;
    constructor(@tNumber() testNumber: number) {
        this.testNumber = testNumber;
    }
}

@typedec()
export class SymbolParamClass {
    public testSymbol?: symbol;
    constructor(@tSymbol() testSymbol: symbol) {
        this.testSymbol = testSymbol;
    }
}

@typedec()
export class EnumParamClass {
    public testEnum?: TestEnum;
    constructor(@tEnum(TestEnum) testEnum: TestEnum) {
        this.testEnum = testEnum;
    }
}

@typedec()
export class InstanceParamClass {
    public testInstance?: TestInstance;
    constructor(@tInstance(TestInstance) testInstance: TestInstance) {
        this.testInstance = testInstance;
    }
}
