declare const $SD: any;

import createSDAction from "./action";
import createUseBaseSettings from "./baseSettings";

export enum Settings {
  didReceiveSettings = "didReceiveSettings",
  didReceiveGlobalSettings = "didReceiveGlobalSettings"
}

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
          if(settingsEvent === Settings.didReceiveSettings) {
            $SD.api.setSettings($SD.uuid, newSettings);
            setSettings(newSettings);
          } else if(settingsEvent === Settings.didReceiveGlobalSettings) {
            $SD.api.setGlobalSettings($SD.uuid, newSettings);
            setSettings(newSettings);
          }
        }
      ];
    };
  };
}

export const createUsePluginSettings = createUseSettings(Settings.didReceiveSettings);

export const createUseGlobalSettings = createUseSettings(
  Settings.didReceiveGlobalSettings
);
