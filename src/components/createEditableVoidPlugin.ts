import { createPluginFactory } from "@udecode/plate";

export const ELEMENT_VOID_BLOCK='void-block';

export const createEditableVoidPlugin = createPluginFactory({
    key:ELEMENT_VOID_BLOCK,
    isElement:true,
    isVoid:true,
})