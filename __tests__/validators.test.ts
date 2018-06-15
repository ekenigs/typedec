import { validateProperty } from "../src/validators";
import { Types } from "../src/types";

describe("validators", () => {
    describe("validateProperty", () => {
        describe("string", () => {
            it("should pass", () => {
                expect(() => validateProperty(
                    { str: { type: Types.string, options: {} } },
                    "str",
                    "foo",
                )).not.toThrowError();
            });

            it("should throw Error", () => {
                expect(() => validateProperty(
                    { str: { type: Types.string, options: {} } },
                    "str",
                    undefined,
                )).toThrowError("must be a string");
            });
        });

        describe("boolean", () => {
            it("should pass", () => {
                expect(() => validateProperty(
                    { bool: { type: Types.boolean, options: {} } },
                    "bool",
                    true,
                )).not.toThrowError();
            });

            it("should throw Error", () => {
                expect(() => validateProperty(
                    { bool: { type: Types.boolean, options: {} } },
                    "bool",
                    undefined,
                )).toThrowError("must be an boolean");
            });
        });

        describe("number", () => {
            it("should pass", () => {
                expect(() => validateProperty(
                    { num: { type: Types.number, options: {} } },
                    "num",
                    999,
                )).not.toThrowError();
            });

            it("should throw Error", () => {
                expect(() => validateProperty(
                    { num: { type: Types.number, options: {} } },
                    "num",
                    undefined,
                )).toThrowError("must be a number");
            });
        });

        describe("symbol", () => {
            it("should pass", () => {
                expect(() => validateProperty(
                    { sym: { type: Types.symbol, options: {} } },
                    "sym",
                    Symbol(),
                )).not.toThrowError();
            });

            it("should throw Error", () => {
                expect(() => validateProperty(
                    { sym: { type: Types.symbol, options: {} } },
                    "sym",
                    undefined,
                )).toThrowError("must be a symbol");
            });
        });

        describe("enum", () => {
            it("should pass", () => {
                expect(() => validateProperty(
                    { enum: { type: Types.enum, options: [ "ONE", "TWO" ] } },
                    "enum",
                    "ONE",
                )).not.toThrowError();
            });

            it("should throw Error", () => {
                expect(() => validateProperty(
                    { enum: { type: Types.enum, options: [ "ONE", "TWO" ] } },
                    "enum",
                    undefined,
                )).toThrowError("must be on of ONE,TWO");
            });
        });

        describe("instance", () => {
            it("should pass", () => {
                class TestClass {}
                expect(() => validateProperty(
                    { instance: { type: Types.instance, options: "TestClass" } },
                    "instance",
                    new TestClass(),
                )).not.toThrowError();
            });

            it("should throw Error because value undefined", () => {
                expect(() => validateProperty(
                    { instance: { type: Types.instance, options: "TestClass" } },
                    "instance",
                    undefined,
                )).toThrowError("must be an instance of TestClass");
            });

            it("should throw Error because value is wrong instance", () => {
                class TestClass2 {}
                expect(() => validateProperty(
                    { instance: { type: Types.instance, options: "TestClass" } },
                    "instance",
                    new TestClass2(),
                )).toThrowError("must be an instance of TestClass");
            });
        });
    });
});
