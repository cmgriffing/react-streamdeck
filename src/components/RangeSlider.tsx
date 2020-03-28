import * as React from "react";

/**
 * @class SDRangeSlider
 */

export type Props = {
  /**
   * The initial value to be passed in.
   */
  value: number;
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change event. Passes the raw event back up when the bar is changed. When a min or max is clicked it passes a stubbed event with just a target.value.
   */
  onChange: (event: any) => {};
  /**
   * The minimum numeric value allowed
   */
  min: number;
  /**
   * The maximum numeric value allowed.
   */
  max: number;
  /**
   * The numeric value to increment or decrement the slider by.
   */
  step: number;
  /**
   * When true, shows the min and max values on their respective ends of the slider.
   */
  showMinMax: boolean;
};

export function SDRangeSlider(props: Props) {
  const { value, label, onChange, min, max, step, showMinMax } = props;

  const seed = Math.floor(Math.random() * 100000);

  return (
    <div data-type="range" className="sdpi-item">
      <div className="sdpi-item-label">{label}</div>
      <div className="sdpi-item-value">
        {showMinMax && (
          <span
            className="clickable"
            onClick={() => {
              onChange({
                target: {
                  value: +min
                }
              });
            }}
          >
            {min}
          </span>
        )}
        <input
          className="floating-tooltip"
          type="range"
          min={min}
          max={max}
          value={value}
          step={step || 1}
          onChange={event => {
            onChange(event);
          }}
          list={"steplist" + seed}
        />
        {step && step !== 1 && (
          <datalist id={"steplist" + seed}>
            <option value="25"></option>
            <option value="50"></option>
            <option value="75"></option>
          </datalist>
        )}
        {showMinMax && (
          <span
            className="clickable"
            onClick={() => {
              onChange({
                target: {
                  value: +max
                }
              });
            }}
          >
            {max}
          </span>
        )}
      </div>
    </div>
  );
}

export function SDRangeWithLabels(props: Props) {
  const newProps: Props = {
    showMinMax: true,
    ...props
  };
  return <SDRangeSlider {...newProps} />;
}
