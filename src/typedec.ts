import { IMetadata, TypedecDecorator } from "./types";
import { getMetadata } from "./metadata";
import { validateProperty, validateParameters } from "./validators";

function createProxy(metadata: IMetadata, object: any): ProxyConstructor {
    return new Proxy(object, {
        set(target: any, property: string, value: any): boolean {
            validateProperty(metadata, property, value);

            target[property] = value;

            return true;
        },
    });
}

export function typedec(): TypedecDecorator {
    return <T extends {new(...params: any[]): {}}>(constructor: T): T => {
        return class extends constructor {
            constructor(...params: any[]) {
                const metadata: IMetadata = getMetadata(constructor);

                validateParameters(metadata, params);
                super(...params);

                return createProxy(metadata, this);
            }
        };
    };
}

export default typedec;
