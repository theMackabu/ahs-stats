import React, { Suspense } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import tw from "twin.macro";

export type SpinnerSize = "small" | "base" | "large" | "xsmall";

interface Props {
  size?: SpinnerSize;
  centered?: boolean;
  isBlue?: boolean;
}

interface Spinner extends React.FC<Props> {
  Size: Record<"SMALL" | "BASE" | "LARGE" | "XSMALL", SpinnerSize>;
  Suspense: React.FC<Props>;
}

const spin = keyframes`
	to { transform: rotate(360deg); }
`;

// noinspection CssOverwrittenProperties
const SpinnerComponent = styled.div<Props>`
  ${tw`w-8 h-8`};
  border-width: 3px;
  border-radius: 50%;
  animation: ${spin} 1s cubic-bezier(0.55, 0.25, 0.25, 0.7) infinite;

  ${(props) =>
    props.size === "small"
      ? tw`w-4 h-4 border-2`
      : props.size === "large"
      ? css`
          ${tw`w-16 h-16`};
          border-width: 6px;
        `
      : props.size === "xsmall"
      ? tw`w-2 h-2 border`
      : null};

  border-color: ${(props) => (!props.isBlue ? "rgba(255, 255, 255, 0.2)" : "hsla(212, 92%, 43%, 0.2)")};
  border-top-color: ${(props) => (!props.isBlue ? "rgb(255, 255, 255)" : "hsl(212, 92%, 43%)")};
`;

const Spinner: Spinner = ({ centered, ...props }) =>
  centered ? (
    <div css={[tw`flex justify-center items-center`, props.size === "large" ? tw`m-20` : tw`m-1.5`]}>
      <SpinnerComponent {...props} />
    </div>
  ) : (
    <SpinnerComponent {...props} />
  );
Spinner.displayName = "Spinner";

Spinner.Size = {
  SMALL: "small",
  BASE: "base",
  LARGE: "large",
  XSMALL: "xsmall",
};

Spinner.Suspense = ({ children, centered = true, size = Spinner.Size.LARGE, ...props }) => (
  <Suspense fallback={<Spinner centered={centered} size={size} {...props} />}>{children}</Suspense>
);
Spinner.Suspense.displayName = "Spinner.Suspense";

export default Spinner;
