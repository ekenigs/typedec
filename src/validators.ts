import { Types, IMetadata, IConfig } from "./types";

function typeErrorFactory(message: string): TypeError {
    const error: TypeError = new TypeError(message);
    const limit: number = (Error as any).stackTraceLimit || 10;

    (Error as any).stackTraceLimit = limit + 6;

    if (error.stack) {
        error.stack = error.stack
            .split("\n")
            .filter((value: string) => !/node_modules.*typedec/.test(value))
            .filter((value: string, index: number) => {
                return !(index === 1 && value.includes("at Array.forEach (<anonymous>)"));
            })
            .join("\n");
    }

    (Error as any).stackTraceLimit = limit;

    return error;
}

export function validateString(property: string, value: any): void {
    if (typeof value !== "string") {
        throw typeErrorFactory(`${property} must be a string`);
    }
}

export function validateBoolean(property: string, value: any): void {
    if (typeof value !== "boolean") {
        throw typeErrorFactory(`${property} must be an boolean`);
    }
}

export function validateNumber(property: string, value: any): void {
    if (typeof value !== "number") {
        throw typeErrorFactory(`${property} must be a number`);
    }
}

export function validateSymbol(property: string, value: any): void {
    if (typeof value !== "symbol") {
        throw typeErrorFactory(`${property} must be a symbol`);
    }
}

export function validateEnum(property: string, value: any, options: any): void {
    const validValues: string[] = Object.values(options);

    if (!validValues.includes(value)) {
        throw typeErrorFactory(`${property} must be one of ${validValues}`);
    }
}

export function validateInstance(property: string, value: any, options: any): void {
    if (!value || !value.constructor || !value.constructor.name || value.constructor.name !== options) {
        throw typeErrorFactory(`${property} must be an instance of ${options}`);
    }
}

export function validateType(config: IConfig, property: string, value: any): void {
    switch (config.type) {
        case Types.string:
            validateString(property, value);
            break;

        case Types.boolean:
            validateBoolean(property, value);
            break;

        case Types.number:
            validateNumber(property, value);
            break;

        case Types.symbol:
            validateSymbol(property, value);
            break;

        case Types.enum:
            validateEnum(property, value, config.options);
            break;

        case Types.instance:
            validateInstance(property, value, config.options);
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

    validateType(config, property, value);
}

export function validateParameters(metadata: IMetadata, parameters: any[]): void {
    parameters.forEach((value: any, index: number) => {
        validateProperty(metadata, index.toString(), value);
    });
}
