import { TEST_VALUES } from "../fixtures";

export function testClassProperty(TestClass: any, prop: string): any[] {
    return TEST_VALUES.map((val: any) => {
        const testClass: any = new TestClass();

        try {
            testClass[prop] = val;

            return testClass;
        } catch (error) {
            return error;
        }
    });
}

export function testClassParameter(TestClass: any): any[] {
    return TEST_VALUES.map((val: any) => {
        try {
            return new TestClass(val);
        } catch (error) {
            return error;
        }
    });
}
