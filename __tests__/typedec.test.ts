import { testClassProperty, testClassParameter } from "./util";
import {
    TestClass1,
    TestClass2,
    AnyParamClass,
    StringParamClass,
    BooleanParamClass,
    NumberParamClass,
    SymbolParamClass,
    InstanceParamClass,
 } from "./fixtures/typedec.fixtures";

describe("typedec", () => {
    describe("properties", () => {
        it("any", () => {
            expect(testClassProperty(TestClass1, "testAny")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testAny2")).toMatchSnapshot();
        });

        it("string", () => {
            expect(testClassProperty(TestClass1, "testString")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testString")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testString2")).toMatchSnapshot();
        });

        it("boolean", () => {
            expect(testClassProperty(TestClass1, "testBool")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testBool")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testBool2")).toMatchSnapshot();
        });

        it("number", () => {
            expect(testClassProperty(TestClass1, "testNumber")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testNumber")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testNumber2")).toMatchSnapshot();
        });

        it("symbol", () => {
            expect(testClassProperty(TestClass1, "testSymbol")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testSymbol")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testSymbol2")).toMatchSnapshot();
        });

        it("enum", () => {
            expect(testClassProperty(TestClass1, "testEnum")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testEnum")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testEnum2")).toMatchSnapshot();
        });

        it("instance", () => {
            expect(testClassProperty(TestClass1, "testInstance")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testInstance")).toMatchSnapshot();
            expect(testClassProperty(TestClass2, "testInstance2")).toMatchSnapshot();
        });
    });

    describe("parameters", () => {
        it("any", () => {
            expect(testClassParameter(AnyParamClass)).toMatchSnapshot();
        });

        it("string", () => {
            expect(testClassParameter(StringParamClass)).toMatchSnapshot();
        });

        it("boolean", () => {
            expect(testClassParameter(BooleanParamClass)).toMatchSnapshot();
        });

        it("number", () => {
            expect(testClassParameter(NumberParamClass)).toMatchSnapshot();
        });

        it("symbol", () => {
            expect(testClassParameter(SymbolParamClass)).toMatchSnapshot();
        });

        it("instance", () => {
            expect(testClassParameter(InstanceParamClass)).toMatchSnapshot();
        });
    });
});
