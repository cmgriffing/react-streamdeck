import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = {
  /**
   * The initial value to be passed in.
   */
  value: any;
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * This is the label that sits to the right of the checkbox. It handles a click event as well.
   */
  checkboxLabel: string;
  /**
   * The event and value passed back up from the component when changed. The value is used to not have to coerce the boolean from a string (due to HTML).
   */
  onChange: (event: any, value: any) => {};
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
