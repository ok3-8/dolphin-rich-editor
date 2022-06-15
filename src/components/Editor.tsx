import { FunctionComponent } from "react";
import {
  BalloonToolbar,
  BlockToolbarButton,
  createPlugins,
  createTablePlugin,
  ELEMENT_H2,
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  ListToolbarButton,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_UNDERLINE,
  Plate,
  TElement,
  usePlateEditorRef,
  createPlateUI,
} from "@udecode/plate";
import styled from "styled-components";
import { Placement } from "tippy.js";
import { TippyProps } from "@tippyjs/react";
import SVG from "./SVG";
import PLUGINS from "../config/plugins";
import CONFIG from "../config";

interface EditorProps {
  initialVals?: TElement[];
  value?: TElement[];
  onChange?: (value: TElement[]) => void;
  readOnly?: boolean;
}

const Editor: FunctionComponent<EditorProps> = ({
  initialVals,
  value,
  onChange,
  readOnly,
}) => {
  const BalloonToolbarMarks = () => {
    const editor = usePlateEditorRef();
    const arrow = false;
    const theme = "dark";
    const popperOptions = {
      placement: "top" as Placement,
    };
    const tooltip: TippyProps = {
      arrow: true,
      delay: 0,
      duration: [200, 0],
      hideOnClick: false,
      offset: [0, 17],
      placement: "top",
    };
    return (
      <BalloonToolbar popperOptions={popperOptions} theme={theme} arrow={arrow}>
        <MarkToolbarButton
          type={getPluginType(editor!, MARK_BOLD)}
          icon={<SVG icon="ri-bold" />}
          tooltip={{
            content: "Bold",
            ...tooltip,
          }}
        />
        <MarkToolbarButton
          type={getPluginType(editor!, MARK_ITALIC)}
          icon={<SVG icon="ri-italic" />}
          tooltip={{
            content: "Italic",
            ...tooltip,
          }}
        />
        <MarkToolbarButton
          type={getPluginType(editor!, MARK_HIGHLIGHT)}
          icon={<SVG icon="ri-edit-2-line" />}
          tooltip={{
            content: "Highlight",
            ...tooltip,
          }}
        />
        <MarkToolbarButton
          type={getPluginType(editor!, MARK_UNDERLINE)}
          icon={<SVG icon="ri-underline" />}
          tooltip={{
            content: "Underline",
            ...tooltip,
          }}
        />
        <ListToolbarButton
          type={getPluginType(editor!, ELEMENT_UL)}
          icon={<SVG icon="ri-list-unordered" />}
          tooltip={{
            content: "Un-order List",
            ...tooltip,
          }}
        />
        <ListToolbarButton
          type={getPluginType(editor!, ELEMENT_OL)}
          icon={<SVG icon="ri-list-ordered" />}
          tooltip={{
            content: "Order List",
            ...tooltip,
          }}
        />
        <BlockToolbarButton
          type={getPluginType(editor!, ELEMENT_H2)}
          icon={<SVG icon="ri-heading" />}
          tooltip={{
            content: "Heading",
            ...tooltip,
          }}
        />
      </BalloonToolbar>
    );
  };

  const plugins = createPlugins([...PLUGINS.basicNodes, createTablePlugin()], {
    components: createPlateUI(),
  });
  const onChangeOutput = (value: TElement[]) => {
    if (onChange) {
      onChange(value);
    }
  };

  const editProps = Object.assign(CONFIG.editableProps, {
    readOnly,
  });

  return (
    <Typography className="prose prose-sm max-w-none bg-white dark:prose-invert dark:bg-pb-bg dark:text-white dark:prose-th:bg-zinc-700 dark:prose-td:bg-pb-bg">
      <Plate
        onChange={onChangeOutput}
        value={value}
        initialValue={initialVals}
        plugins={plugins}
        editableProps={editProps}
      >
        <BalloonToolbarMarks />
      </Plate>
    </Typography>
  );
};

const Typography = styled.div`
  p,
  label,
  span,
  div,
  li {
    font-size: inherit;
    line-break: inherit;
    color: inherit;
    font-weight: inherit;
  }
  li {
    list-style: inherit;
  }
`;
export default Editor;
