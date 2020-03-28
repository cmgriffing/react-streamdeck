import * as React from "react";

/**
 * @class SDSelectInput
 */

export type Props = {
  /**
   * The initially selected option value.
   */
  selectedOption: any;
  /**
   * The available options to be selected from.
   */
  options: { value: any; label: string }[];
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change event. It passes up the selected option's value.
   */
  onChange: (selectedValue: any) => {};
};

export default function SDSelectInput(props: Props) {
  const { selectedOption, options, label, onChange } = props;

  return (
    <div className="sdpi-item">
      <div className="sdpi-item-label">{label}</div>
      <select
        className="sdpi-item-value"
        onChange={event => {
          onChange(event.currentTarget.value);
        }}
        value={
          (
            options.find(option => {
              return option.value === selectedOption;
            }) || {
              value: "",
              label: ""
            }
          ).value
        }
      >
        <option key="'-999'" value=""></option>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
