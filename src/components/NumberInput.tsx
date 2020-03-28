import * as React from "react";

/**
 * @class SDNumberInput
 */

export type Props = {
  /**
   * The initial numeric value to be passed in.
   */
  value: number;
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change handler. It passes the event up directly.
   */
  onChange: (event: any) => {};
};

export default function SDNumberInput(props: Props) {
  const { value, label, onChange } = props;

  return (
    <div className="sdpi-item">
      <label className="sdpi-item-label">{label}</label>
      <input
        className="sdpi-item-value"
        type="number"
        value={value}
        onChange={event => {
          onChange(event);
        }}
      />
    </div>
  );
}
