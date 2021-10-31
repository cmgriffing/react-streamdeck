declare const $SD: any;
import { Settings } from "./types";

const createGetSettings = (_sd: any) => () => {
  if (_sd.api.getSettings) {
    _sd.api.getSettings(_sd.uuid);
  } else {
    _sd.api.common.getSettings(_sd.uuid);
  }
};

const createGetGlobalSettings = (_sd: any) => () => {
  if (_sd.api.getGlobalSettings) {
    _sd.api.getGlobalSettings(_sd.uuid);
  } else {
    _sd.api.common.getGlobalSettings(_sd.uuid);
  }
};

export default function(
  useReducer: Function,
  useEffect: Function,
  settingsEvent: string
) {
  return function(initialState: any, connectedResult: any, settings: any) {
    useEffect(() => {
      // Not a fan of the timeout but it was the only way to get these to fire at the right time
      setTimeout(() => {
        if (settingsEvent === Settings.didReceiveSettings) {
          createGetSettings($SD)();
        } else if (settingsEvent === Settings.didReceiveGlobalSettings) {
          createGetGlobalSettings($SD)();
        }
      }, 500);
    }, [connectedResult]);

    const reducerResult = useReducer(
      (currentState: any, newState: any) => {
        return { ...currentState, ...newState };
      },
      initialState,
      (initialState: any) => {
        return { ...initialState };
      }
    );

    const [state, setState] = reducerResult;
    console.info("Reducer State", state, settings);

    useEffect(() => {
      setState(settings);
    }, [settings]);

    useEffect(() => {
      if (
        connectedResult &&
        connectedResult.actionInfo &&
        settingsEvent === Settings.didReceiveSettings
      ) {
        setState(connectedResult.actionInfo.payload.settings);
      }
    }, [connectedResult]);

    return reducerResult;
  };
}
