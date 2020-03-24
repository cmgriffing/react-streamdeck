import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = {
  value: any;
  label: string;
  checkboxLabel: string;
  onChange: Function;
};

export default function SDCheckbox(props: Props) {
  const { value, label, onChange, checkboxLabel } = props;

  const seed = Math.floor(Math.random() * 100000);

  return (
    <div data-type="checkbox" className="sdpi-item">
      <div className="sdpi-item-label">{label}</div>
      <div className="sdpi-item-value">
        <div className="sdpi-item-child">
          <input
            id={`singlecheck-${seed}`}
            type="checkbox"
            checked={value}
            onChange={event => {
              onChange(event, !value);
            }}
          />
          <label htmlFor={`singlecheck-${seed}`} className="sdpi-item-label">
            <span></span>
            {checkboxLabel}
          </label>
        </div>
      </div>
    </div>
  );
}
