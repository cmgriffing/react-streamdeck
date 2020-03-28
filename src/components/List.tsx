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
  /**
   * The full list of options to be selected from.
   */
  options: { value: any; label: string }[];
  /**
   * The label. This sits on the outside left margin within the Property Inspector.
   */
  label: string;
  /**
   * The change event. It sends up the unique list of options selected. This is only used when `isSelectable` is true;
   */
  onChange: (values: any[]) => {};
  /**
   * Whether to allow a value or values to be selected.
   */
  isSelectable: boolean;
  /**
   * The initially selected values to be passed in.
   */
  selectedOptions: any[];
  /**
   * Whether multiple items can be selected. Depends on `isSelectable` being true.
   */
  isMultiSelect: boolean;
  /**
   * When true, shows html ordered list. `<ol>` instead of `<ul>`.
   */
  isOrdered: boolean;
  /**
   * The options able to be passed to an `<ol>`.
   */
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
    onChange = (values: any[]) => {
      console.log("values", values);
    },
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
      <div className="sdpi-item-label">{label}</div>
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
