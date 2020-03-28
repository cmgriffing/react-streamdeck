import * as React from "react";
/**
 * @class SDButton
 */

export type Props = {
  /**
   * The text that will be inside the button
   */
  text: string;
  /**
   * The click handler. It passes the synthetic click event directly back up.
   */
  onClick: (event: any) => {};
};

export default function SDButton(props: Props) {
  const { text, onClick } = props;

  return (
    <button
      onClick={event => {
        onClick(event);
      }}
    >
      {text}
    </button>
  );
}
