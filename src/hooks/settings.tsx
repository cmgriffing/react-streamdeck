declare const $SD: any;

import createUseSDAction from "./action";
import createUseBaseSettings from "./baseSettings";
import { Settings } from "./types";

function safeGetSettings(...args: any[]) {
  if ($SD.api) {
    return $SD.api.getSettings(...args);
  } else {
    return $SD.getSettings(...args);
  }
}

function safeSetSettings(...args: any[]) {
  if ($SD.api) {
    return $SD.api.setSettings(...args);
  } else {
    return $SD.setSettings(...args);
  }
}

function safeGetGlobalSettings(...args: any[]) {
  if ($SD.api) {
    return $SD.api.getGlobalSettings(...args);
  } else {
    return $SD.getGlobalSettings(...args);
  }
}

function safeSetGlobalSettings(...args: any[]) {
  if ($SD.api) {
    return $SD.api.setGlobalSettings(...args);
  } else {
    return $SD.setGlobalSettings(...args);
  }
}

function createUseSettings(settingsEvent: string) {
  return function (hooks: {
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
      useEffect,
    });
    return function (initialSettings: any, connectedResult: any) {
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
            safeSetSettings($SD.uuid, newSettings);
            safeGetSettings($SD.uuid);
            setSettings(newSettings);
          } else if (settingsEvent === Settings.didReceiveGlobalSettings) {
            safeSetGlobalSettings($SD.uuid, newSettings);
            safeGetGlobalSettings($SD.uuid);
            setSettings(newSettings);
          }
        },
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
