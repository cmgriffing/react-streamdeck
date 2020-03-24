import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = {
  label: string;
  options: {
    key: string;
    value: boolean;
    label: string;
  }[];
  onChange: Function;
};

export default function SDMultiCheckbox(props: Props) {
  const { label, onChange, options } = props;

  const seed = Math.floor(Math.random() * 100000);

  return (
    <div data-type="checkbox" className="sdpi-item">
      <div className="sdpi-item-label">{label}</div>
      <div className="sdpi-item-value min100">
        {options.map((option, index) => {
          return (
            <div className="sdpi-item-child">
              <input
                id={`multicheck-${seed}-option-${index}`}
                type="checkbox"
                checked={option.value}
                onChange={event => {
                  const newOptions = options.map(newOption => {
                    if (option.key === newOption.key) {
                      newOption.value = !newOption.value;
                    }
                    return newOption;
                  });
                  onChange(event, newOptions);
                }}
              />
              <label
                htmlFor={`multicheck-${seed}-option-${index}`}
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
