import {
  BalloonToolbar,
  BlockToolbarButton,
  ColorPickerToolbarDropdown,
  ELEMENT_H2,
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  ListToolbarButton,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_COLOR,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_UNDERLINE,
  usePlateEditorRef,
} from "@udecode/plate";
import { Placement } from "tippy.js";
import { TippyProps } from "@tippyjs/react";
import SVG from "./SVG";

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
    hideOnClick: true,
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

export default BalloonToolbarMarks;
