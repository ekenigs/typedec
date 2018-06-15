import { Types, IMetadata, IConfig } from "./types";

// TODO:
// improve error messages. e.g. show property name
// improve stacktrace
export function validateString(value: any): void {
    if (typeof value !== "string") {
        throw new TypeError(`must be a string`);
    }
}

export function validateBoolean(value: any): void {
    if (typeof value !== "boolean") {
        throw new TypeError(`must be an boolean`);
    }
}

export function validateNumber(value: any): void {
    if (typeof value !== "number") {
        throw new TypeError(`must be a number`);
    }
}

export function validateSymbol(value: any): void {
    if (typeof value !== "symbol") {
        throw new TypeError(`must be a symbol`);
    }
}

export function validateEnum(value: any, options: any[]): void {
    if (!options.includes(value)) {
        throw new TypeError(`must be on of ${options}`);
    }
}

export function validateInstance(value: any, options: any): void {
    if (!value || !value.constructor || !value.constructor.name || value.constructor.name !== options) {
        throw new TypeError(`must be an instance of ${options}`);
    }
}

export function validateType(config: IConfig, value: any): void {
    switch (config.type) {
        case Types.string:
            validateString(value);
            break;

        case Types.boolean:
            validateBoolean(value);
            break;

        case Types.number:
            validateNumber(value);
            break;

        case Types.symbol:
            validateSymbol(value);
            break;

        case Types.enum:
            validateEnum(value, config.options as any);
            break;

        case Types.instance:
            validateInstance(value, config.options);
            break;

        default:
            break;
    }
}

export function validateProperty(metadata: IMetadata, property: string, value: any): void {
    const config: IConfig | undefined = metadata[property];

    if (!config) {
        return;
    }

    validateType(config, value);
}

export function validateParameters(metadata: IMetadata, parameters: any[]): void {
    parameters.forEach((value: any, index: number) => {
        validateProperty(metadata, index.toString(), value);
    });
}
