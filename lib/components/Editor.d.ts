import { FunctionComponent } from "react";
import { TElement } from "@udecode/plate";
interface EditorProps {
    initialVals?: TElement[];
    value?: TElement[];
    onChange?: (value: TElement[]) => void;
    readOnly?: boolean;
}
declare const Editor: FunctionComponent<EditorProps>;
export default Editor;
