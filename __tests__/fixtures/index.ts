export class TestInstance {}
export enum TestEnum {
    A = "A",
    B = "B",
}

export const TEST_VALUES: any[] = [
    "TEST_STRING",
    true,
    999,
    [],
    {},
    undefined,
    null,
    Symbol(),
    TestEnum.A,
    () => undefined,
    new TestInstance(),
];
