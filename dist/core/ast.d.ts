import { internals } from "./internals";
export declare const FOR_H: (key: string) => string;
export declare const FOR_T: () => string;
export declare const loopIndex: (a: internals.kBUF) => internals.RLoopBUF;
export declare const keyIndex: (a: internals.kBUF) => number;
export declare const translateKeyName: (t_k: string) => string;
export declare const replaceKey: (a: internals.vBUF) => string;
export declare class Parser {
    static _delim: string;
    static _renderKey: string;
    static __renderKey__: string;
    static _partialKey: string;
    static __partialKey__: string;
    static _loopKey: string;
    static __loopKey__: string;
    static _loopSignature: string;
    static _keySignature: string;
    static _partialSignature: string;
    private static _replaceSignature;
    static hasPartial(a: internals.kBUF): boolean;
    static partialIndex(a: internals.kBUF): number;
    static matchPartials(target: internals.AST_TARGET): RegExpMatchArray;
    static replacePartial(a: internals.vBUF): string;
    static hasKey(a: internals.kBUF): boolean;
    static matchKeys(target: internals.AST_TARGET): RegExpMatchArray;
    static hasLoop(a: internals.kBUF): boolean;
    static matchLoops(target: internals.AST_TARGET): string[];
}
