import * as React from "react";

/**
 * @class SDTextInput
 */

export type Props = {
  value: string;
  label: string;
  onChange: Function;
  min: number;
  max: number;
  step: number;
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
