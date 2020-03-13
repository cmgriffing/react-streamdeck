import * as React from "react";
/**
 * @class SDButton
 */

export type Props = {
  text: string;
  onClick: Function;
};

export default function SDButton(props: Props) {
  const { text, onClick } = props;

  return (
    <button
      onClick={_ => {
        onClick("testing");
      }}
    >
      {text}
    </button>
  );
}
