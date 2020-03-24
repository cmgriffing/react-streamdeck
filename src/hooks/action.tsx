declare const $SD: any;

function createUseSDAction(hooks: any) {
  const { useState, useEffect } = hooks;

  return function(actionName: string): any {
    const [state, setState] = useState({});

    // if (process.env.NODE_ENV === "development") {
    //   // dev specific checks and helpers
    // }

    useEffect(() => {
      const handler = (jsn: any) => {
        setState(jsn);
      };

      $SD.on(`${actionName}`, handler);

      return () => {
        $SD.off(`${actionName}`, handler);
      };
    }, [actionName]);
    return state;
  };
}

export default createUseSDAction;
