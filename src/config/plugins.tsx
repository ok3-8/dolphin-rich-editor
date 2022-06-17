import {
  createBoldPlugin,
  createDeserializeDocxPlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createListPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  createJuicePlugin,
  createSuperscriptPlugin,
  createSubscriptPlugin,
  createSoftBreakPlugin,
  createNodeIdPlugin,
  createComboboxPlugin,
  createFontColorPlugin,
  createResetNodePlugin,
  ELEMENT_LI,
  ELEMENT_LIC,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  isSelectionAtBlockStart,
  ELEMENT_UL,
  isBlockAboveEmpty
} from "@udecode/plate";
import { VoidElement } from "../components/VoidElement";
import {createEditableVoidPlugin} from '../components/createEditableVoidPlugin'

const basicElements = createPlugins(
  [
    createBoldPlugin(),
    createItalicPlugin(),
    createStrikethroughPlugin(),
    createUnderlinePlugin(),
    createSubscriptPlugin(),
    createHighlightPlugin(),
    createSuperscriptPlugin(),
    createNodeIdPlugin(),
    createComboboxPlugin(),
    createEditableVoidPlugin({
      component: VoidElement,
    }),
  ],
  {
    components: createPlateUI(),
  }
);

const resetBlockTypesCommonRule = {
  types: [ELEMENT_UL],
  defaultType: ELEMENT_PARAGRAPH,
};

const basicMarks =createPlugins( [
  createHeadingPlugin(),
  createParagraphPlugin(),
  createListPlugin(),
  createExitBreakPlugin(),
  createSoftBreakPlugin(),
  createDeserializeDocxPlugin(),
  createJuicePlugin(),
  createFontColorPlugin(),
  createResetNodePlugin({
    options: {
      rules: [
        {
          ...resetBlockTypesCommonRule,
          hotkey: 'Enter',
          predicate: isBlockAboveEmpty,
        },
      ],
    }
  }),
],
{
  components: createPlateUI(),
});

const PLUGINS = {
  basicNodes: createPlugins([...basicElements, ...basicMarks], {
    components: createPlateUI(),
  }),
};

export default PLUGINS;