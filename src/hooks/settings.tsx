declare const $SD: any;

import createUseSDAction from "./action";
import createUseBaseSettings from "./baseSettings";
import { Settings } from "./types";

function createUseSettings(settingsEvent: string) {
  return function(hooks: {
    useReducer: Function;
    useEffect: Function;
    useState: Function;
  }) {
    const { useReducer, useEffect, useState } = hooks;
    const useSettings = createUseBaseSettings(
      useReducer,
      useEffect,
      settingsEvent
    );
    const useSDAction = createUseSDAction({
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

      useEffect(() => {
        setSettings(settingsResult);
      }, [settingsResult]);

      return [
        settings,
        (newSettings: any) => {
          if (settingsEvent === Settings.didReceiveSettings) {
            $SD.api.setSettings($SD.uuid, newSettings);
            $SD.api.getSettings($SD.uuid);
            setSettings(newSettings);
          } else if (settingsEvent === Settings.didReceiveGlobalSettings) {
            $SD.api.setGlobalSettings($SD.uuid, newSettings);
            $SD.api.getGlobalSettings($SD.uuid);
            setSettings(newSettings);
          }
        }
      ];
    };
  };
}

export const createUsePluginSettings = createUseSettings(
  Settings.didReceiveSettings
);

export const createUseGlobalSettings = createUseSettings(
  Settings.didReceiveGlobalSettings
);
