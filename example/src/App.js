/* global $SD */
import React, { useState, useEffect, useReducer } from "react";

import {
  ExampleComponent,
  createUseSDAction,
  SDNumberInput,
  SDTextInput,
  SDSelectInput,
  SDList,
  SDListSelect,
  SDListMultiSelect,
  SDRangeSlider,
  SDRangeWithLabels,
  SDRadioInput,
  createUsePluginSettings,
  createUseGlobalSettings
} from "react-streamdeck";

export default function App() {
  const createGetSettings = _sd => () => {
    if (_sd.api.getSettings) {
      _sd.api.getSettings(_sd.uuid);
    } else {
      _sd.api.common.getSettings(_sd.uuid);
    }
  };

  const getSettings = createGetSettings($SD);
  useEffect(getSettings, []);

  const useSDAction = createUseSDAction({
    useState,
    useEffect
  });

  const connectedResult = useSDAction("connected");
  const sendToPropertyInspectorResult = useSDAction("sendToPropertyInspector");

  // const globalSettings = useSDAction("didReceiveGlobalSettings");

  const [settings, setSettings] = createUsePluginSettings({
    useState,
    useEffect,
    useReducer
  })(
    {
      buttonState: "",
      textState: "",
      numberState: 0,
      selectState: "",
      selectedListState: [],
      rangeSliderState: 50,
      radioState: null
    },
    connectedResult
  );

  console.log({
    connectedResult,
    sendToPropertyInspectorResult,
    settings
  });

  return (
    <div>
      <ExampleComponent
        text={settings.buttonState}
        onSettingsChange={() => {
          const newState = {
            ...settings,
            buttonState: `testing ${Date.now()}`
          };
          setSettings(newState);
        }}
      />
      <SDTextInput
        value={settings.textState}
        label="Testing"
        onChange={event => {
          const newState = {
            ...settings,
            textState: event.target.value
          };
          setSettings(newState);
        }}
      />
      <SDNumberInput
        value={settings.numberState}
        label="Testing"
        onChange={event => {
          const newState = {
            ...settings,
            numberState: event.target.value
          };
          setSettings(newState);
        }}
      />
      <SDSelectInput
        label="Testing"
        selectedOption={settings.selectState}
        options={[
          {
            label: "test1",
            value: "test1"
          },
          {
            label: "test2",
            value: "test2"
          },
          {
            label: "test3",
            value: "test3"
          }
        ]}
        onChange={event => {
          const newState = {
            ...settings,
            selectState: event
          };
          setSettings(newState);
        }}
      />

      <SDList
        label="Test List"
        options={[
          {
            label: "test1",
            value: "test1"
          },
          {
            label: "test2",
            value: "test2"
          },
          {
            label: "test3",
            value: "test3"
          }
        ]}
      />

      <SDListSelect
        label="Test List"
        selectedOptions={settings.selectedListState}
        options={[
          {
            label: "test1",
            value: "test1"
          },
          {
            label: "test2",
            value: "test2"
          },
          {
            label: "test3",
            value: "test3"
          }
        ]}
        onChange={event => {
          const newState = {
            ...settings,
            selectedListState: event
          };
          setSettings(newState);
        }}
      />

      <SDListMultiSelect
        label="Test List"
        selectedOptions={settings.selectedListState}
        options={[
          {
            label: "test1",
            value: "test1"
          },
          {
            label: "test2",
            value: "test2"
          },
          {
            label: "test3",
            value: "test3"
          }
        ]}
        onChange={event => {
          const newState = {
            ...settings,
            selectedListState: event
          };
          setSettings(newState);
        }}
      />

      <SDRangeSlider
        onChange={event => {
          const newState = {
            ...settings,
            rangeSliderState: +event.target.value
          };
          setSettings(newState);
        }}
        label="Range Slider"
        min={0}
        max={100}
        value={+settings.rangeSliderState}
      />

      <SDRangeWithLabels
        onChange={event => {
          const newState = {
            ...settings,
            rangeSliderState: +event.target.value
          };
          setSettings(newState);
        }}
        label="Range Slider"
        min={0}
        max={100}
        value={+settings.rangeSliderState}
      />
      <SDRangeWithLabels
        onChange={event => {
          const newState = {
            ...settings,
            rangeSliderState: +event.target.value
          };
          setSettings(newState);
        }}
        label="Range Slider"
        min={0}
        max={100}
        step={25}
        value={+settings.rangeSliderState}
      />
      <SDRadioInput
        label="Radio Test"
        value={settings.radioState}
        options={[
          {
            label: "On",
            value: true
          },
          {
            label: "Off",
            value: false
          }
        ]}
        onChange={(event, value) => {
          console.log("radio change", event.target.value, value);

          const newState = {
            ...settings,
            radioState: value
          };
          setSettings(newState);
        }}
      />
    </div>
  );
}
