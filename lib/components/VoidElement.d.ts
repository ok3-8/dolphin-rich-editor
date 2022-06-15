/// <reference types="react" />
import { StyledElementProps, TElement, Value } from "@udecode/plate";
interface VoidElementProps<V extends Value> extends StyledElementProps<V, TElement> {
    as?: "h3" | "h4";
    id?: string;
}
export declare const VoidElement: <V extends Value>(props: VoidElementProps<V>) => JSX.Element;
export {};
