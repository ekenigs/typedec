import { getMetadata } from "../src/metadata";
import { tString, tBoolean, tNumber, tSymbol, tEnum, tInstance } from "../src/decorators";

describe("decorators", () => {
    it("tString", () => {
        class TStringClass {
            @tString() public testString: string;
            constructor(@tString() testString: string) {
                this.testString = testString;
            }
        }

        expect(getMetadata(TStringClass)).toMatchSnapshot();
    });

    it("tBoolean", () => {
        class TBooleanClass {
            @tBoolean() public testBool: boolean;
            constructor(@tBoolean() testBool: boolean) {
                this.testBool = testBool;
            }
        }

        expect(getMetadata(TBooleanClass)).toMatchSnapshot();
    });

    it("tNumber", () => {
        class TNumberClass {
            @tNumber() public testNumber: number;
            constructor(@tNumber() testNumber: number) {
                this.testNumber = testNumber;
            }
        }

        expect(getMetadata(TNumberClass)).toMatchSnapshot();
    });

    it("tSymbol", () => {
        class TSymbolClass {
            @tSymbol() public testSymbol: symbol;
            constructor(@tSymbol() testSymbol: symbol) {
                this.testSymbol = testSymbol;
            }
        }

        expect(getMetadata(TSymbolClass)).toMatchSnapshot();
    });

    it("tEnum", () => {
        enum Enum {
            enum1 = "enum1",
            enum2 = "enum2",
        }
        class TEnumClass {
            @tEnum(Enum) public testEnum: any;
            constructor(@tEnum(Enum) testEnum: any) {
                this.testEnum = testEnum;
            }
        }

        expect(getMetadata(TEnumClass)).toMatchSnapshot();
    });

    describe("tInstance", () => {
        it("tInstance", () => {
            class TestClass {}
            class TInstanceClass {
                @tInstance(TestClass) public testInstance: any;
                constructor(@tInstance(TestClass) testInstance: any) {
                    this.testInstance = testInstance;
                }
            }

            expect(getMetadata(TInstanceClass)).toMatchSnapshot();
        });

        it("should throw an error because no options", () => {
            expect(() => {
                class TInstanceClass {
                    @tInstance() public testInstance: any;
                }

                return TInstanceClass;
            }).toThrowError("InstanceOptions must be a class");
        });

        it("should throw an error because options not a class", () => {
            expect(() => {
                class TInstanceClass {
                    @tInstance({} as any) public testInstance: any;
                }

                return TInstanceClass;
            }).toThrowError("InstanceOptions must be a class");
        });

        it("should throw an error because options has no a name", () => {
            expect(() => {
                class TInstanceClass {
                    @tInstance((() => true) as any) public testInstance: any;
                }

                return TInstanceClass;
            }).toThrowError("InstanceOptions must be a class");
        });
    });
});
