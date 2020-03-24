import * as React from "react";

/**
 * @class SDNumberInput
 */

export type Props = { value: number; label: string; onChange: Function };

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
