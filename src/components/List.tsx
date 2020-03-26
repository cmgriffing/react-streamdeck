import * as React from "react";
import classNames from "classnames";

enum OrderedListTypes {
  lowerAlpha = "a",
  upperAlpha = "A",
  lowerRoman = "i",
  upperRoman = "I",
  numeric = "1"
}

/**
 * @class SDList
 */

export type Props = {
  selectedOptions: any[];
  options: { value: any; label: string }[];
  label: string;
  onChange: Function;
  isSelectable: boolean;
  isMultiSelect: boolean;
  isOrdered: boolean;
  orderedOptions?: {
    isReversed: boolean;
    start: number;
    type: OrderedListTypes;
  };
};

export function SDList(props: Props) {
  const {
    selectedOptions = [],
    options = [],
    label = "",
    onChange = () => {},
    isOrdered = false,
    orderedOptions = {
      isReversed: false,
      start: 1,
      type: OrderedListTypes.numeric
    },
    isSelectable = false,
    isMultiSelect = false
  } = props;

  const selectedOptionsSet = new Set(selectedOptions);

  const optionElements = options.map(option => (
    <li
      onClick={event => {
        console.log("handleItemClick", option.value, event);
        if (!isSelectable) {
          return;
        }

        if (selectedOptionsSet.has(option.value)) {
          if (isMultiSelect) {
            selectedOptionsSet.delete(option.value);
          } else {
            selectedOptionsSet.clear();
          }
        } else {
          if (!isMultiSelect) {
            selectedOptionsSet.clear();
          }
          selectedOptionsSet.add(option.value);
        }
        onChange(Array.from(selectedOptionsSet));
      }}
      className={
        isSelectable && selectedOptionsSet.has(option.value) ? "selected" : ""
      }
    >
      {option.label}
    </li>
  ));

  let listElement = (
    <ul
      className={classNames([
        "sdpi-item-value",
        { "multi-select": isSelectable && isMultiSelect }
      ])}
    >
      {optionElements}
    </ul>
  );
  if (isOrdered) {
    <ol
      className={classNames([
        "sdpi-item-value",
        { "multi-select": isSelectable && isMultiSelect }
      ])}
      type={orderedOptions.type}
      reversed={orderedOptions.isReversed}
      start={orderedOptions.start}
    >
      {optionElements}
    </ol>;
  }

  return (
    <div className="sdpi-item list">
      <div className="sdpi-item-label">{label}}</div>
      {listElement}
    </div>
  );
}

export function SDListSelect(props: Props) {
  const newProps: Props = {
    isSelectable: true,
    ...props
  };
  return <SDList {...newProps} />;
}

export function SDListMultiSelect(props: Props) {
  const newProps: Props = {
    isMultiSelect: true,
    ...props
  };
  return <SDListSelect {...newProps} />;
}
