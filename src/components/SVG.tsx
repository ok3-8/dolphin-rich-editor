import { forwardRef, FunctionComponent } from "react";
import styled from "styled-components";
import svgUrl from "../assets/remixicon.symbol.svg";

interface SVGProps {
  icon: string;
  className?: string;
  title?: string;
}

const SVG = forwardRef<SVGSVGElement, SVGProps>(
  ({ icon, className, title }, ref) => {
    const path = `${svgUrl}#${icon}`;
    return (
      <StyledSVG className={`remix ${className || ""}`} ref={ref}>
        {title && <title>{title}</title>}
        <use xlinkHref={path}></use>
      </StyledSVG>
    );
  }
);

const StyledSVG = styled("svg")`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

export default SVG;
