import * as React from "react";

/**
 * @class SDTextInput
 */

type MultiCheckboxAvailableOption = {
  key: string;
  value: boolean;
  label: string;
};

export type Props = {
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The available options and their checked value.
   */
  options: MultiCheckboxAvailableOption[];
  /**
   * The change handler. It passes the raw event and the changed options with their updated values.
   */
  onChange: (event: any, options: MultiCheckboxAvailableOption[]) => {};
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
                    return newOption as MultiCheckboxAvailableOption;
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
