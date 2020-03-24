/* global $SD */

const DestinationEnum = Object.freeze({
  HARDWARE_AND_SOFTWARE: 0,
  HARDWARE_ONLY: 1,
  SOFTWARE_ONLY: 2
});

/** SDApi
 * This ist the main API to communicate between plugin, property inspector and
 * application host.
 * Internal functions:
 * - setContext: sets the context of the current plugin
 * - exec: prepare the correct JSON structure and send
 *
 * Methods exposed in the $SD.api alias
 * Messages send from the plugin
 * -----------------------------
 * - showAlert
 * - showOK
 * - setSettings
 * - setTitle
 * - setImage
 * - sendToPropertyInspector
 *
 * Messages send from Property Inspector
 * -------------------------------------
 * - sendToPlugin
 *
 * Messages received in the plugin
 * -------------------------------
 * willAppear
 * willDisappear
 * keyDown
 * keyUp
 */

const SDApi = {
  send: function(context, fn, payload, debug) {
    /** Combine the passed JSON with the name of the event and it's context
     * If the payload contains 'event' or 'context' keys, it will overwrite existing 'event' or 'context'.
     * This function is non-mutating and thereby creates a new object containing
     * all keys of the original JSON objects.
     */
    const pl = Object.assign({}, { event: fn, context: context }, payload);

    /** Check, if we have a connection, and if, send the JSON payload */
    if (debug) {
      console.log("-----SDApi.send-----");
      console.log("context", context);
      console.log(pl);
      console.log(payload.payload);
      console.log(JSON.stringify(payload.payload));
      console.log("-------");
    }
    $SD.connection && $SD.connection.sendJSON(pl);

    /**
     * DEBUG-Utility to quickly show the current payload in the Property Inspector.
     */

    if (
      $SD.connection &&
      ["sendToPropertyInspector", "showOK", "showAlert", "setSettings"].indexOf(
        fn
      ) === -1
    ) {
      // console.log("send.sendToPropertyInspector", payload);
      // this.sendToPropertyInspector(context, typeof payload.payload==='object' ? JSON.stringify(payload.payload) : JSON.stringify({'payload':payload.payload}), pl['action']);
    }
  },

  registerPlugin: {
    /** Messages send from the plugin */
    showAlert: function(context) {
      SDApi.send(context, "showAlert", {});
    },

    showOk: function(context) {
      SDApi.send(context, "showOk", {});
    },

    setState: function(context, payload) {
      SDApi.send(context, "setState", {
        payload: {
          state: 1 - Number(payload === 0)
        }
      });
    },

    setTitle: function(context, title, target) {
      SDApi.send(context, "setTitle", {
        payload: {
          title: "" + title || "",
          target: target || DestinationEnum.HARDWARE_AND_SOFTWARE
        }
      });
    },

    setImage: function(context, img, target) {
      SDApi.send(context, "setImage", {
        payload: {
          image: img || "",
          target: target || DestinationEnum.HARDWARE_AND_SOFTWARE
        }
      });
    },

    sendToPropertyInspector: function(context, payload, action) {
      SDApi.send(context, "sendToPropertyInspector", {
        action: action,
        payload: payload
      });
    },

    showUrl2: function(context, urlToOpen) {
      SDApi.send(context, "openUrl", {
        payload: {
          url: urlToOpen
        }
      });
    }
  },

  /** Messages send from Property Inspector */

  registerPropertyInspector: {
    sendToPlugin: function(piUUID, action, payload) {
      SDApi.send(
        piUUID,
        "sendToPlugin",
        {
          action: action,
          payload: payload || {}
        },
        false
      );
    }
  },

  /** COMMON */

  common: {
    getSettings: function(context, payload) {
      SDApi.send(context, "getSettings", {});
    },

    setSettings: function(context, payload) {
      SDApi.send(context, "setSettings", {
        payload: payload
      });
    },

    getGlobalSettings: function(context, payload) {
      SDApi.send(context, "getGlobalSettings", {});
    },

    setGlobalSettings: function(context, payload) {
      SDApi.send(context, "setGlobalSettings", {
        payload: payload
      });
    },

    logMessage: function() {
      /**
       * for logMessage we don't need a context, so we allow both
       * logMessage(unneededContext, 'message')
       * and
       * logMessage('message')
       */

      let payload = arguments.length > 1 ? arguments[1] : arguments[0];

      SDApi.send(null, "logMessage", {
        payload: {
          message: payload
        }
      });
    },

    openUrl: function(context, urlToOpen) {
      SDApi.send(context, "openUrl", {
        payload: {
          url: urlToOpen
        }
      });
    },

    test: function() {
      console.log(this);
      console.log(SDApi);
    },

    debugPrint: function(context, inString) {
      // console.log("------------ DEBUGPRINT");
      // console.log([].slice.apply(arguments).join());
      // console.log("------------ DEBUGPRINT");
      SDApi.send(context, "debugPrint", {
        payload: [].slice.apply(arguments).join(".") || ""
      });
    },

    dbgSend: function(fn, context) {
      /** lookup if an appropriate function exists */
      if ($SD.connection && this[fn] && typeof this[fn] === "function") {
        /** verify if type of payload is an object/json */
        const payload = this[fn]();
        if (typeof payload === "object") {
          Object.assign({ event: fn, context: context }, payload);
          $SD.connection && $SD.connection.sendJSON(payload);
        }
      }
      console.log(this, fn, typeof this[fn], this[fn]());
    }
  }
};
