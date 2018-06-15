export enum Types {
    string = "string",
    number = "number",
    boolean = "boolean",
    symbol = "symbol",
    enum = "enum",
    instance = "instance",
}

export type StringOptions = {};
export type BooleanOptions = {};
export type NumberOptions = {};
export type SymbolOptions = {};
export type EnumOptions = {};
export type InstanceOptions = {new(...params: any[]): {}};
export type Options = StringOptions
    | BooleanOptions
    | NumberOptions
    | SymbolOptions
    | EnumOptions
    | InstanceOptions;

export interface IConfig {
    type: Types;
    options: Options;
}

export interface IMetadata {
    [key: string]: IConfig;
}

export type TypedecDecorator = <T extends {new(...params: any[]): {}}>(constructor: T) => T;
export type TypeDecorator = (target: any, property?: string, index?: number) => void;
export type TypeDecoratorFactory<O extends Options> = (options?: O) => TypeDecorator;
