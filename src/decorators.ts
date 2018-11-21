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
    TypeDecoratorFactoryWithOptions,
    TypeDecoratorFactoryWithoutOptions,
} from "./types";

type WithOptions<O> = TypeDecoratorFactoryWithOptions<O>;
type WithoutOptions<O> = TypeDecoratorFactoryWithoutOptions<O>;

function createTypeDecoratorFactory<O extends Options>(type: Types): WithOptions<O> | WithoutOptions<O> {
    return <T>(options?: T): TypeDecorator => {
        return (target: any, property?: string, index?: number): void => {
            const metadata: any = { type, options };

            if (type === Types.instance) {
                if (!options || typeof options !== "function" || !options.name) {
                    throw new TypeError("InstanceOptions must be a class");
                }

                metadata.options = options.name;
            }

            if (typeof index === "number") {
                addMetadata(target, index.toString(), metadata);
            } else {
                addMetadata(target.constructor, property as string, metadata);
            }
        };
    };
}

export const tString: WithoutOptions<StringOptions> = createTypeDecoratorFactory(
    Types.string) as WithoutOptions<StringOptions>;
export const tBoolean: WithoutOptions<BooleanOptions> = createTypeDecoratorFactory(
    Types.boolean) as WithoutOptions<BooleanOptions>;
export const tNumber: WithoutOptions<NumberOptions> = createTypeDecoratorFactory(
    Types.number) as WithoutOptions<NumberOptions>;
export const tSymbol: WithoutOptions<SymbolOptions> = createTypeDecoratorFactory(
    Types.symbol) as WithoutOptions<SymbolOptions>;
export const tEnum: WithOptions<EnumOptions> = createTypeDecoratorFactory(Types.enum);
export const tInstance: WithOptions<InstanceOptions> = createTypeDecoratorFactory(Types.instance);
