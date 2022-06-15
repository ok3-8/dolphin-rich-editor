import {
  getRootProps,
  StyledElementProps,
  TElement,
  Value,
} from "@udecode/plate";

interface VoidElementProps<V extends Value>
  extends StyledElementProps<V, TElement> {
  as?: "h3" | "h4";
  id?: string;
}
export const VoidElement = <V extends Value>(props: VoidElementProps<V>) => {
  const { attributes, children, nodeProps, element } = props;
  const rootProps = getRootProps(props);
  const text = element.children[0].text;
  const CustTag = element.as === "h3" ? "h3" : "h4";
  return (
    <CustTag
      {...attributes}
      data-slate-value={text}
      data-business-id={element.id}
      contentEditable={false}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </CustTag>
  );
};
