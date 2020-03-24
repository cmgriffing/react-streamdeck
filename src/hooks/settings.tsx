declare const $SD: any;

import createSDAction from "./action";
import createUseBaseSettings from "./baseSettings";

function createUseSettings(settingsEvent: string) {
  return function(hooks: {
    useReducer: Function;
    useEffect: Function;
    useState: Function;
  }) {
    const { useReducer, useEffect, useState } = hooks;
    const useSettings = createUseBaseSettings(useReducer, useEffect);
    const useSDAction = createSDAction({
      useState,
      useEffect
    });
    return function(initialSettings: any, connectedResult: any) {
      const settingsResult = useSDAction(settingsEvent);

      const [settings, setSettings] = useSettings(
        initialSettings,
        connectedResult,
        settingsResult
      );

      return [
        settings,
        (newSettings: any) => {
          $SD.api.setSettings($SD.uuid, newSettings);
          setSettings(newSettings);
        }
      ];
    };
  };
}

export const createUsePluginSettings = createUseSettings("didReceiveSettings");

export const createUseGlobalSettings = createUseSettings(
  "didReceiveGlobalSettings"
);
