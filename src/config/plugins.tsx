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
  createCodeBlockPlugin
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
    createCodeBlockPlugin(),
    createEditableVoidPlugin({
      component: VoidElement,
    }),
  ],
  {
    components: createPlateUI(),
  }
);

const basicMarks =createPlugins( [
  createHeadingPlugin(),
  createParagraphPlugin(),
  createListPlugin(),
  createExitBreakPlugin(),
  createDeserializeDocxPlugin(),
  createJuicePlugin(),
  createSoftBreakPlugin(),
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