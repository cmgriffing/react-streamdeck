(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{KtRs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("/FXl"),s=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/documentation/hooks.mdx"}});var i={_frontmatter:c},a=s.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(o.b)(a,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"These hooks are used to connect your React application into the StreamDeck from the Property Inspector page."),Object(o.b)("p",null,"They need to be run within the Property Inspector context so these examples are a bit contrived."),Object(o.b)("p",null,"Currently with how this application is bundled, you must create the hooks using our Factory functions. These take in the hooks they require as arguments to make sure that we do not have conflicting React versions."),Object(o.b)("p",null,"Eventually it might make sense to extract these to their own library and set up the build and deploy process better for Hooks."),Object(o.b)("h2",{id:"createusesdaction"},"createUseSDAction"),Object(o.b)("p",null,"This hook is used to bind to the result of StreamDeck Actions or Events."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import { useState, useEffect } from "react-streamdeck";\n\nconst useSDAction = createUseSDAction({\n  useState,\n  useEffect\n});\n\nexport default function App() {\n  const connectedResult = useSDAction("connected");\n\n  // Holds the most recent message sent from the plugin to the property inspector.\n  const sendToPropertyInspectorResult = useSDAction("sendToPropertyInspector");\n\n  return (\n    <div>\n      <div>\n        connectedResult:\n        <pre>\n          <code>{JSON.stringify(connectedResult)}</code>\n        </pre>\n      </div>\n      <div>\n        sendToPropertyInspectorResult:\n        <pre>\n          <code>{JSON.stringify(sendToPropertyInspectorResult)}</code>\n        </pre>\n      </div>\n    </div>\n  );\n}\n')),Object(o.b)("h2",{id:"createusepluginsettings"},"createUsePluginSettings"),Object(o.b)("p",null,"This hook consumes and updates when the Plugin Settings update. It is how we fetch the initial form state from previous uses and it is how we update that state for later."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import { useState, useEffect } from "react";\nimport {\n  createUseSDAction,\n  createUsePluginSettings,\n  SDTextInput\n} from "react-streamdeck";\n\n// We need this for the initial connection\nconst useSDAction = createUseSDAction({\n  useState,\n  useEffect\n});\n\nconst usePluginSettings = createUsePluginSettings({\n  useState,\n  useEffect,\n  useReducer\n});\n\nexport default function App() {\n  // usePluginSettings depends on the connectedResult\n  const connectedResult = useSDAction("connected");\n\n  const [settings, setSettings] = usePluginSettings(\n    {\n      textState: ""\n    },\n    connectedResult\n  );\n\n  return (\n    <SDTextInput\n      value={settings.textState}\n      label="Testing"\n      onChange={event => {\n        const newState = {\n          ...settings,\n          textState: event.target.value\n        };\n        setSettings(newState);\n      }}\n    />\n  );\n}\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/documentation/hooks.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-documentation-hooks-mdx-6f3bfd60c95de9321ca1.js.map