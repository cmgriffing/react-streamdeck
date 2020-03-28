import * as React from "react";

/**
 * @class SDTextInput
 */

type RadioOption = {
  value: any;
  label: string;
};

export type Props = {
  /**
   * The initially selected value to be passed in.
   */
  value: any;
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change handler. It passes the raw event and the selected option's value up.
   */
  onChange: (event: any, value: any) => {};
  /**
   * The available options to be selected from.
   */
  options: RadioOption[];
};

export default function SDRadioInput(props: Props) {
  const { value, label, options, onChange } = props;

  const seed = Math.floor(Math.random() * 100000);

  return (
    <div data-type="radio" className="sdpi-item">
      <div className="sdpi-item-label">{label}</div>
      <div className="sdpi-item-value ">
        {options.map((option, index) => {
          return (
            <div className="sdpi-item-child">
              <input
                id={`radio-${seed}-option-${index}`}
                type="radio"
                name="radio-seed"
                value={option.value}
                onChange={event => {
                  event.target.value = option.value;
                  console.log("value type", typeof option.value);
                  onChange(event, option.value);
                }}
                checked={value === option.value}
              />
              <label
                htmlFor={`radio-${seed}-option-${index}`}
                className="sdpi-item-label"
              >
                <span></span>
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
