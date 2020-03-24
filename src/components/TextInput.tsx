import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = { value: string; label: string; onChange: Function };

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
