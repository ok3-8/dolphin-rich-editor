import { FunctionComponent } from "react";
import {
  createPlugins,
  createTablePlugin,
  Plate,
  TElement,
  createPlateUI,
} from "@udecode/plate";
import styled from "styled-components";
import PLUGINS from "../config/plugins";
import CONFIG from "../config";
import BalloonToolbarMarks from "./BalloonToolbarMarks";

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
