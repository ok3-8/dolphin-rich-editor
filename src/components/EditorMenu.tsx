import { ColorPickerToolbarDropdown, MARK_COLOR } from "@udecode/plate";
import {
  deleteColumn,
  deleteRow,
  insertTable,
  insertTableColumn,
  insertTableRow,
} from "@udecode/plate-table";
import { TableToolbarButton } from "@udecode/plate-ui-table";
import { FunctionComponent } from "react";
import styled from "styled-components";
import SVG from "./SVG";

interface EditorMenuProps {}

const MENU_BTN_CLASS = {
  className: "dark:hover:text-slate-300",
};

const EditorMenu: FunctionComponent<EditorMenuProps> = () => {
  return (
    <ToolBar>
      <TableToolbarButton
        icon={
          <SVG icon="ri-grid-line" title="Insert Table" {...MENU_BTN_CLASS} />
        }
        transform={(editor) =>
          insertTable(editor, {
            rowCount: 1,
            colCount: 2,
            header: true,
          })
        }
      ></TableToolbarButton>
      <TableToolbarButton
        icon={
          <SVG
            icon="ri-insert-row-bottom"
            title="Insert Row"
            {...MENU_BTN_CLASS}
          />
        }
        transform={insertTableRow}
      ></TableToolbarButton>
      <TableToolbarButton
        icon={
          <SVG icon="ri-delete-row" title="Delete Row" {...MENU_BTN_CLASS} />
        }
        transform={deleteRow}
      ></TableToolbarButton>
      <TableToolbarButton
        icon={
          <SVG
            icon="ri-insert-column-right"
            title="Insert Column"
            {...MENU_BTN_CLASS}
          />
        }
        transform={insertTableColumn}
      ></TableToolbarButton>
      <TableToolbarButton
        icon={
          <SVG
            icon="ri-delete-column"
            title="Delete Column"
            {...MENU_BTN_CLASS}
          />
        }
        transform={deleteColumn}
      ></TableToolbarButton>
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<SVG icon="ri-font-color" />}
        selectedIcon={<SVG icon="ri-check-line" />}
        tooltip={{ content: "Text color" }}
      />
    </ToolBar>
  );
};

const ToolBar = styled.div.attrs({
  className: "bg-white dark:bg-pb-bg dark:text-white",
})`
  > button {
    margin-right: 4px;
  }
  display: inline-flex;
`;

export default EditorMenu;
