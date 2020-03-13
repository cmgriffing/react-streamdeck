import * as React from "react";
// import useSDAction from "../hooks/action";
// import styles from "../styles.css";
/**
 * @class ExampleComponent
 */

// export type Props = { text: string };

export default function ExampleComponent(props: any) {
  const { text } = props;

  return (
    <button
      onClick={_ => {
        props.onSettingsChange("testing");
      }}
    >
      Example Component: {text}
    </button>
  );
}
