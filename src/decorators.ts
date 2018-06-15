import { addMetadata } from "./metadata";
import {
    Types,
    Options,
    StringOptions,
    BooleanOptions,
    NumberOptions,
    SymbolOptions,
    EnumOptions,
    InstanceOptions,
    TypeDecorator,
    TypeDecoratorFactory,
} from "./types";

function createTypeDecoratorFactory<O extends Options>(type: Types): TypeDecoratorFactory<O> {
    return <T>(options: T): TypeDecorator => {
        return (target: any, property?: string, index?: number): void => {
            const metadata: any = { type, options };

            if (type === Types.enum) {
                metadata.options = Object.values(options);
            }

            if (type === Types.instance) {
                if (!options || typeof options !== "function" || !(options as any).name) {
                    throw new TypeError("InstanceOptions must be a class");
                }

                metadata.options = (options as any).name;
            }

            if (typeof index === "number") {
                addMetadata(target, index.toString(), metadata);
            } else {
                addMetadata(target.constructor, property as string, metadata);
            }
        };
    };
}

export const tString: TypeDecoratorFactory<StringOptions> = createTypeDecoratorFactory(Types.string);
export const tBoolean: TypeDecoratorFactory<BooleanOptions> = createTypeDecoratorFactory(Types.boolean);
export const tNumber: TypeDecoratorFactory<NumberOptions> = createTypeDecoratorFactory(Types.number);
export const tSymbol: TypeDecoratorFactory<SymbolOptions> = createTypeDecoratorFactory(Types.symbol);
export const tEnum: TypeDecoratorFactory<EnumOptions> = createTypeDecoratorFactory(Types.enum);
export const tInstance: TypeDecoratorFactory<InstanceOptions> = createTypeDecoratorFactory(Types.instance);
