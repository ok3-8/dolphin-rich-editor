import React, { useCallback } from "react";
import {
  focusEditor,
  getPluginType,
  select,
  setMarks,
  someNode,
  useEventPlateId,
  usePlateEditorRef,
  usePlateEditorState,
  withPlateEventProvider,
} from "@udecode/plate-core";
import {
  BlockToolbarButtonProps,
  MARK_COLOR,
  ToolbarButton,
} from "@udecode/plate";

/**
 * Toolbar button to toggle the type of elements in selection.
 */
interface ResetTextColorButtonProps extends Omit<BlockToolbarButtonProps,'type'> {
  originColor?: string;
}

export const ResetTextColorButton = withPlateEventProvider(
  ({
    id,
    inactiveType,
    active,
    originColor,
    icon,
    ...props
  }: ResetTextColorButtonProps) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;
    const editorRef = usePlateEditorRef(id)!;
    const type = getPluginType(editorRef, MARK_COLOR);

    const updateColor = useCallback(
      (e:React.MouseEvent<HTMLSpanElement> ) => {
        e.preventDefault();
        if (editorRef && editor && editor.selection) {
          select(editorRef, editor.selection);
          focusEditor(editorRef);
          setMarks(editor, { [type]: originColor });
        }
      },
      [editor, editorRef, type]
    );

    return (
      <ToolbarButton
        active={
          active ??
          (!!editor?.selection && someNode(editor, { match: { type } }))
        }
        onMouseDown={editor && updateColor}
        type={type}
        icon={icon}
        {...props}
      />
    );
  }
);
