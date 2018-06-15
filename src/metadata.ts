import "reflect-metadata";

import { IMetadata } from "./types";
import { TYPEDEC_METADATA } from "./constants";

export function getMetadata(target: any): IMetadata {
    return Reflect.getMetadata(TYPEDEC_METADATA, target) || {};
}

export function addMetadata(target: any, key: string, value: any): void {
    const metadata: IMetadata = {
        ...getMetadata(target),
        [key]: value,
    };

    Reflect.defineMetadata(TYPEDEC_METADATA, metadata, target);
}
