(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Avbm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),o=n("TjRS"),c=n("mXGw"),i=n("ZFoC"),l=n("bESO"),r=n("EQUp");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}window.selectOptions=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"}];var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/documentation/components/SelectInput.mdx"}});var u={_frontmatter:p},b=o.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,s({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"select-input"},"Select Input"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(i.c,{__position:0,__code:"<div class=\"docz-sdpi-wrapper\">\n  <DemoStateContainer\n    initialState={{\n      selectState: '',\n    }}\n  >\n    {({ setState, state: { selectState } }) => (\n      <SDSelectInput\n        label=\"Select Input\"\n        selectedOption={selectState}\n        options={selectOptions}\n        onChange={value => {\n          console.log('I was changed.', value)\n          setState({\n            selectState: value,\n          })\n        }}\n      />\n    )}\n  </DemoStateContainer>\n</div>",__scope:{props:n,DefaultLayout:o.a,useState:c.useState,Props:i.d,Playground:i.c,SDSelectInput:l.a,DemoStateContainer:r.a},mdxType:"Playground"},Object(a.b)("div",{className:"docz-sdpi-wrapper"},Object(a.b)(r.a,{initialState:{selectState:""},mdxType:"DemoStateContainer"},(function(e){var t=e.setState,n=e.state.selectState;return Object(a.b)(l.a,{label:"Select Input",selectedOption:n,options:selectOptions,onChange:function(e){console.log("I was changed.",e),t({selectState:e})},mdxType:"SDSelectInput"})})))),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)(i.d,{of:l.a,mdxType:"Props"}))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/documentation/components/SelectInput.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-documentation-components-select-input-mdx-b62076ba8350ea64e6e2.js.map