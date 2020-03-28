import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = {
  /**
   * The initial text value
   */
  value: string;
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change event. It passes the event directly.
   */
  onChange: (event: any) => {};
};

export default function SDTextInput(props: Props) {
  const { value, label, onChange } = props;

  return (
    <div className="sdpi-item">
      <label className="sdpi-item-label">{label}</label>
      <input
        className="sdpi-item-value"
        type="text"
        value={value}
        onChange={event => {
          onChange(event);
        }}
      />
    </div>
  );
}
